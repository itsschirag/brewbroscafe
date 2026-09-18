# Image slots

Every photo on the site now loads from `assets/img/`. Drop a file in with the
exact name below and it appears — no HTML editing needed.

All slots use `object-fit: cover`, so the aspect ratio of your source photo
doesn't have to match. It will be cropped from the centre to fill the box.

## assets/img/hero/ — hero collage (6)

| File | Box on screen | Currently captioned |
|---|---|---|
| `hero-1.jpg` | tall tile | latte art |
| `hero-2.jpg` | wide tile | friends at a table |
| `hero-3.jpg` | tile | interior, warm light |
| `hero-4.jpg` | tile | pastry |
| `hero-5.jpg` | tile | pouring coffee |
| `hero-6.jpg` | tile | interior detail |

Shoot these landscape-ish. `hero-1` is the only image on the page that loads
eagerly, so make it the smallest file you can live with.

## assets/img/menu/ — menu thumbnails (22)

Displayed as **78px circles**. Centre the dish in frame; the edges get cropped away.
Square crops work best.

`cappuccino.jpg` · `cold-brew.jpg` · `filter-coffee.jpg` · `flat-white.jpg`
`croissant.jpg` · `nachos.jpg` · `fries.jpg` · `garlic-bread.jpg`
`burger.jpg` · `sandwich.jpg` · `panini.jpg` · `slider.jpg`
`pizza.jpg` · `pasta.jpg` · `spicy-pizza.jpg` · `fusilli.jpg`
`cheesecake.jpg` · `brownie.jpg` · `tiramisu.jpg`
`milkshake.jpg` · `iced-tea.jpg` · `cocoa.jpg`

## assets/img/signature/ — signature cards (4)

Large **portrait** cards, 420×520px. The bottom 45% is covered by a dark
gradient with text over it, so keep the subject in the upper half.

`classic-burger.jpg` · `coffee-fix.jpg` · `sweet-end.jpg` · `wood-fired-pizza.jpg`

## assets/img/space/ — interior shots (2)

| File | Notes |
|---|---|
| `corner-seating.jpg` | larger, front tile — landscape |
| `laptop-coffee.jpg` | smaller, overlaps bottom-right, has a cream border |

## assets/img/gallery/ — footer gallery strip (8)

`gallery-1.jpg` … `gallery-8.jpg`. Small tiles, any orientation. Good place to
reuse your best Instagram shots.

## assets/img/section-bg.jpg — full-width section background

Referenced from `css/styles.css`. Wide and dark works best — a 28–78% dark
overlay sits on top of it, so a bright photo will still read as muddy. Export
this one around **2000px wide**.

---

## Before you upload

1. **Resize.** Nothing here needs to be bigger than 1600px wide except
   `section-bg.jpg`. Menu thumbs can be 300px square.
2. **Compress.** Run everything through Squoosh (squoosh.app) or:
   ```
   # requires imagemagick
   mogrify -resize 1600x -quality 82 assets/img/**/*.jpg
   ```
   Target under 200KB per image, under 60KB for menu thumbs.
3. **Update the alt text** in `index.html` to describe your actual photo —
   right now it still describes the stock one.

## Optional: WebP

If you want smaller files, convert to `.webp`, then find-and-replace `.jpg`
with `.webp` in `index.html` and `css/styles.css`. Every browser in use today
supports it.
