# A example React project that calls a local web API

This is a starter project that illustrates React components consuming a web API.


## Steps

To experience this repo in all of its glory:

1. Clone this repo
2. `npm install` and `cd` into it
4. `npm start`
5. Navigate to [http://localhost:3000](http://localhost:3000)


## Exercise options

* Add more endpoints routes to `server/routes/widgets.js` and consume them from the client. For example, add a form to add a new widget.

* Add application state to manage what is being shown (the list, details, a form to add new widgets). Additional components should be placed in `client/components`.

* Add more components and write tests for them in `test`. The tests can be run with `npm test`.


## CORS

Using `npm start`, the client is served from the same the port as the API. In this scenario we don't run into the limitations of CORS (cross-origin resource sharing). However, if we want to expose our API to clients hosted at different domain names and/or ports, we must enable this by configuring our CORS configuration.

To experience the effects of CORS:

* Run `npm start` in one terminal to expose the API on port 3000.
* Run `npm run dev` in a different terminal to serve the client on port 8080.
* Visit [http://localhost:8080](http://localhost:8080) and the site should continue to work fine.
* Have a look at how the Express middleware uses the `cors` package in `server/server.js`. Try commenting out that line and restarting `npm start`. Refresh the app and you should see errors. Read more about how to configure the [`cors` package](https://npmjs.org/package/cors) and try different configurations.

