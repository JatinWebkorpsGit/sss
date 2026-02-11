# SS Sports – Indore

A static website for **SS Sports**, a sports shop in Indore.

## How to view

- **Option 1:** Open `index.html` in your browser (double-click or drag into Chrome/Firefox/Safari).
- **Option 2:** From this folder in the terminal, run:
  - `python3 -m http.server 8000` then visit http://localhost:8000
  - or `npx serve` if you have Node.js

## What to customize

1. **Phone / WhatsApp** – Already set to 78691 88088. Search for `7869188088` or `wa.me/91` if you change it.
2. **Address** – In the “Visit Us” section, add full address and pin if you like.
3. **Opening hours** – In the “Opening Hours” section, replace the placeholder times with your real timings and remove the “(Update with your actual timings)” line.
4. **Announcement bar** – Edit the message at the top of `index.html` (e.g. sale, new arrivals). Users can close it with the × button.
5. **Brands** – Add or remove brand names in the “Brands We Stock” section.
6. **Testimonials** – Replace the sample quotes with real customer reviews and names.
7. **Gallery** – Replace the placeholder boxes with real images: use `<img src="your-image.jpg" alt="...">` inside each `.gallery-item` and remove the `<span>`.
8. **FAQ** – Edit questions/answers to match your shop’s policies.

## Files

- `index.html` – Page structure and content  
- `styles.css` – Layout and look  
- `script.js` – Mobile menu, back-to-top, scroll reveal  
- `favicon.svg` – Browser tab icon  

No build step or server required; it’s plain HTML, CSS, and JS.
