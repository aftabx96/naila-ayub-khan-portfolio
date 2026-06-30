# Naila Ayub Khan — Portfolio Website

A personal **portfolio website** for Naila Ayub Khan, built as a static site
with HTML, CSS, and JavaScript on top of the Bootstrap framework. It includes
an about section, a filterable portfolio gallery, testimonials, and a contact
form.

## Tech stack

- HTML5 & CSS3
- [Bootstrap 5](https://getbootstrap.com/)
- Vanilla JavaScript
- Vendor libraries: Bootstrap Icons, Boxicons, GLightbox, Isotope, Swiper,
  Remix Icon, PureCounter, Waypoints

## Project structure

```
.
├── index.html               # Main page
├── portfolio-details.html    # Portfolio detail page
├── script.js
├── forms/                    # PHP contact-form handler
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── img/                  # Images & portfolio shots
    └── vendor/               # Third-party libraries
```

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

> The contact form (`forms/contact.php`) requires a PHP-capable server to send
> email; the rest of the site is fully static.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to *Deploy from a branch*, choose the `main` branch and
   `/ (root)` folder, and save.
4. The site will be published at `https://<username>.github.io/<repo-name>/`.

   (Note: GitHub Pages serves static files only — the PHP contact form won't
   run there. Use a PHP host if you need the form to send email.)
