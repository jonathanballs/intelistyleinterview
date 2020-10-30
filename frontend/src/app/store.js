import { createStore } from "redux"
import { reducer } from "../reducers/garments"
let store = createStore(reducer);

export default store;

