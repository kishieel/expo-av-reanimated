import { ShowcaseActionType } from '@app/contexts/ShowcaseContext/actions';

export type ShowcaseState = {
    loading: boolean;
    playing: boolean;
    progress: `${number}%`;
    positionMillis: number;
    durationMillis: number;
    currentTime: string;
    totalTime: string;
}

export type ShowcaseAction = {
    type: ShowcaseActionType.SET_PROGRESS;
    payload: number;
}

export type ShowcaseMethods = {
    play: () => void;
    pause: () => void;
    forward: (step: number) => void;
    backward: (step: number) => void;
}

export type ShowcaseValue = ShowcaseState & ShowcaseMethods;
