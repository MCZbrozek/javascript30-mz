## CSS Text Shadow on MouseMove Event. 

Woah! is displayed on the screen and already has some styling. Most important is the text shadow. 

Our mission is to listen for the `mousemove` event and apply a function called we called `shadow`. 

In the `shadow` function we are grabbing the `offsetWidth` and the `offsetHeight` and we will use these to manipulate the text shadow relative to the mouse position on the page.

If we track our mouse over the element, in this case the `.hero` element it shows ups the pixels in the element itself. We need to convert those x and y to something we can use
by adding the couple pixels within the element to the pixel distance from the left and from the top.
`const xWalk = Math.round((x / width * walk) - (walk / 2))
const yWalk = Math.round((y / width * walk) - (walk / 2))`

Finally, we change the css in the DOM by running `text.style.textShadow`
using a string literals we replace the parameters from the css with our `${xWalk}` and `${yWalk}`. If we change the color properties and invert the x and y, we can do some funky stuff! 
