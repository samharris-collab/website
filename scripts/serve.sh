#!/bin/sh
# Restarts the preview server on :3100, tracking its PID in a file.
# (Matching on cmdline is not safe here: the pattern would appear in the
# command line of whatever shell invokes this script, and kill the caller.)
PIDFILE=/tmp/dna-server.pid
if [ -f "$PIDFILE" ]; then
  kill "$(cat "$PIDFILE")" 2>/dev/null
  rm -f "$PIDFILE"
fi
i=0
while [ $i -lt 15 ]; do
  curl -sS -o /dev/null --max-time 1 http://127.0.0.1:3100/ 2>/dev/null || break
  sleep 1
  i=$((i + 1))
done
nohup npx next start -p 3100 >/tmp/dna-server.log 2>&1 &
echo $! > "$PIDFILE"
for i in $(seq 1 40); do
  sleep 1
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 3 http://127.0.0.1:3100/sitemap.xml 2>/dev/null)
  [ "$code" = "200" ] && echo "server ready" && exit 0
done
echo "server failed"; tail -20 /tmp/dna-server.log; exit 1
