/* Recomposed formats for the two lead designs: Stories (1080x1920) and landscape (1200x628).
   These are new layouts on the same parts, not crops.                                      */
const { wayne, forbes, dna, GRAIN } = require('./build.cjs');

const NAME = 'Wayne Allyn Root';
const CREDIT_1 = 'PR by DNA Teams';
const CREDIT_2 = 'digitalnetworkingagency.com';
const NOW = 'Now published on Forbes.com';
const THUMB_SPAN = 1043 - 12;
const FA = 3592 / 940;

module.exports = (ink) => {
  const F = ink.FEATURED;
  const INK = [F.left, F.top, F.width, F.height].join(',');
  const out = [];
  const STORY = { w: 1080, h: 1920, safe: { t: 270, b: 380 } };
  const LAND = { w: 1200, h: 628, margin: 48 };

  /* ---------- Arch, Stories ---------- */
  {
    const archX0 = 180, archX1 = 900, archW = 720, S = archW / F.width;
    const wordInkTop = 372, archTop = wordInkTop + F.height * S + 26;
    const panelTop = 1248, headTop = archTop + 46;
    const scale = (panelTop - 22 - headTop) / THUMB_SPAN;
    const w = wayne({ version: 'wayne_bw_tie', scale, anchorX: 540, headTopY: headTop });
    const logoH = 124, inSize = 108, GAP = 44, lockW = logoH * FA + GAP + inSize * 0.81, lockX = 540 - lockW / 2;
    const nameTop = panelTop + 40 + logoH + 36 + 28;
    out.push({
      ...STORY, id: 'd1_story', file: 'Wayne_Forbes_1_Arch_Story_1080x1920', title: 'Editorial Arch, Stories',
      geo: w.geo, centre: { x0: archX0, x1: archX1 }, visBottom: panelTop, dsf: 1,
      css: `
        #c{background:var(--cream)}
        .rule{height:1px;background:rgba(18,18,18,.22)}
        .arch{left:${archX0}px;top:${archTop}px;width:${archW}px;height:${1920 - archTop}px;background:var(--arch-red);border-radius:${archW / 2}px ${archW / 2}px 0 0}
        .arch i{position:absolute;inset:14px 14px -2px 14px;border:1.5px solid rgba(238,234,224,.5);border-bottom:0;border-radius:${archW / 2 - 14}px ${archW / 2 - 14}px 0 0}
        .word{left:${archX0 - F.left * S}px;top:${wordInkTop - F.top * S}px;font-size:${S}px;color:#121212}
        .panel{left:0;right:0;top:${panelTop}px;bottom:0;background:var(--panel)}
        .in{color:var(--arch-red);font-size:${inSize}px}
        .name{font-size:32px;color:var(--offwhite)}
        .lab{color:rgba(243,244,238,.72)}`,
      body: `
        <div class="arch"><i></i></div>${w.html}<div class="panel cover"></div>${GRAIN}
        ${dna('mark', 'black', 38, `left:64px;top:282px`)}
        <div class="rule" style="left:64px;right:64px;top:340px"></div>
        <span class="poster word chk" data-name="FEATURED" data-ink="${INK}">Featured</span>
        <span class="ital in chk" data-name="in" style="left:${lockX}px;top:${panelTop + 40 + logoH - inSize * 0.835}px">in</span>
        ${forbes('white', logoH, `left:${lockX + inSize * 0.81 + GAP}px;top:${panelTop + 40}px`)}
        <div class="rule" style="left:64px;right:64px;top:${panelTop + 40 + logoH + 36}px;background:rgba(243,244,238,.22)"></div>
        <span class="syne8 name chk" style="left:64px;top:${nameTop}px">${NAME}</span>
        <span class="lab chk" style="left:64px;top:${nameTop + 45}px">${NOW}</span>
        <span class="lab r chk" style="right:64px;top:${nameTop + 9}px;color:var(--offwhite)">${CREDIT_1}</span>
        <span class="lab m r chk" style="right:64px;top:${nameTop + 45}px">${CREDIT_2}</span>`,
      allowOverlap: [['in', 'forbes']],
    });
  }

  /* ---------- Arch, landscape ---------- */
  {
    const archX0 = 668, archW = 484, archTop = 60;
    const headTop = archTop + 34;
    const scale = (628 - 14 - headTop) / THUMB_SPAN;
    const w = wayne({ version: 'wayne_bw_tie', scale, anchorX: archX0 + archW / 2, headTopY: headTop });
    const wordW = 540, S = wordW / F.width, wordInkTop = 126;
    const lockTop = wordInkTop + F.height * S + 30, logoH = 84, inSize = 74;
    out.push({
      ...LAND, id: 'd1_land', file: 'Wayne_Forbes_1_Arch_Landscape_1200x628', title: 'Editorial Arch, landscape',
      geo: w.geo, centre: { x0: archX0, x1: archX0 + archW },
      css: `
        #c{background:var(--cream)}
        .rule{height:1px;background:rgba(18,18,18,.22)}
        .arch{left:${archX0}px;top:${archTop}px;width:${archW}px;height:${628 - archTop}px;background:var(--arch-red);border-radius:${archW / 2}px ${archW / 2}px 0 0}
        .arch i{position:absolute;inset:11px 11px -2px 11px;border:1.5px solid rgba(238,234,224,.5);border-bottom:0;border-radius:${archW / 2 - 11}px ${archW / 2 - 11}px 0 0}
        .word{left:${48 - F.left * S}px;top:${wordInkTop - F.top * S}px;font-size:${S}px;color:#121212}
        .in{color:var(--arch-red);font-size:${inSize}px}
        .name{font-size:28px;color:#121212}
        .lab{color:rgba(18,18,18,.78);font-size:13px}`,
      body: `
        <div class="arch"><i></i></div>${w.html}${GRAIN}
        ${dna('mark', 'black', 32, `left:48px;top:48px`)}
        <span class="poster word chk" data-name="FEATURED" data-ink="${INK}">Featured</span>
        <span class="ital in chk" data-name="in" style="left:48px;top:${lockTop + logoH - inSize * 0.835}px">in</span>
        ${forbes('black', logoH, `left:${48 + inSize * 0.81 + 30}px;top:${lockTop}px`)}
        <div class="rule" style="left:48px;width:${wordW}px;top:${lockTop + logoH + 30}px"></div>
        <span class="syne8 name chk" style="left:48px;top:${lockTop + logoH + 52}px">${NAME}</span>
        <span class="lab chk" style="left:48px;top:${lockTop + logoH + 96}px">${NOW}</span>
        <span class="lab chk" style="left:48px;bottom:48px;color:#121212">${CREDIT_1}</span>
        <span class="lab m chk" style="left:${48 + 196}px;bottom:48px">${CREDIT_2}</span>`,
      allowOverlap: [['in', 'forbes']],
    });
  }

  /* ---------- Black and Gold, Stories ---------- */
  {
    const logoH = 150, logoW = logoH * FA;
    const headTop = 634, scale = 0.675;
    const w = wayne({ version: 'wayne_colour', scale, anchorX: 540, headTopY: headTop });
    const fadeA = w.geo.thumb.y1 + 8, fadeB = fadeA + 92;
    const nameTop = fadeA + 62;
    out.push({
      ...STORY, id: 'd4_story', file: 'Wayne_Forbes_4_BlackGold_Story_1080x1920', title: 'Black and Gold, Stories',
      geo: w.geo, centre: { x0: 64, x1: 1016 }, visBottom: fadeB, onWayne: [NAME], dsf: 1,
      css: `
        #c{background:#090909}
        .warm{inset:0;background:radial-gradient(ellipse 50% 32% at 50% 56%,rgba(214,160,74,.46),rgba(150,100,40,.20) 48%,rgba(60,40,16,0) 100%)}
        .frame{inset:30px;border:1.5px solid;border-image:var(--gold-grad) 1}
        .cm{width:46px;height:46px;border:0 solid #E7C77E}
        .cm.tl{left:24px;top:24px;border-left-width:5px;border-top-width:5px}.cm.tr{right:24px;top:24px;border-right-width:5px;border-top-width:5px}
        .cm.bl{left:24px;bottom:24px;border-left-width:5px;border-bottom-width:5px}.cm.br{right:24px;bottom:24px;border-right-width:5px;border-bottom-width:5px}
        .wayne{filter:drop-shadow(0 8px 14px rgba(0,0,0,.45)) drop-shadow(0 30px 70px rgba(0,0,0,.6));}
        .floor{left:0;right:0;top:${fadeA}px;bottom:0;background:linear-gradient(180deg,rgba(9,9,9,0),#090909 ${fadeB - fadeA}px)}
        .ctr{left:0;right:0;text-align:center}
        .as{font-size:50px;color:var(--offwhite)}
        .name{font-size:52px;color:var(--offwhite)}
        .grule{left:340px;right:340px;height:1.5px;background:var(--gold-grad)}
        .lab.ctr{margin-right:-.22em}.gold{color:var(--gold)}.cred{color:rgba(243,244,238,.7)}`,
      body: `
        <div class="warm"></div>${w.html}<div class="floor"></div>${GRAIN.replace('class="grain"', 'class="grain d"')}
        <div class="frame"></div><div class="cm tl"></div><div class="cm tr"></div><div class="cm bl"></div><div class="cm br"></div>
        ${dna('mark', 'white', 34, `left:${540 - (34 * 876 / 321) / 2}px;top:286px`)}
        <span class="ital as ctr" style="top:350px"><span class="chk" data-name="As featured in">As featured in</span></span>
        ${forbes('gold', logoH, `left:${540 - logoW / 2}px;top:428px`)}
        <span class="syne8 name ctr" style="top:${nameTop}px"><span class="chk" data-name="${NAME}">${NAME}</span></span>
        <div class="grule" style="top:${nameTop + 63}px"></div>
        <span class="lab gold ctr" style="font-size:17px;top:${nameTop + 84}px"><span class="chk">${NOW}</span></span>
        <span class="lab m cred ctr" style="font-size:15px;top:${nameTop + 120}px"><span class="chk" data-name="credit">${CREDIT_1} &nbsp;·&nbsp; ${CREDIT_2}</span></span>`,
    });
  }

  /* ---------- Black and Gold, landscape ---------- */
  {
    const headTop = 62, scale = (628 - 36 - headTop) / THUMB_SPAN;   // thumb clears the frame line
    const w = wayne({ version: 'wayne_colour', scale, anchorX: 890, headTopY: headTop });
    const logoH = 112;
    out.push({
      ...LAND, id: 'd4_land', file: 'Wayne_Forbes_4_BlackGold_Landscape_1200x628', title: 'Black and Gold, landscape',
      geo: w.geo,
      css: `
        #c{background:#090909}
        .warm{inset:0;background:radial-gradient(ellipse 34% 62% at 74% 60%,rgba(214,160,74,.48),rgba(150,100,40,.20) 50%,rgba(60,40,16,0) 100%)}
        .frame{inset:20px;border:1.5px solid;border-image:var(--gold-grad) 1}
        .cm{width:34px;height:34px;border:0 solid #E7C77E}
        .cm.tl{left:15px;top:15px;border-left-width:4px;border-top-width:4px}.cm.tr{right:15px;top:15px;border-right-width:4px;border-top-width:4px}
        .cm.bl{left:15px;bottom:15px;border-left-width:4px;border-bottom-width:4px}.cm.br{right:15px;bottom:15px;border-right-width:4px;border-bottom-width:4px}
        .wclip{left:0;top:0;width:1200px;height:${628 - 21}px;overflow:hidden}
        .wayne{filter:drop-shadow(0 8px 14px rgba(0,0,0,.45)) drop-shadow(0 30px 70px rgba(0,0,0,.6))}
        .as{font-size:40px;color:var(--offwhite)}
        .name{font-size:30px;color:var(--offwhite)}
        .grule{left:64px;width:300px;height:1.5px;background:var(--gold-grad)}
        .lab{font-size:13px}.gold{color:var(--gold)}.cred{color:rgba(243,244,238,.7)}`,
      body: `
        <div class="warm"></div><div class="wclip">${w.html}</div>${GRAIN.replace('class="grain"', 'class="grain d"')}
        <div class="frame"></div><div class="cm tl"></div><div class="cm tr"></div><div class="cm bl"></div><div class="cm br"></div>
        ${dna('mark', 'white', 30, `left:64px;top:64px`)}
        <span class="ital as chk" data-name="As featured in" style="left:64px;top:150px">As featured in</span>
        ${forbes('gold', logoH, `left:64px;top:206px`)}
        <span class="syne8 name chk" style="left:64px;top:372px">${NAME}</span>
        <div class="grule" style="top:424px"></div>
        <span class="lab gold chk" style="left:64px;top:444px">${NOW}</span>
        <span class="lab cred chk" style="left:64px;bottom:64px">${CREDIT_1}</span>
        <span class="lab m cred chk" style="left:${64 + 196}px;bottom:64px">${CREDIT_2}</span>`,
      margin: 48, visBottom: 607,
    });
  }
  return out;
};
