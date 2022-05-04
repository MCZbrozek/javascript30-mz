


## Sticky navbar exercise 

**Pastes navbar to fixed position on the screen when user scrolls**

The template that Wes Bos provided included Css for a simple blog post, with a hero element at the top and a nav bar.

**Our first step** was to grab the navbar element from the dom using `document.querySelectorAll('#main')`

**Then we** grabbed the top of the navbar and stored it in a variable called `topOfNav`

**Then by using the function** `fixNav` and calling it with the `window.addEventListener('scroll', fixNav)`
we could render the conditional statements in the function to add a new class `.fixed-nav` to the `document.body`
when `scrollY >= topOfNav`. 

**In order to make the functionality a bit smoother** we added padding to the top of the blog post element equal to
`nav.offsetHeight + 'px'` which would render whatever padding width the navbar takes up and kept the page from looking
jumpy when the navbar was in the fixed position. 

**In our CSS page** we added the following code block to change the transition of elements when the `.fixed-nav` was 
added to the page. 
        
        /*Gives the nav bar a fixed position*/

        .fixed-nav nav {
        position: fixed;
        box-shadow: 0 5px rgba(0,0,0,0.1);
        }


        /*when our scroll triggers .fix-nav give li.logo a max width of 500px*/

        .fixed-nav li.logo {
        max-width: 500px;
        }

        /*when our scroll triggers .fix-nav, enlarge the .site-wrap*/

        .fixed-nav .site-wrap {
        transform: scale(1);
        }

Pretty simple all in all, I hope to use this on some other projects. 