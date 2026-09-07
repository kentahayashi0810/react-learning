import { combineReducers, createStore } from "redux";
import Counter from "../components/Counter";

const initialValue = 0;

const reducer = (state = initialValue, { type, step }) => {
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    default:
      return state;
  }
};
const reducer2 = (state = initialValue, { type, step }) => {
  console.log(type);
  switch (type) {
    case "counter2/+":
      return state + step;
    case "counter2/-":
      return state - step;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter: reducer,
  counter2: reducer2,
});

export default createStore(reducers);
