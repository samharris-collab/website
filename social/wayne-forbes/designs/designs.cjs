/* The five designs. Every position is derived from the canvas grid, the measured font ink
   metrics (ink) and the measured photo anchors (wayne()), never eyeballed per file.        */
const { wayne, forbes, dna, GRAIN } = require('./build.cjs');

const NAME = 'Wayne Allyn Root';
const CREDIT_1 = 'PR by DNA Teams';
const CREDIT_2 = 'digitalnetworkingagency.com';
const NOW = 'Now published on Forbes.com';

module.exports = (ink) => {
  const F = ink.FEATURED;
  const INK = [F.left, F.top, F.width, F.height].join(',');
  const designs = [];

  /* ------------------------------ 1. EDITORIAL ARCH ------------------------------ */
  {
    const archX0 = 180, archX1 = 900, archW = archX1 - archX0;
    const S = archW / F.width;                 // font-size that makes the INK exactly arch-wide
    const wordInkTop = 150;
    const wordInkBottom = wordInkTop + F.height * S;
    const archTop = wordInkBottom + 26;
    const panelH = 344, panelTop = 1350 - panelH;
    const headTop = archTop + 46;
    const scale = (panelTop - 22 - headTop) / (1043 - 12);   // thumb box bottom clears the panel by 22px
    const w = wayne({ version: 'wayne_bw_tie', scale, anchorX: 540, headTopY: headTop, bias: 0.5 });
    const logoH = 124, inSize = 122;
    const lockW = logoH * (3592 / 940) + 22 + inSize * 0.81;
    const lockX = 540 - lockW / 2;
    designs.push({
      id: 'd1', file: 'Wayne_Forbes_1_Arch', title: 'Wayne Allyn Root, Featured in Forbes: Editorial Arch',
      geo: w.geo, centre: { x0: archX0, x1: archX1 }, visBottom: panelTop,
      css: `
        #c{background:var(--cream)}
        .rule{height:1px;background:rgba(18,18,18,.22)}
        .arch{left:${archX0}px;top:${archTop}px;width:${archW}px;height:${1350 - archTop}px;background:var(--arch-red);border-radius:${archW / 2}px ${archW / 2}px 0 0}
        .arch i{position:absolute;inset:14px 14px -2px 14px;border:1.5px solid rgba(238,234,224,.5);border-bottom:0;border-radius:${archW / 2 - 14}px ${archW / 2 - 14}px 0 0}
        .word{left:${archX0 - F.left * S}px;top:${wordInkTop - F.top * S}px;font-size:${S}px;color:#121212}
        .panel{left:0;right:0;top:${panelTop}px;bottom:0;background:var(--panel)}
        .in{color:var(--arch-red);font-size:${inSize}px}
        .name{font-size:32px;color:var(--offwhite)}
        .lab{color:rgba(243,244,238,.72)}
        .yr{color:#121212}`,
      body: `
        <div class="arch"><i></i></div>
        ${w.html}
        <div class="panel cover"></div>
        ${GRAIN}
        ${dna('mark', 'black', 38, `left:64px;top:64px`)}
        <span class="lab r chk yr" style="right:64px;top:77px">2026</span>
        <div class="rule" style="left:64px;right:64px;top:122px"></div>
        <span class="poster word chk" data-name="FEATURED" data-ink="${INK}">Featured</span>
        <span class="ital in chk" data-name="in" style="left:${lockX}px;top:${panelTop + 40 + logoH - inSize * 0.835}px">in</span>
        ${forbes('white', logoH, `left:${lockX + inSize * 0.81 + 22}px;top:${panelTop + 40}px`)}
        <div class="rule" style="left:64px;right:64px;top:${panelTop + 40 + logoH + 36}px;background:rgba(243,244,238,.22)"></div>
        <span class="syne8 name chk" style="left:64px;bottom:${64 + 15 + 13}px">${NAME}</span>
        <span class="lab chk" style="left:64px;bottom:64px">${NOW}</span>
        <span class="lab r chk" style="right:64px;bottom:${64 + 15 + 13}px;color:var(--offwhite)">${CREDIT_1}</span>
        <span class="lab m r chk" style="right:64px;bottom:64px">${CREDIT_2}</span>`,
      allowOverlap: [['in', 'forbes']],
    });
  }

  const THUMB_SPAN = 1043 - 12;   // head top to the bottom of the thumb box, in 1x cutout px
  const HEADLINE = ['Why Leadership', 'Reinvention', 'Doesn’t Have an', 'Expiration Date'];

  /* ------------------------------ 2. NEON DNA ------------------------------ */
  {
    const S = 952 / F.width;                       // ink spans the full safe width
    const wordInkTop = 142, capH = F.height * S;
    const panelH = 344, panelTop = 1350 - panelH;
    const headTop = wordInkTop + capH * 0.70;      // head overlaps the lower 30% of the letters
    const scale = (panelTop - 22 - headTop) / THUMB_SPAN;
    const w = wayne({ version: 'wayne_bw', scale, anchorX: 540, headTopY: headTop, bias: 0.5 });
    const logoH = 124, inSize = 122;
    const lockW = logoH * (3592 / 940) + 22 + inSize * 0.81;
    const lockX = 540 - lockW / 2;
    designs.push({
      id: 'd2', file: 'Wayne_Forbes_2_Neon', title: 'Wayne Allyn Root, Featured in Forbes: Neon DNA',
      geo: w.geo, centre: { x0: 64, x1: 1016 }, visBottom: panelTop,
      css: `
        #c{background:var(--black)}
        .glow{right:-290px;top:-290px;width:580px;height:580px;background:radial-gradient(closest-side,rgba(203,255,0,.66),rgba(203,255,0,.24) 38%,rgba(203,255,0,.05) 70%,rgba(203,255,0,0) 100%)}
        .back{left:140px;top:${headTop - 60}px;width:800px;height:${panelTop - headTop + 60}px;background:radial-gradient(ellipse 50% 52% at 50% 58%,rgba(243,244,238,.16),rgba(243,244,238,.05) 60%,rgba(243,244,238,0) 100%)}
        .word{left:${64 - F.left * S}px;top:${wordInkTop - F.top * S}px;font-size:${S}px;color:var(--offwhite)}
        .wayne{filter:brightness(1.08) drop-shadow(0 26px 50px rgba(0,0,0,.55))}
        .panel{left:0;right:0;top:${panelTop}px;bottom:0;background:var(--lime)}
        .in{color:var(--black);font-size:${inSize}px}
        .name{font-size:32px;color:var(--black)}
        .lab{color:rgba(12,13,10,.78)}
        .rule{height:1px;background:rgba(12,13,10,.3)}`,
      body: `
        <div class="glow"></div><div class="back"></div>
        <span class="poster word chk" data-name="FEATURED" data-ink="${INK}">Featured</span>
        ${w.html}
        <div class="panel cover"></div>
        ${GRAIN}
        ${dna('mark', 'lime', 38, `left:64px;top:64px`)}
        <span class="ital in chk" data-name="in" style="left:${lockX}px;top:${panelTop + 40 + logoH - inSize * 0.835}px">in</span>
        ${forbes('black', logoH, `left:${lockX + inSize * 0.81 + 22}px;top:${panelTop + 40}px`)}
        <div class="rule" style="left:64px;right:64px;top:${panelTop + 40 + logoH + 36}px"></div>
        <span class="syne8 name chk" style="left:64px;bottom:${64 + 15 + 13}px">${NAME}</span>
        <span class="lab chk" style="left:64px;bottom:64px">${NOW}</span>
        <span class="lab r chk" style="right:64px;bottom:${64 + 15 + 13}px;color:var(--black)">${CREDIT_1}</span>
        <span class="lab m r chk" style="right:64px;bottom:64px">${CREDIT_2}</span>`,
      allowOverlap: [['in', 'forbes']], onWayne: ['FEATURED'],
    });
  }

  /* ------------------------------ 3. PATRIOT ------------------------------ */
  {
    const bandTop = 1128, stripe = 10;
    const headTop = 236, scale = 0.775;
    const w = wayne({ version: 'wayne_colour', scale, anchorX: 668, headTopY: headTop, bias: 0.5 });
    const logoH = 112;
    const star = (s) => `<svg class="st" width="${s}" height="${s}" viewBox="0 0 24 24"><path fill="#fff" d="M12 1.6l2.9 6.6 7.2.7-5.4 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7L1.9 8.9l7.2-.7z"/></svg>`;
    designs.push({
      id: 'd3', file: 'Wayne_Forbes_3_Patriot', title: 'Wayne Allyn Root, As Seen in Forbes: Patriot',
      geo: w.geo, visBottom: bandTop - stripe,
      css: `
        #c{background:linear-gradient(168deg,var(--navy-1) 0%,#0B1C4F 46%,var(--navy-2) 100%)}
        .stars{inset:0;opacity:.16;-webkit-mask-image:linear-gradient(215deg,#000 0%,rgba(0,0,0,.55) 30%,transparent 62%);mask-image:linear-gradient(215deg,#000 0%,rgba(0,0,0,.55) 30%,transparent 62%)}
        .rim{left:${w.geo.left - 80}px;top:${headTop - 110}px;width:${w.geo.width + 160}px;height:${bandTop - headTop + 110}px;background:radial-gradient(ellipse 50% 50% at 50% 46%,rgba(126,168,255,.42),rgba(90,130,240,.14) 55%,rgba(90,130,240,0) 100%)}
        .wayne{filter:drop-shadow(0 8px 14px rgba(2,6,24,.45)) drop-shadow(0 30px 70px rgba(2,6,24,.6))}
        .seen{left:64px;top:64px;font-size:64px;color:#fff}
        .bar{left:64px;width:96px;height:8px;background:var(--band-red)}
        .hl{left:64px;font-size:46px;line-height:1.08;color:#fff;letter-spacing:-.005em;white-space:nowrap}
        .hl span{display:block}
        .stripe{left:0;right:0;top:${bandTop - stripe}px;height:${stripe}px;background:#fff}
        .band{left:0;right:0;top:${bandTop}px;bottom:0;background:var(--band-red)}
        .name{font-size:52px;color:#fff}
        .lab{color:#fff}
        .now{display:flex;align-items:center;gap:12px}`,
      body: `
        <svg class="stars" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><defs><pattern id="sp" width="96" height="96" patternUnits="userSpaceOnUse"><path transform="translate(14 14) scale(.75)" fill="#fff" d="M12 1.6l2.9 6.6 7.2.7-5.4 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7L1.9 8.9l7.2-.7z"/><path transform="translate(62 62) scale(.75)" fill="#fff" d="M12 1.6l2.9 6.6 7.2.7-5.4 4.8 1.6 7-6.3-3.7-6.3 3.7 1.6-7L1.9 8.9l7.2-.7z"/></pattern></defs><rect width="100%" height="100%" fill="url(#sp)"/></svg>
        <div class="rim"></div>
        ${w.html}
        <div class="stripe cover"></div><div class="band cover"></div>
        ${GRAIN}
        <span class="ital seen chk" data-name="As seen in">As seen in</span>
        ${forbes('white', logoH, `left:64px;top:148px`)}
        <div class="bar" style="top:${148 + logoH + 34}px"></div>
        <div class="bar" style="top:556px;width:56px;height:5px"></div>
        <p class="serif hl chk" data-name="headline" style="top:586px">${HEADLINE.map((l) => `<span>${l}</span>`).join('')}</p>
        <span class="syne8 name chk" style="left:64px;top:${bandTop + 44}px">${NAME}</span>
        <span class="lab now chk" data-name="now" style="left:64px;bottom:64px;font-size:15px">${star(15)}<span>${NOW}</span>${star(15)}</span>
        <span class="lab r chk" style="right:64px;bottom:${64 + 15 + 12}px">${CREDIT_1}</span>
        <span class="lab m r chk" style="right:64px;bottom:64px">${CREDIT_2}</span>
        ${dna('mark', 'white', 34, `right:64px;top:64px`)}`,
    });
  }

  /* ------------------------------ 4. BLACK AND GOLD ------------------------------ */
  {
    const logoH = 150, logoW = logoH * (3592 / 940);
    const headTop = 404, scale = 0.648;
    const w = wayne({ version: 'wayne_colour', scale, anchorX: 540, headTopY: headTop, bias: 0.5 });
    const thumbBottom = w.geo.thumb.y1;
    const fadeA = thumbBottom + 8, fadeB = fadeA + 92;           // the fade starts below the thumb
    const mA = ((fadeA - w.geo.top) / w.geo.height) * 100, mB = ((fadeB - w.geo.top) / w.geo.height) * 100;
    designs.push({
      id: 'd4', file: 'Wayne_Forbes_4_BlackGold', title: 'Wayne Allyn Root, As Featured in Forbes: Black and Gold',
      geo: w.geo, centre: { x0: 64, x1: 1016 }, visBottom: fadeB,
      css: `
        #c{background:#090909}
        .warm{inset:0;background:radial-gradient(ellipse 46% 40% at 50% 58%,rgba(214,160,74,.46),rgba(150,100,40,.20) 48%,rgba(60,40,16,0) 100%)}
        .frame{inset:30px;border:1.5px solid;border-image:var(--gold-grad) 1}
        .cm{width:46px;height:46px;border:0 solid #E7C77E}
        .cm.tl{left:24px;top:24px;border-left-width:5px;border-top-width:5px}
        .cm.tr{right:24px;top:24px;border-right-width:5px;border-top-width:5px}
        .cm.bl{left:24px;bottom:24px;border-left-width:5px;border-bottom-width:5px}
        .cm.br{right:24px;bottom:24px;border-right-width:5px;border-bottom-width:5px}
        .wayne{filter:drop-shadow(0 8px 14px rgba(0,0,0,.45)) drop-shadow(0 30px 70px rgba(0,0,0,.6));-webkit-mask-image:linear-gradient(180deg,#000 ${mA}%,transparent ${mB}%);mask-image:linear-gradient(180deg,#000 ${mA}%,transparent ${mB}%)}
        .floor{left:0;right:0;top:${fadeA}px;bottom:0;background:linear-gradient(180deg,rgba(9,9,9,0),#090909 ${fadeB - fadeA}px)}
        .as{left:0;right:0;text-align:center;font-size:50px;color:var(--offwhite)}
        .name{left:0;right:0;text-align:center;font-size:52px;color:var(--offwhite)}
        .grule{left:340px;right:340px;height:1.5px;background:var(--gold-grad)}
        .lab{left:0;right:0;text-align:center;margin-right:-.22em}
        .gold{color:var(--gold)}
        .cred{color:rgba(243,244,238,.7)}`,
      body: `
        <div class="warm"></div>
        ${w.html}
        <div class="floor"></div>
        ${GRAIN}
        <div class="frame"></div><div class="cm tl"></div><div class="cm tr"></div><div class="cm bl"></div><div class="cm br"></div>
        ${dna('mark', 'white', 34, `left:${540 - (34 * 876 / 321) / 2}px;top:78px`)}
        <span class="ital as" ><span class="chk" data-name="As featured in">As featured in</span></span>
        ${forbes('gold', logoH, `left:${540 - logoW / 2}px;top:214px`)}
        <span class="syne8 name"><span class="chk" data-name="${NAME}">${NAME}</span></span>
        <div class="grule"></div>
        <span class="lab gold now4" style="font-size:17px"><span class="chk">${NOW}</span></span>
        <span class="lab m cred" style="font-size:14px"><span class="chk" data-name="credit">${CREDIT_1} &nbsp;·&nbsp; ${CREDIT_2}</span></span>`,
      onWayne: [NAME],
      // vertical rhythm for the centred stacks
      postCss: `
        .as{top:138px}
        .name{top:1150px}
        .grule{top:1213px}
        .now4{top:1234px}
        .cred{top:1270px}`,
    });
  }

  /* ------------------------------ 5. HEADLINE ------------------------------ */
  {
    const hs = 98;                                   // headline size: longest line ~ 5.35 x hs = 524
    const ruleBottom = 1200;
    const scale = 0.665;
    const headTop = ruleBottom - 16 - THUMB_SPAN * scale;
    const colEdge = 640;
    // right edge of the silhouette sits on the right margin
    const left = 1016 - (A_bbox_right()) * scale;
    const w = wayne({ version: 'wayne_bw_tie', scale, anchorX: left + anchorOffset(scale), headTopY: headTop, bias: 0.5 });
    const logoH = 92;
    const hlTop = 316;
    designs.push({
      id: 'd5', file: 'Wayne_Forbes_5_Headline', title: 'Wayne Allyn Root, As Featured in Forbes: Headline',
      geo: w.geo, visBottom: ruleBottom,
      css: `
        #c{background:var(--offwhite)}
        .paper{inset:0;background:radial-gradient(ellipse 80% 70% at 60% 40%,rgba(255,255,255,.55),rgba(255,255,255,0) 70%)}
        .r1{left:64px;right:64px;height:3px;background:#111}
        .r2{left:64px;right:64px;height:1px;background:rgba(17,17,17,.55)}
        .v{top:128px;width:1px;height:${ruleBottom - 128}px;background:rgba(17,17,17,.16)}
        .lab{color:#111}
        .hl{left:64px;top:${hlTop}px;font-size:${hs}px;line-height:1;color:#111;letter-spacing:-.012em;white-space:nowrap}
        .hl span{display:block}
        .hl mark{background:linear-gradient(180deg,transparent 0 24%,var(--lime) 24% 93%,transparent 93%);color:#111;padding:0 .14em 0 .06em;margin-left:-.06em}
        .wayne{filter:drop-shadow(0 6px 10px rgba(0,0,0,.18)) drop-shadow(-14px 22px 46px rgba(0,0,0,.22))}
        .wclip{left:0;top:0;width:1080px;height:${ruleBottom}px;overflow:hidden}
        .bar{left:64px;width:64px;height:6px;background:#111}
        .name{left:64px;font-size:29px;line-height:1.12;color:#111}`,
      body: `
        <div class="paper"></div>
        <div class="v" style="left:${colEdge}px"></div>
        ${dna('mark', 'black', 34, `left:64px;top:64px`)}
        <span class="lab r chk" style="right:64px;top:74px">Now on Forbes.com</span>
        <div class="r1" style="top:118px"></div><div class="r2" style="top:125px"></div>
        <span class="lab chk" style="left:64px;top:158px">As featured in</span>
        ${forbes('black', logoH, `left:64px;top:190px`)}
        <h1 class="serif hl chk" data-name="headline"><span>${HEADLINE[0]}</span><span><mark>${HEADLINE[1]}</mark></span><span>${HEADLINE[2]}</span><span>${HEADLINE[3]}</span></h1>
        <div class="wclip">${w.html}</div>
        ${GRAIN}
        <div class="bar" style="top:${hlTop + hs * 4 + 84}px"></div>
        <span class="syne8 name chk" data-name="${NAME}" style="top:${hlTop + hs * 4 + 114}px">Wayne Allyn<br>Root</span>
        <span class="lab chk" style="left:64px;top:${hlTop + hs * 4 + 114 + 88}px">Read it on Forbes.com</span>
        <div class="r2" style="top:${ruleBottom}px;background:#111"></div>
        <span class="lab chk" style="left:64px;bottom:64px">${CREDIT_1}</span>
        <span class="lab m r chk" style="right:64px;bottom:64px">${CREDIT_2}</span>`,
    });
  }

  for (const d of designs) if (d.postCss) d.css += d.postCss;
  return designs;

  function A_bbox_right() { return require('./build.cjs').A.alpha_bbox[2]; }
  function anchorOffset(scale) {
    const A = require('./build.cjs').A;
    return ((A.tie_knot[0] + (A.shoulder_left_x + A.shoulder_right_x) / 2) / 2) * scale;
  }
};
