import { applyMiddleware, createStore } from "redux";

import createDebounce from "redux-debounce";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducer from "./reducers/projectsReducer";

const middleware = applyMiddleware(createDebounce({ simple: 300 }) ,promise(), thunk, logger());

export default createStore(reducer, middleware);
