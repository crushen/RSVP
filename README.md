# RSVP
### A Treehouse App
This RSVP app was started with the JavaScript Basics course on Treehouse, but I will be adding more functionality to it as I continue to learn JavaScript. (I didn't write any of the HTML or CSS myself, just the JavaScript as this was the focus for this course).

#### So far, I have added these things to the app:

* Changed the checkbox to say 'Confirm' when unchecked, and 'Confirmed' once checked (previously it was always 'Confirmed'). I did this by targeting the text node of the label with checkbox.parentNode.childNodes[0], and storing in a let named label. Then I changed the nodeValue of label to 'Confirmed' when checked = true, and 'Confirm' when checked = false.
* Form validation - First I added an error message to the HTML, and used CSS to set it's display property to 'none'. Then I used a conditional statment in the Submit event. If the input field is empty, the error message's display proerpty will change to 'block'. Otherwise it will display 'none' again, and the rest of the event will run. 

#### These are things that will be added in the future:

* ~~Validation - showing an alert when the user tries to submit an empty input.~~
* Shows an alert and rejects duplicate names.
* ~~Change the checkbox to say 'confirm' when unchecked, and 'confirmed' once checked.~~
* Add a 'notes' section to the list items.
* Remove 'confirmed' checkbox when unresponded people are filtered out as this is redundant information.
* Save the state of the app to the local storage so that refreshing doesn't change anything - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage.