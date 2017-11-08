import { Map } from 'immutable';
import { createReducer } from 'redux-act';
import { register, change } from './actions';

export default createReducer({
    [register]: (state, { name }) => state.set(name, 1),
    [change]: (state, { name, page }) => state.set(name, page)
}, Map());
