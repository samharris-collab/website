# Wayne Allyn Root x Forbes: delivery notes

## The five designs

1. **Editorial Arch** (`Wayne_Forbes_1_Arch.png`): the approved direction. Cream ground, red arch, black-and-white Wayne with the tie left in colour, "FEATURED" aligned to the arch edges, Forbes on a black panel.
   Alt text: Wayne Allyn Root in a black suit giving a thumbs-up inside a red arch, under the word "Featured", with the Forbes logo below.
2. **Neon DNA** (`Wayne_Forbes_2_Neon.png`): our brand colours. Full-width "FEATURED" behind his head on near-black, Forbes in black on a neon panel.
   Alt text: Wayne Allyn Root in black and white giving a thumbs-up in front of the word "Featured", above a neon green panel with the Forbes logo.
3. **Patriot** (`Wayne_Forbes_3_Patriot.png`): navy, a faint star field and a red band, Wayne in colour, the article headline set under the Forbes logo.
   Alt text: Wayne Allyn Root giving a thumbs-up on a navy background beside the Forbes logo and the headline "Why Leadership Reinvention Doesn't Have an Expiration Date".
4. **Black and Gold** (`Wayne_Forbes_4_BlackGold.png`): centred and symmetrical, thin gold frame, Forbes in flat gold, Wayne in colour over a warm glow.
   Alt text: Wayne Allyn Root giving a thumbs-up on a black background inside a gold frame, under "As featured in Forbes".
5. **Headline** (`Wayne_Forbes_5_Headline.png`): the article is the hero. Newsprint grid, the headline in serif with "Reinvention" highlighted in neon, Wayne overlapping the column.
   Alt text: The headline "Why Leadership Reinvention Doesn't Have an Expiration Date" beside Wayne Allyn Root giving a thumbs-up, with the Forbes logo above.

## Files

- Five designs at 2160x2700 PNG, plus `*_1080.jpg` (1080x1350, quality 92) for direct upload.
- Recomposed formats for designs 1 and 4: `*_Story_1080x1920.png` (key content kept out of the top 270px and bottom 380px) and `*_Landscape_1200x628.png` (rendered at 2x, 2400x1256).
- `Wayne_Forbes_contact_sheet.png`: all five side by side.
- `../assets/`: `wayne_colour.png`, `wayne_bw_tie.png`, `wayne_bw.png`, `anchors.json`, and the Forbes and DNA logo variants.
- Rebuild everything with `python3 designs/02_refine.py`, `python3 designs/04_logos.py`, `node designs/build.cjs`, `python3 designs/05_contact_sheet.py` (run from this folder's parent).

## Top pick

Design 1 for the main post, with Design 5 as the follow-up. An independent review ranked 5 first and 1 second; 1 is the direction already approved, and 5 is the only one that says what the article is about.

## What an independent review said, and what was done about it

A separate reviewer saw only the images and the rules. Fixed afterwards: blown-out highlights in the black-and-white grade, the olive corner glow on Design 2 (removed), a shadow box artefact around the figure on Designs 4 and 5, the italic "in" crowding the Forbes logo, small footer type (15px raised to 17px), the head sitting too far left of centre, and the two-line name on Design 5.

Left as specified, but flagged by the reviewer and worth a decision:

- **Design 3 reads as a campaign poster** to a fresh eye (navy, stars, red band, name in caps). It is built as briefed. If that is a concern, this is the one to cut.
- **Design 1's arch** can read as a red disc on cream at thumbnail size, close to the idea rejected earlier.
- **"2026" on Design 1** can read as an issue date.
- **Design 4's gold frame** sits 30px from the edge, inside the 64px margin, as briefed.
- **The set shares one photo and pose**, so 1 and 2 read as siblings, and 3 and 5 share a skeleton.

## Not done

- **AI upscale and second-opinion cutout (Higgsfield):** not run. It spends credits and sends the client photo to an outside service, so it needs a go-ahead. The source photo is 1500x2000 and is the main limit on face and hair sharpness.
- **Canva upload:** not done; the brief holds it until the finals are approved.
- **Skills:** `canvas-design`, `theme-factory`, `design-critique`, `accessibility-review` and `brand-review` were not invoked; the independent reviewer and the automated checks were used instead.
- **Headline wording:** set exactly as supplied; it was not checked against the live article.
- **The gold-room photo** was not used and is not in the repo.

## Cutout notes

- The first segmentation model dropped the thumbs-up hand; the final mask is from `birefnet-general`.
- The cutout is cropped just above his left hand, so the papers never appear.
- The small red mark and the dark band at his right cuff are in the original photo and were left alone.
