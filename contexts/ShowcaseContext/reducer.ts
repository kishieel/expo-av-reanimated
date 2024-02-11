import { Reducer } from 'react';
import { ShowcaseAction, ShowcaseState } from '@app/contexts/ShowcaseContext/types';

export const reducer: Reducer<ShowcaseState, ShowcaseAction> = (state, action): ShowcaseState => {
    switch (action.type) {
        case 'SET_PROGRESS':
            return { ...state, progress: action.payload };
        default:
            return state;
    }
}
