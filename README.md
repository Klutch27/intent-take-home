**Instructions:**

To run the application, please do the following:

1. Clone this repo locally.
2. `npm install`
3. To run tests: `npm run test`
4. To run the application: `npm run start`
5. Navigate in your browser, to: http://localhost:3000/

**Design Notes:**

0. In order to persist state (namely, the shoppping cart), I implemented a server-side cache and sessions. When a user visits the site for the first time, they received a session, and this session is stored in the cache. A shopping cart is initialized for them, connected to their session ID. The data associated with their particular session ID is fetched by the front end, and then displayed -- resulting in a state persistent application. If the user navigates to another page and comes back, their state will persist because it is fetched from the server in the main component, `Home`, during the `componentDidMount` lifecyle.

1. The session itself is using the default express-session memory storage, which is not viable for produciton code as it leaks memory and thus would not be scalable. A separate memory store for sessions would be needed. However, for a small application such as this it works adequately.

2. Because the state to be managed is quite small, I opted for React's native state management via prop drilling because I never had to pass props down further than a single layer, from parent to child.

3. I utilized React's `style` prop and inline CSS to style the application. This is a personal preference of mine, especially for smaller applications, because it allows me to see everything all together and to continuously think in React. When I incorporate a traditional stylesheet, the styling and the components feel more separate to me, and I have to bounce back and forth between the stylesheet and the component (which also switches my frame of mind). That being said, the trade off is that the files become larger and less modular. On a larger application, I would opt for CSS or SASS/SCSS.

4. The core business logic (calculating the cart total based on unit pricing and discounts) was moved to a helper function in order to make the code more modular and readable. This is the function that is tested when you run `npm test`. The function is at least quadratic time complexity `O(n^2)`, as it utilizes a nested looping structure. If I were to find somewhere to make application improvements and reduced load times, this is where I would start. This function is called frequently, and the quadratic time complexity really slows things down. (Granted there are only four fruit options, so it's not noticeable -- but at scale this would be problematic).

5. Express was chosen for a backend framework as it allows for semantic, declarative API development and provides easy access to the request-response pipeline. Additionally, the chainable middleware allows for more modular code.

6. The API uses 3 different endpoints, and relies on the request body in POST/PATCH requests to modify the cache. In retrospect, this may not have been what was intended in the original spec. An alternative way to design the API would be to use `req.params` and add each representative `id` as a string which could then be parsed by the server, and a total calculated.

7. Since no data needed to persist beyond the duration of the user's session, no database was needed. Although to create an ecomm site at scale, I'd consider persisting the user's state in a database so that it was presented to them on future returns. Moreover, a time stamp could be implemented -- if the user had not returned in a certain period, marketing e-mails targeting their stored data (i.e. products they considered purchasing) could be generated.

8. Webpack was utilized as a build tool to create minified and uglified code, allowing for better browser performance. It also allows for ES6 import statements (requires babel with webpack).

9. Mocha and Chai were used for testing. Chai has a simple and straightforward assertion tool to check strict equality (useful for testing the mathematical nature of the helper function). 
