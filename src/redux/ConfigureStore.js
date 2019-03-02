import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './Dishes';
import { Comments } from './Comments';
import { Promotions } from './Promotions';
import { Leaders } from './Leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
           applyMiddleware(thunk, logger)
    );

    return store;
}
