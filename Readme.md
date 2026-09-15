# HTML and CSS (Mostly CSS)

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