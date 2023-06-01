# Codewars-Integration

Let's play with grabbing some data from an API and displaying it on a website. We will be using the the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make requests to the [Codewars API](https://dev.codewars.com/#get-user) and the [Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components) to display the data we get back. Let's go!

## Learning Objectives

- Explain how components are used in web development
- Adapt an existing web component to show your own data
- Extend this web component to present more data from the Codewars API
- Create a new web component that presents data from the Codewars API

## Requirements, Steps, and Acceptance Criteria

1. Open the `index.html` file in your browser and you should see a basic badge with the CodeYourFuture Codewars rank. The badge is a web component that is defined in the `codewars-badge.js` file.

2. Find the js module in the `index.html` file that links `codewars-badge.js`. This module defines a new HTML element called `<codewars-badge>`, which you can now use _just like any other HTML element_. (This is basically how all HTML elements are defined, it's just that the browser defines the default ones for us.)

3. Open the `codewars-badge.js` file. The badge is defined as a class that extends the `HTMLElement` class. The `connectedCallback` method is called when the element is added to the DOM. In this case it runs when the page loads. This callback is where we (a) make the request to the Codewars API and then (b) render the data we get back.

4. Change the `username` variable in the `codewars-badge.js` file to your own Codewars username. Save the file and refresh the page to see your own badge.

5. [Look at this API directly](https://www.codewars.com/api/v1/users/CodeYourFuture) in your browser. It's just a URL - you can look at it. (Install a [JSON viewer extension](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) for your browser if you don't have one already. This will make it easier to read the data.)

6. Now try adding some more data to the badge component. There's lots of other possible data we could display in the badge. Read the [Codewars API docs](https://dev.codewars.com/#get-user) to help you.

7. Now try creating a _new_ web component that displays some data from a Codewars API. There are several documented Codewars APIs you can play with. Use the `codewars-badge.js` file as a template for how to define a web component. You can use the `index.html` file to test your new component.

#### Remember: keep it simple!

You don't need to make a full web app. Just make a web component that displays some data from the Codewars API. Explore and get creative. If your component gets complicated, _break it down_ into smaller components and compose them on the page, just as you would do with any other HTML elements.

## Acceptance Criteria

- [ x ] I have adapted an existing web component to show my own data
- [ x ] I have extended this web component to present more data from the Codewars API
- [ x ] I have created a new web component that presents data from the Codewars API in my own way
- [ x ] I have tested my page with Lighthouse and my Accessibility score is 100
- [ x ] I have opened a pull request with my changes to this repo
- [ x ] I have explained how components are used in web development, in my own words, in my pull request message

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
