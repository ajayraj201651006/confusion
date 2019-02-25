import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';

export const intialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const reducers = (state = intialState, action) => {
    return state;
}