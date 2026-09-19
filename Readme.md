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
- **LinkedIn:** *add your link here*

---

## License
This project is open-source and available under the MIT License.



--------



# HTML and CSS and JS 

## Font-size
This means 0.5rem is the least it can go and 4vw meaning viewport width is the rate at which it grows relative to the viewport or screen it's on and 2 rem is the maximum
  
  we could also use calc(1rem + 1vw ) since vw increases with screen size it allows zooming in and rem just sets baseline size

  ## vh vs dvh

  "viewport height" ignores browsers address bar and scales site to entire page cutting of the top or bottom

  "dynamic viewport height" solves this by stretching and adjusting when the bar is there or not and it's set as min-height so it remains the smallest height the site can shrink too and doesn't leak elements out.

  The min-height part acts as your safety net. It says, "Be at least as tall as the screen, but if the content inside is extra long, keep growing so nothing overlaps or breaks."

  ## tooltips

  To make it so the tooltip can't be hovered over and triggered use "pointer-events: none; " css


  ## Icon

  So i was stuck on the icon for a while trying to make it adjust to changing width of the button, then i came across an epiphany, why not just make the initial icon go away and place a new one on the tool tip? (Which i realized was my initial idea for the buttons which had managed to escape my mind somehow).

  This was not the fix, I decided to place the img in a container and force it to do my bidding, img has been low-diffed.

  Still not the right fix 🤦‍♂️. I decided to use "height: x dvh" where x = 1, 2, 3,..., n. Limiting it to a specific height per the size of the screen.

  ### Effects for button transitions

  "ease-in" starts slow and shoots forward at the end. "ease-out" starts smooth and gently slows down at the end

  Incase you run into the problem where an image doesn't fit into its container again use "vertical align: bottom/middle;" to fix it.

  ## Box Shadow

  box-shadow: [horizontal-offset] [vertical-offset] [blur-radius] [spread-radius] [color] [inset];

  Using this example: box-shadow: 10px 15px 8px 2px rgba(0, 0, 0, 0.3);
  
  10px (Horizontal Offset): Moves the shadow left or right. Positive numbers move it to the right; negative numbers move it to the left.
  
  15px (Vertical Offset): Moves the shadow up or down. Positive numbers move it down; negative numbers move it up.
  
  8px (Blur Radius): Determines how fuzzy or sharp the shadow is. 0px means a solid, sharp block. The higher the number, the softer and more transparent the shadow edges become.
  
  2px (Spread Radius): Controls the size of the shadow before it starts blurring. Positive values make the shadow grow larger in all directions; negative values shrink it. (This value is optional and defaults to 0).
  
  rgba(0, 0, 0, 0.3) (Color): Sets the color of your shadow. Standard hex codes work, but rgba() or hsla() is recommended because they allow you to set the alpha transparency (e.g., 0.3 means 30% opacity) so the background bleeds through naturally


  Feature

## Difference btwn splice and slice used in switching pages


### slice() (Take a Piece)

Does it change the original array?

❌ No. The original array stays exactly the same.

What does it return?

A brand new array containing the copied elements.

Main Use Case

Extracting a subset of data without ruining the source.


### splice() (Cut or Insert)

Does it change the original array?

Yes. It permanently alters the original array.

What does it return?

An array containing the elements that were cut out.

Main Use Case

Deleting items, replacing items, or inserting new items.


## Switching pages

After trying long and hard to do it on my own with some good explanations from Gemini, I used my knowledge of JavaScript to build switching pages by first storing all required ids in an array (buttons and sections); the sections are really 'template' tags which are known for not appearing on web pages, perfect for what I wanted to do as recommended by gemini. 

Then I added an event listener to listen for the clicking of buttons while passsing their ids by parameter ( switchPage('id')) then it listens for the id being clicked because that's how event listeners work.

Then I used a pretty unconventional but technical method to retrieve the id of the required template or section using the returnIndex(array, buttonId) function.

After that, the elements in the main tag are emptied and replaced with the elements in the new template each time a button is clicked.

I ran it into a 2 time clicking problem and had to add a loop that initializes the listener as soon as the page is refreshed.

## Sliding diamonds

So for the sliding diamonds, I had some trouble because I placed it in a container then made it move 50% up from it's initial position in a container that didn't scale to it's element but the entire screen so it glitched as expected. I then created a container to hold it after inquiring about it from Claude the goat LLM and it worked.

## Saving States

So I save the page states using localStorage.setItem(itemname, JSON.stringify(item)) and then retrieve them from local storage using localStorage.getIem(itemname) but I usually have to wrap it JSON.parse() so it's converted back into non-string.

So I save the current page in a localStorage called "currentPage", then on page refresh or open this saved page is loaded into main section's innerHTML so the last page it was on stays even after refresh

For the buttons I used leavingPageId which stores the id of the page that is currently being displayed so if the button is clicked again another slide in of the same page doesn't happen. Now this is used to reference the button linked the page and then the button's state is set to active on refresh by getting its id and running into the setActive(actButton, id) function on startup

I literally just woke up and thought of these things btw, God is good, I just pray and He fills me with knowledge.

## Page Modifications In Real time

So I noticed that when the HTML elements are modified the pages weren't being modified because most of the update functions were in the page switching function not global. So I made them update by setting the innerHTML of main section from the localStorage currentPage each time since the saving of current page is global doing this makes the changes applied to current page save and then display in real time.

I did a similar thing for projects and updating them. Simply displayed the list of projects in localStorage on refresh.

## Refresh killing JS input

I had a nasty problem that where an error kept popping up when I tagged elements in a templlate. While they're in a template they do not work like normal elements, they're 'invisible' so the innerHTML couldn't get to them and display what was on them since their ids are required and could not be found so I asked Claude PC and it didn't help, but Claude Mobile is genuinely built different and it helped me point the problem with just to console log screenshots and the fix was simply calling the function that displayed only when the section is currently active i.e when 'leavingPage' which is actually the current page is the template who's elements ids are required.

So only when the section is active before the display functions are called, in summary.

## height:auto; overflow y: auto;

If you have container trouble height auto is the way to go

Overflow makes the page content to fit and become a scroll bar type container so it's good too


Note: Increase main-page's bottom padding, the section tags not the main tags
