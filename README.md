1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById: Fast, uses a specific ID, and returns a single element.
getElementsByClassName: Finds elements by class name and returns a live HTMLCollection.
querySelector: Uses CSS selectors and returns only the first matching element.
querySelectorAll: Finds all matching elements and returns a NodeList, which supports direct loops.
2. How do you create and insert a new element into the DOM?
Use document.createElement() to create the tag, add content with .innerText, and insert it into the page using .appendChild().
3. What is Event Bubbling? And how does it work?
Events bubble up from the target element to its ancestors. It works by triggering the event on the specific target first,
then automatically firing it on every parent element above it.
4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where a parent element handles events for its children through bubbling.
It is highly efficient for managing dynamic content.
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser's default action,
while stopPropagation() stops the event from bubbling up to parent elements in the DOM.
