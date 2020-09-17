# A example React project that calls a local web API

This is a starter project to illustrate React components consuming a web API.


## Steps

To experience this repo in all of its glory:

* Clone this repo

```sh
cd react-to-web-api
npm install
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```

* Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise

### Getting Started

This exercise reverses the roles from yesterday. Today the API has been (partially) built for you. Your job will be to build the React front end to consume the API. To do this you will need to call the API from a React component using the node module `superagent`, and save the resulting data into state.

### Steps

0. Take a look around your project to make sure you're familiar with the layout. Take particular note of what is in your client folder, and the setup of your server routes in the back end.

1. Convert the App component to a stateful component. Make sure it still renders on localhost.

2. Add a componentDidMount method to the component. Add the following `console.log` to the componentDidMount:

``` js
console.log('did mount')
``` 

And this one to the render method:

``` js
console.log('render')
``` 

When you reload the page with the dev tools console open, take notice of the order that the logs occur in. What does this tell you about your code?

3. Add a widgets property to the state. Make the initial value an empty array.

4. Import the `api.js` file into the App file so we can use our api functions.  

5. In your componentDidMount method, call the `getWidgets` function from your `api.js` file.  
   - Remember superagent uses a promise-based interface, so you will need a `then()` block after this.

6. Use the `this.setState` function inside the then block to update state with the widget data from the API.

7. Use the React Dev Tools to check that state updates as you expect.

8. Modify the render method of your component to display the widgets. Perhaps you could use a `.map` here to render a new `<Widget />` component for each widget.

### Next Steps

These next steps will require you to make changes to both the front and back end.

- Add the ability to add a widget. This will also require adding a form component (a great opportunity to try a conditional render!)

- Extend the details that are stored about widgets - add a `rating` field so we know how good those widgets really are. This will need to be added into what is displayed, and also onto the fields of the add form.

- Add the ability to delete a widget

- Add the ability to update a widget

- Refactor your code into separate components (if it isn't already)

- Write tests for your components. Some tests have already been written for you. Either try to make your code pass these, or rewrite them to match your own layout.

