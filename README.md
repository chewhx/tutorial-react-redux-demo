# [React-Redux Tutorial by Codevolution](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK) 


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/9boMnm5X9ak/0.jpg)](https://www.youtube.com/playlist?list=PLC3y8-rFHvwheJHvseC3I0HuYI2f46oAK)

# React-Redux Tutorial [PART 2 ] by Codevolution

```
└── src/
    ├── components
    └── redux/
        ├── cakes/
        │   ├── cakeConstant.js
        │   ├── cakeAction.js
        │   └── cakeReducer.js
        └── store.js
```

- Create files for each constant, action, reducer and bring into store.js

```jsx
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
        <CakeContainer />
    </Provider>
  );
}

```

- Wrap `<App />` with `<Provider>` with `store.js` as props
- The application will be able to access all the states in the store.js

# Two methods to manage state

- connectHOC method 
- useSelector and useDispatch hooks

# Middleware 
NPM Packages:
- [x] redux-logger

# DevTools
NPM Packages:
- [x] redux-devtools-extension

- install Redux DevTools on Chrome
- install redux-devtools-extension in project

# Using action payload to pass custom inputs

- See `NewCakeContainer.jsx`
- add number param to `cakeActions.js` and `cakeReducer.js`

# mapToStateProps can receive ownProps

- an <ItemContainer /> take a prop with can be mapped to the state container

# mapDispatchToProps takes ownProps

- same <ItemContainer /> can adjust the state it called for