# My-Portfolio

# Hi there, I'm Arthur Ndeley Efome Matike 

I built my own portfolio with just html, css and javascript, hoping to incorporate next js soon after learning

## About Me
I'm a Computer Engineering student and backend-focused developer building real, working systems — from job-matching platforms to internal business tools. I also build my own frontend from scratch when a project calls for it, no frameworks, just HTML, CSS, and vanilla JS.

- Backend-focused, full-stack capable
- Comfortable across Spring Boot, PostgreSQL, and vanilla JS/CSS/HTML
- Based in Buea, Cameroon

---

## About This Project
This is my personal portfolio site — built entirely from scratch with vanilla HTML, CSS, and JavaScript, no frameworks or libraries. It uses a single-page architecture with `<template>` tags for each section (Home, About, Projects, Skills, CV, Contact), swapped in and out dynamically via JS, with state persisted across refreshes using `localStorage`.

### Features
- Custom single-page routing system (no router library — plain JS + `<template>` cloning)
- Page transitions with CSS animations, synced to JS timing
- Dynamic project and skill cards generated from JS data, not hardcoded HTML
- Skill progress bars with dynamic fill color based on proficiency
- Working contact form via EmailJS (Gmail-backed)
- Session persistence — reloading the page keeps you on the section you were viewing
- Fully responsive layout

---

## Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Email:** EmailJS (Gmail API)
- **Fonts:** Google Fonts (Poppins)
- **Version Control:** Git, GitHub

---

## Project Structure
```text
├── html/
│   ├── 1-welcome-page.html
│   ├── 2-main-page.html
│   ├── 3-CV-page.html
│   └── Resume-page.html
├── css/
│   ├── 2-mainpage.css
│   ├── 2.0-sidebar.css
│   ├── 2.1-main-section-home.css
│   ├── 2.2-main-section-about.css
│   ├── 2.3-main-section-projects.css
│   ├── 2.5-main-section-CV.css
│   ├── 2.6-animations.css
│   ├── 2.7-main-section-contact.css
│   └── CVpage-css/
│       └── 3-CV-page.css
├── js/
│   ├── 2-main-page.js
│   ├── 3-sidebar.js
│   ├── 4-diamonds.js
│   ├── 5-projects-creation.js
│   ├── 6-skills-display.js
│   ├── 7-CV-resume.js
│   └── 8-contact-page.js
└── images-and-icons/
    └── icons/        # Skill & tech stack SVG icons
```

---

## Local Setup
1. Clone the repository:
```bash
   git clone https://github.com/karma7070/My-Portfolio.git
```
2. Navigate into the project folder:
```bash
   cd My-Portfolio
```
3. Open `html/2-main-page.html` in your browser, or use VS Code's Live Server extension for auto-reload during development.

---

## Contact
- **Email:** [arthurmatike@gmail.com](mailto:arthurmatike@gmail.com)
- **GitHub:** [github.com/karma7070](https://github.com/karma7070)

---

## License
This project is open-source and available under the MIT License.



--------

