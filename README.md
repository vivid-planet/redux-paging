# redux-paging

[![NPM Version](https://img.shields.io/npm/v/@vivid-planet/redux-paging.svg?style=flat)](https://www.npmjs.com/package/@vivid-planet/redux-paging)
[![NPM Downloads](https://img.shields.io/npm/dm/@vivid-planet/redux-paging.svg?style=flat)](https://www.npmjs.com/package/@vivid-planet/redux-paging)

`redux-paging` works with [React Redux](https://github.com/rackt/react-redux) to render a paging in 
[React](https://github.com/facebook/react) to use [Redux](https://github.com/rackt/redux) to store all of its state.

## Installation
```npm install --save redux-paging```

## Getting Started

### Step 1 of 3: Form reducer

The store should know how to handle actions coming from the paging component.
To enable this, we need to pass the pagingReducer to your store.

```javascript
import { combineReducers } from 'redux';
import { reducer as pagingReducer } from '@vivid-planet/redux-paging';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass pagingReducer under 'paging' key
  paging: pagingReducer
})
```

### Step 2 of 3: `<Paging />` Component

The `<Paging />` component renders the pages calculated with the total and perPage props.
The basic usage goes as follows:

```jsx
<Paging
    name="pagingName"
    total={number}
    perPage={number}
    onChangePage={changePage}
/>
```

### Step 3 of 3: Reacting to onChangePage

The new page is passed as argument to your callback function.
Tell the store to change to current page after request is finished.

```javascript
import { change } from '@vivid-planet/redux-paging';

export const changePage = (page) => {
    return (dispatch, getState) => {
        return sleep(1000).then(() => {
            // simulate server latency
            dispatch(change('pagingName', page));
        });
    }
}
```
