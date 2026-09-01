# Publication wordmarks

Empty on purpose. Publication logos are licensed trademarks and are not
reproduced or approximated here.

To use real wordmarks, drop a file named after the publication's slug into this
directory:

    forbes.svg          business-insider.svg     usa-today.svg
    rolling-stone.svg   entrepreneur.svg         ...

Slugs are the `slug` field in `lib/content/publications.ts`. SVG is preferred;
`.png` and `.webp` also resolve. `lib/assets.ts` picks the file up at build time
and `PublicationMark` switches from the typographic lockup to the image with no
code change.

Guidance for the assets themselves:
- Single colour, transparent background, trimmed to the mark's bounding box.
- Roughly 160×40 at 4:1 or wider; the component renders them at 24–28px tall.
- Use each publication's official press-kit asset, and check that its usage
  terms permit showing it as a credit.
