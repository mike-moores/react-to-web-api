# Consuming a local Web API from React components

To experience this project in all of its glory:

* Clone this repo and navigate to its folder in your terminal
* Install dependencies with `npm install`
* Apply the DB schema with `npm run knex migrate:latest`
* Add some test data to the DB with `npm run knex seed:run`
* Build and launch the server with `npm run dev`
* Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise steps

### 0. Explore the codebase
Take some time to understand where and how each component is being used (you will find some code you can reuse. Remember DRY!)

  - Make small changes to confirm your hypotheses
  - Reset all changes you've made since last commit with `git checkout .`

Familiarise yourself with the `getWidgets()` function called inside of `App.jsx`. Follow:
  - The `getWidgets` function imported from `api.js`, where the API route to your backend (`api/v1/widgets`) is exposed
  - The corresponding GET route on the server side in `widgets.js`
  - Its call of the `getWidgets` function from `db.js`
  - And the passing of that data all the way back to `App.jsx`

You will follow the same structure, connecting your client and server sides via API route, to complete this exercise.

### 1. Add a widget

Steps you may take to complete this task:

- Create a POST route on the server side in `widgets.js`. Test you can get a response for it in Postman.
- Create the database function to add a new widget. Remember that the incoming data should be in camelCase, but needs to be stored in your database in train_case. Call this function in your route and test it works in Postman.
- Create an `addWidget` function in `api.js` that will make a post request to the route you just built.
- Create a new `AddWidget` component containing a form. Import the `addWidget` function from `api.js` and hook it up to your form's submit handler.
- Once your widget has been added, have your widget list refresh so the new widget is visible. The `refreshList` function in `App` might come in handy.
- Create an `Add Widget` button to conditionally hide and display your add form - check out how the `WidgetDetails` component does this for inspiration.


### 2. Update a widget
Add the ability to update a widget. Follow the same steps as you did for the add, but this time using a PUT route. You will also have to consider how to pass the id of the selected widget from your client to your server side.


### 3. Next Steps

* Add the ability to delete a widget

* Extend the details that are stored in the widgets database - add a `rating` field to what is displayed in details, and in your forms.

* What functionality is missing? Add more components and API routes to perfect the app!

* Write tests for both your routes and your components. Create the test file in the same directory as the file you are testing, with `.test` before the file extension (e.g. `widgets.test.js`).There are a couple of test files already created for you, check them out to see how to get started. Tests can be run in the terminal with `npm test`.


## CORS

When using `npm start` and `npm run dev`, the client is served from the same the port as the API. In this scenario we don't run into the limitations of CORS (cross-origin resource sharing). However, if we want to expose our API to clients hosted at different domain names and/or ports, we must enable this by configuring our CORS configuration.

To experience the effects of CORS:

* Run `npm run dev:server` in one terminal to expose the API on port 3000.
* Run `npm run webpack:server` in a different terminal to serve the client on port 8080.
* Visit [http://localhost:8080](http://localhost:8080) and the site should continue to work fine.
* Have a look at how the Express middleware uses the `cors` package in `server/server.js`. Try commenting out that line and restarting `npm start`. Refresh the app and you should see errors. Read more about how to configure the [`cors` package](https://npmjs.org/package/cors) and try different configurations.

