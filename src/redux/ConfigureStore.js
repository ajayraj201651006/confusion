import { createStore } from 'redux';
import { Reducers, intialState } from './Reducers';

export const ConfigureStore = () => {
    const store = createStore(
        Reducers,
        intialState
    );

    return store;
}
