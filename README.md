# Codewars-Integration

Let's play with grabbing some data from an API and displaying it on a website. We will be using the the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests to the [Codewars API](https://dev.codewars.com/#get-user) and the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to display the data we get back. Let's go!

## Learning Objectives

- Explain how components are used in web development
- Adapt an existing web component to show your own data
- Extend this web component to present more data from the Codewars API
- Create a new web component that presents data from the Codewars API

## Requirements, Steps, and Acceptance Criteria

1. Open the `index.html` file in your browser and you should see a basic badge with the CodeYourFuture Codewars rank. The badge is a web component that is defined in the `codewars-badge.js` file.

The badge is imported as a js module in the `index.html` file. This module defines a new HTML element called `<codewars-badge>`, which can be used just like any other HTML element. (This is basically how all HTML elements are defined, it's just that the browser defines the default ones for us.)

2. Open the `codewars-badge.js` file. The badge is defined as a class that extends the `HTMLElement` class. This is how web components are defined. The `connectedCallback` method is called when the element is added to the DOM. This is where we (a) make the request to the Codewars API and then (b) render the data we get back.

3. Change the `username` variable in the `codewars-badge.js` file to your own Codewars username. Save the file and refresh the page to see your own badge.

4. Look at this API directly in your browser: https://www.codewars.com/api/v1/users/CodeYourFuture. (Install a [JSON viewer extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) for your browser if you don't have one already. This will make it easier to read the data.)

5. There's lots of other possible data we could display in the badge. Now try adding some more data to the badge. You can find the documentation for the Codewars API here: https://dev.codewars.com/#get-user

6. Now try creating a new web component that displays some data from a Codewars API. There are several documented APIs you can try out. Use the `codewars-badge.js` file as a template for how to define a web component. You can use the `index.html` file to test your new component.

#### Remember: keep it simple!

You don't need to make a full web app. Just make a web component that displays some data from the Codewars API. If your component gets complicated, _break it down_ into smaller components and compose them on the page, just as you would do with any other HTML element.

## Acceptance Criteria

- [ ] I have explained how components are used in web development in my own words
- [ ] I have adapted an existing web component to show my own data
- [ ] I have extended this web component to present more data from the Codewars API
- [ ] I have created a new web component that presents data from the Codewars API in my own way
- [ ] I have run Lighthouse on my components and my Accessibility score is 100

## Resources

<details>
<summary>Fetch API</summary>
Fetch API is a way for computer programs (like websites) to talk to each other and share information.

Think of Fetch as your new puppy. Send fetch to an API and tell it to fetch you some data. Fetch! Then _await_ your response. Fetch will dash back to you, panting, with the data you requested, or an error if something went wrong. This is your response. Stuff that response into a variable and do whatever you want with it.

=> https://developer.mozilla.org/en-US/docs/Web/API/fetch

This is how your Codewars progress is tracked automatically by CYF. We use the Fetch API to make requests to the Codewars API and then we record your points in the trainee tracker. You could make your own tracker if you wanted to!

</details>
<details>
<summary>Web Component</summary>

### What is a web component?

If you want HTML to do something that it doesn't do by default, you can write your own custom HTML element. This is called a [web component](https://www.webcomponents.org/introduction).

### ...What is a component?

A component is a reusable, self-contained piece of code. Components are like lego blocks you can build websites with. Most websites are made by "composing" components in this way.

### Are all websites built with web components?

Nope! React components are written with React, Twig components are written with Twig, etc. Components are not a specific technology, they are a concept. Everywhere in programming we look to break down our code into small, reusable pieces. Web components are a way to do this with HTML.

</details>
