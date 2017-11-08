import { createAction } from 'redux-act';

export const register = createAction('@redux-paging/REGISTER', (name) => ({ name }));
export const change = createAction('@redux-paging/CHANGE', (name, page) => ({ name, page }));
