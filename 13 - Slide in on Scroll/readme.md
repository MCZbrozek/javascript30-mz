### Slide in on scroll - 



 - First we want to add and event listener to the window. 
 - We want to capture the `scroll`. However, the scroll logs a ton of information 
    and can really bog the project down. 
    To avoid problems with this we added a function called `debounce`.
    
 - `function debounce(func, wait = 20, immediate = true) {
   var timeout;
   return function() {
   var context = this, args = arguments;
   var later = function() {
   timeout = null;
   if (!immediate) func.apply(context, args);
   };
   var callNow = immediate && !timeout;
   clearTimeout(timeout);
   timeout = setTimeout(later, wait);
   if (callNow) func.apply(context, args);
   };
   }`


- The next thing is to loop over every image and figure out where the image
  needs to then be shown. 
  - To do this we need to figure out where we are on the page. 
    - We find that out by using `window.scroll + window.innerheight`
    - Subtract that value from `slideImage.height / 2` which gives us the midpoint
     of the image.
    - Then we need to find the bottom of the image so we can repeat the animation if we
      scroll up. `const imageBottom = sliderImage.offsetTop + sliderImage.height`
    - We then need to check if the image is on the screen during our scroll
      `if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
      }else {
      sliderImage.classList.remove('active')
      }`
    - When we reach that 50% mark in the image, or when we scrol past the image bottom
        then we change the class of `sliderImage` to `active`
    
And that's all there is to it. 