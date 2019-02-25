import { createStore } from 'redux';
import { Reducers, intialState } from './Reducers';

export const configureStore = () => {
    const store = createStore(
        Reducers,
        intialState
    );

    return store;
}
