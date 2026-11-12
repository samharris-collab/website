/* The five designs. Every position is derived from the canvas grid, the measured font ink
   metrics (ink) and the measured photo anchors (wayne()), never eyeballed per file.        */
const { wayne, forbes, dna, GRAIN } = require('./build.cjs');

const NAME = 'Wayne Allyn Root';
const CREDIT_1 = 'PR by DNA Teams';
const CREDIT_2 = 'digitalnetworkingagency.com';
const NOW = 'Now published on Forbes.com';

module.exports = (ink) => {
  const F = ink.FEATURED;
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
      geo: w.geo, centre: { x0: archX0, x1: archX1 },
      css: `
        #c{background:var(--cream)}
        .rule{height:1px;background:rgba(18,18,18,.22)}
        .arch{left:${archX0}px;top:${archTop}px;width:${archW}px;height:${1350 - archTop}px;background:var(--arch-red);border-radius:${archW / 2}px ${archW / 2}px 0 0}
        .arch i{inset:14px 14px -2px 14px;border:1.5px solid rgba(238,234,224,.5);border-bottom:0;border-radius:${archW / 2 - 14}px ${archW / 2 - 14}px 0 0}
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
        <span class="poster word chk" data-name="FEATURED">Featured</span>
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

  return designs;
};
