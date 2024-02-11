import { StyleSheet, View } from 'react-native';
import { MediaControl } from '@app/components/MediaControl';
import { ResizeMode, Video } from 'expo-av';
import { useShowcase } from '@app/contexts/ShowcaseContext';
import { Loading } from '@app/components/Loading';
import { useEffect, useRef } from 'react';

export const Showcase = () => {
    const {
        playing,
        progress,
        loading,
        video,
        videoRef,
        positionMillis,
        currentTime,
        totalTime,
        play,
        pause,
        forward,
        backward,
    } = useShowcase();

    if (loading) return <Loading />;

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Video
                    ref={videoRef}
                    source={video}
                    shouldPlay={positionMillis > 14691}
                    resizeMode={ResizeMode.COVER}
                    useNativeControls={false}
                    style={{ width: 400, height: 400 }} />
            </View>
            <MediaControl
                progress={progress}
                paused={!playing}
                onPlay={play}
                onPause={pause}
                onForward={forward}
                onBackward={backward}
                currentTime={currentTime}
                totalTime={totalTime} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        flexDirection: 'column',
    },
    display: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 300,
    },
});
