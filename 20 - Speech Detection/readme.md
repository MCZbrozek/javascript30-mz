##Speech recognition and detection

---

Basic JavaScript required to run speech recognition in the browser. 

**Only Chrome will run the webKitSpeechRecognition**

The first step was to create an element recognition that listened for new speech on the screen and logged the `recognition.interimResults`

We then added a new html element with `let p = document.createElement('p')`
and used `words.appendChild(p)` to create a new paragraph when the function is run. 

Then we apply the `addEventListener` to the result, event `e` which listens for speech in the window and compliles a transcript from the `results` attribute. This is compiled into an array using `Array.from(e.results)` and mapping over the result at [0].
and finally using the `.join` prototype to creat a transcript of what was said. 

If the user stops speaking, `p.textContent` compiles the result as a paragraph. Finaly the app begins to listen again in order to create another paragraph. 
