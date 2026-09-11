#HTML

##Font-size
This means 0.5rem is the least it can go and 4vw meaning viewport width is the rate at which it grows relative to the viewport or screen it's on and 2 rem is the maximum
  
  we could also use calc(1rem + 1vw ) since vw increases with screen size it allows zooming in and rem just sets baseline size

  ##vh vs dvh

  "viewport height" ignores browsers address bar and scales site to entire page cutting of the top or bottom

  "dynamic viewport height" solves this by stretching and adjusting when the bar is there or not and it's set as min-height so it remains the smallest height the site can shrink too and doesn't leak elements out.

  The min-height part acts as your safety net. It says, "Be at least as tall as the screen, but if the content inside is extra long, keep growing so nothing overlaps or breaks."