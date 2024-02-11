import { ShowcaseActionType } from '@app/contexts/ShowcaseContext/actions';
import { Asset } from 'expo-asset';
import { RefObject } from 'react';
import { Video } from 'expo-av';

export type ShowcaseState = {
    loading: boolean;
    playing: boolean;
    progress: `${number}%`;
    positionMillis: number;
    durationMillis: number;
    currentTime: string;
    totalTime: string;
    video: Asset | undefined;
    videoRef: RefObject<Video>;
}

export type ShowcaseAction = {
    type: ShowcaseActionType.SET_PROGRESS;
    payload: number;
}

export type ShowcaseMethods = {
    play: () => void;
    pause: () => void;
    forward: () => void;
    backward: () => void;
}

export type ShowcaseValue = ShowcaseState & ShowcaseMethods;
