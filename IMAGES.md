# Image slots

Site photos live in `assets/img/`. They are resized copies (max 1280px) of the
originals in `images/`. Nothing on the page is cropped: every photo is shown at
its own aspect ratio.

| File | Used in |
|---|---|
| `storefront-night.jpg`, `latte-top.jpg` | Hero |
| `laptop-latte.jpg`, `community.jpg`, `reading-table.jpg` | The Brew-Bros Experience row |
| `barista-stir.jpg`, `barista-grinder.jpg`, `pink-cup.jpg` | Behind The Bar row |
| `pride-flag.jpg`, `buddha-corner.jpg` | The Vibe |
| `dog2.jpg`, `dog3.jpg` | Pet-Friendly |
| `dog1.jpg`, `cafe-dog-sign.jpg`, `coffee-smile.jpg` | Follow along gallery |

## Swapping a photo

1. Save the new file over the old name in `assets/img/`.
2. In `index.html`, update that `<figure>`'s `--r` value (width ÷ height) and
   the `<img>` `width`/`height` attributes to match the new photo. Rows size
   themselves from `--r`, so a wrong value distorts the layout, not the photo.
3. Update the `alt` text.
