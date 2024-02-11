import { Dispatch, MutableRefObject, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react';
import { ShowcaseContext } from '@app/contexts/ShowcaseContext/ShowcaseContext';
import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';
import { readAsStringAsync } from 'expo-file-system';
import { formatTime } from '@app/functions/formatTime';

export const ShowcaseProvider = ({ children }: PropsWithChildren<{}>) => {
    const [audioLoading, setAudioLoading] = useState(true);
    const [marksLoading, setMarksLoading] = useState(true);
    const [positionMillis, setPositionMillis] = useState(0);
    const [durationMillis, setDurationMillis] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState<`${number}%`>('0%');
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [totalTime, setTotalTime] = useState<string>('0:00');
    const audioRef = useRef<Audio.Sound>();
    const marksRef = useRef<PollyMark[]>();

    const loading = audioLoading || marksLoading;

    useEffect(() => {
        loadAudio(
            audioRef,
            setPositionMillis,
            setDurationMillis,
            setPlaying,
            setTotalTime,
            setCurrentTime,
            setProgress,
            setAudioLoading,
        ).catch(console.error);
    }, []);

    useEffect(() => {
        loadMarks(marksRef, setMarksLoading).catch(console.error);
    }, []);

    const play = async () => {
        audioRef.current?.playAsync();
    };

    const pause = async () => {
        audioRef.current?.pauseAsync();
    };

    const forward = async (step: number) => {
        const moveTo = positionMillis + step > durationMillis ? durationMillis : positionMillis + step;
        audioRef.current?.setPositionAsync(moveTo);
    };

    const backward = async (step: number) => {
        const moveTo = positionMillis - step < 0 ? 0 : positionMillis - step;
        audioRef.current?.setPositionAsync(moveTo);
    };

    return (
        <ShowcaseContext.Provider
            value={{
                loading,
                playing,
                positionMillis,
                durationMillis,
                currentTime,
                totalTime,
                progress,
                play,
                pause,
                backward,
                forward,
            }}>
            {children}
        </ShowcaseContext.Provider>
    );
};

const loadAudio = async (
    audioRef: MutableRefObject<Audio.Sound | undefined>,
    setPositionMillis: Dispatch<SetStateAction<number>>,
    setDurationMillis: Dispatch<SetStateAction<number>>,
    setPlaying: Dispatch<SetStateAction<boolean>>,
    setTotalTime: Dispatch<SetStateAction<string>>,
    setCurrentTime: Dispatch<SetStateAction<string>>,
    setProgress: Dispatch<SetStateAction<`${number}%`>>,
    setAudioLoading: Dispatch<SetStateAction<boolean>>,
) => {
    const audio = new Audio.Sound();

    audio.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded) {
            audioRef.current = audio;
            setPositionMillis(status.positionMillis);
            setDurationMillis(status.durationMillis!);
            setPlaying(status.isPlaying);
            setCurrentTime(formatTime(status.positionMillis / 1000));
            setTotalTime(formatTime(status.durationMillis! / 1000));
            setProgress(`${(status.positionMillis / status.durationMillis!) * 100}%`);
            setAudioLoading(false);
        }
    });

    await audio.loadAsync(require('@assets/speech.mp3'));
};

const loadMarks = async (
    marksRef: MutableRefObject<PollyMark[] | undefined>,
    setMarksLoading: Dispatch<SetStateAction<boolean>>,
) => {
    const [asset] = await Asset.loadAsync(require('@assets/speech.marks'));
    const lines = await readAsStringAsync(asset.localUri as string);
    marksRef.current = lines
        .split('\n')
        .filter((line) => line.trim() !== '')
        .map((line) => JSON.parse(line));
    setMarksLoading(false);
};

type PollyMark = {
    time: number;
    type: string;
    start: number;
    end: number;
    value: string;
};
