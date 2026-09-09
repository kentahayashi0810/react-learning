# Learning Progress Log

## Structure

- Date
- What I learned or did
- Things I had trouble understanding
- Summary

---

### 9/9

- immer
- redux thunk(middleware)
- Redux Thunk allows us to dispatch a function instead of an action.
- The function can perform additional processing, such as an API call, and then dispatch an action when the processing is finished.
- A thunk does not have to call `dispatch`, but it is often used to dispatch an action after an asynchronous operation.

### 9/8

- redux toolkit
- within the toolkit, it is allowed to change immutable value, thanks to immer

### 9/7

- redux
- action creator

### 9/6

- useLayoutEffect
- customHooks
- - **Side effects:** In React, it is crucial to keep component functions pure. Rendering should be kept separate from side effects such as API calls, DOM manipulation, and local storage updates. Side effects should be handled outside the rendering process, typically using `useEffect`.

### 9/5

- useEffect, cleanUp, dependency array

### 9/4

- learned about useeffect

### 9/1

- Furthur practice useContext, still need to fix some bugs

### 8/31

- refactored useReducer code by using useContext.
-

### 8/30

- useContext
- performance: when you update state through context, not only the components that are subsrcibed to the state, but also the components that only need the state update functions get re rendered, which is unnecessary and lowered the performance. To tackle this, you can make separate context provider just for updating function. This way, even when the context state gets updated, the components that only read the update function dont get re rendered.

### 8/29

- reducer practice

### 8/20

- reducer

### 8/19

- immutability

### 8/18

- pure functions in react

### 8/15

- Difference between Procedual Programming and Functional programming
- functional programming rules: no referring to a value outside of the function, args can always expect the same return value

### 8/13

- useImperativeHandle

### 8/7

- ForwardRef

### 8/6

- UseRef

### 8/2

- React DOM, createPortal, Bubbling in React DOM

### 7/30

- Chakra UI,

### 7/28

- css framework, chakra UI

### 7/26

- css modules, css in js/styled-components,

### 7/25

- css module, inline css

### 7/24

- refactoring

### 7/23

- todo app challenge, needs refactoring

### 7/22

- form, pulldown, multi checkbox

### 7/21

- Form elements,

### 7/20

- array methods, key,

### 7/19

- React hooks, state, rendering, passing down states

### 7/15

- deep about JSX, events

### 7/9

- Fragment, props, JSX, the difference between expression and statement

### 7/8

- React setup, components

### 7/6

- Reviewd JavaScript: Arrow function, ES Module, callback function, debugger, DOM, rest parameter, map,filter, spread syntax, xonditional operator, Promise, async/await
  -React setup, components

### 7/5

- Installed recommended extensions
- reviewed how npm installs dependencies
- addeed docs folder
