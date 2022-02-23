##Sort Without articles exercise 

To start we need to sort out our band names. 
We do this by created a `const` to hold our array of sorted names, and use the `.sort` prototype. Remember that this prototype takes two things `(a,b)` and tries to tell us which one is larger. Since these are string values in `[bands]` it will do this with the alphabet. 

We then created a function called strip,
we passed in the band name, and return `band.replace` with a regex expression. 
I still don't understand these very well at this point but lets see what it does.
`(/^(a |the |an )/i, '')` so this looks for all 'a_', 'the_' and 'an_' (the space is important.) and removes them from thier names.

We then swap `a, b` in our const `sortedBands` with `(strip(a) and strip(b))`

Then pass that constant into the DOM to create the list in html. 

`document.querySelector('#bands).innerHTML =` which takes all of the bands in the array. Then replaces the bands in the list order with `.map(band => ``<li>${band}</li>`)`
.join('')` This function will map across the DOM array bands and replace band with the correctly alphabetized bandname and then join these string items into an array with `.join('')` at the end. 