#!/bin/sh
# Restarts the preview server on :3100 without matching this script's own
# command line (pkill -f would kill the caller).
for p in $(ss -lptn 2>/dev/null | grep ':3100' | grep -oP 'pid=\K[0-9]+' | sort -u); do
  kill "$p" 2>/dev/null
done
sleep 1
nohup npx next start -p 3100 >/tmp/dna-server.log 2>&1 &
for i in $(seq 1 30); do
  sleep 1
  code=$(curl -sS -o /dev/null -w '%{http_code}' http://127.0.0.1:3100/ 2>/dev/null)
  [ "$code" = "200" ] && echo "server ready" && exit 0
done
echo "server failed"; tail -20 /tmp/dna-server.log; exit 1
