import { Dispatch, MutableRefObject, PropsWithChildren, SetStateAction, useEffect, useRef, useState } from 'react';
import { ShowcaseContext } from '@app/contexts/ShowcaseContext/ShowcaseContext';
import { Audio, Video } from 'expo-av';
import { Asset } from 'expo-asset';
import { readAsStringAsync } from 'expo-file-system';
import { formatTime } from '@app/functions/formatTime';


export const ShowcaseProvider = ({ children }: PropsWithChildren<{}>) => {
    const [loading, setLoading] = useState(false);
    const [positionMillis, setPositionMillis] = useState(0);
    const [durationMillis, setDurationMillis] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState<`${number}%`>('0%');
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [totalTime, setTotalTime] = useState<string>('0:00');
    const audioRef = useRef<Audio.Sound>();
    const videoRef = useRef<Video>(null);
    const assetRef = useRef<Asset>();
    const marksRef = useRef<PollyMark[]>();

    useEffect(() => {
        loadAudio(
            audioRef,
            setPositionMillis,
            setDurationMillis,
            setPlaying,
            setTotalTime,
            setCurrentTime,
            setProgress,
        ).catch(console.error);
    }, []);

    useEffect(() => {
        loadVideo(assetRef).catch(console.error);
    }, []);

    useEffect(() => {
        loadMarks(marksRef).catch(console.error);
    }, []);

    useEffect(() => {
        console.log(!audioRef.current, !assetRef.current, !marksRef.current);
        setLoading(!audioRef.current || !assetRef.current || !marksRef.current);
    }, [audioRef, assetRef, marksRef]);


    const play = async () => {
        if (loading) return;
        await Promise.all([
            audioRef.current?.playAsync(),
            positionMillis > 14691 ? videoRef.current?.playAsync() : videoRef.current?.setPositionAsync(0),
        ]);
    };

    const pause = async () => {
        if (loading) return;
        await Promise.all([
            audioRef.current?.pauseAsync(),
            videoRef.current?.pauseAsync(),
        ]);
    };

    const forward = async () => {
        if (loading) return;
        const moveTo = positionMillis + 5000 > durationMillis ? durationMillis : positionMillis + 5000;
        await Promise.all([
            audioRef.current?.setPositionAsync(moveTo),
            videoRef.current?.setPositionAsync(moveTo - 14691),
        ]);
    };

    const backward = async () => {
        if (loading) return;
        const moveTo = positionMillis - 5000 < 0 ? 0 : positionMillis - 5000;
        await Promise.all([
            audioRef.current?.setPositionAsync(moveTo),
            videoRef.current?.setPositionAsync(moveTo - 14691),
        ]);
    };

    return <ShowcaseContext.Provider value={{
        video: assetRef.current,
        videoRef: videoRef,
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
    }}>{children}</ShowcaseContext.Provider>;
};

const loadAudio = async (
    audioRef: MutableRefObject<Audio.Sound | undefined>,
    setPositionMillis: Dispatch<SetStateAction<number>>,
    setDurationMillis: Dispatch<SetStateAction<number>>,
    setPlaying: Dispatch<SetStateAction<boolean>>,
    setTotalTime: Dispatch<SetStateAction<string>>,
    setCurrentTime: Dispatch<SetStateAction<string>>,
    setProgress: Dispatch<SetStateAction<`${number}%`>>,
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
        }
    });

    await audio.loadAsync(require('@assets/speech.mp3'));
};

const loadVideo = async (videoRef: MutableRefObject<Asset | undefined>) => {
    const [asset] = await Asset.loadAsync(require('@assets/showcase.mp4'));
    videoRef.current = asset;
};

const loadMarks = async (marksRef: MutableRefObject<PollyMark[] | undefined>) => {
    const [asset] = await Asset.loadAsync(require('@assets/speech.marks'));
    const lines = await readAsStringAsync(asset.localUri as string);
    marksRef.current = lines.split('\n').filter((line) => line.trim() !== '').map((line) => JSON.parse(line));
};

type PollyMark = {
    time: number;
    type: string;
    start: number;
    end: number;
    value: string;
}



