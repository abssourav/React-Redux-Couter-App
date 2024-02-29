import { createStore } from "redux";
import counterReducer from "./src/services/reducers/counterReducer";

export const store = createStore(counterReducer)