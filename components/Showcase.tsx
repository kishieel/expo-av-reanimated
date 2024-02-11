import { StyleSheet, View } from 'react-native';
import { MediaControl } from '@app/components/MediaControl';
import { useShowcase } from '@app/contexts/ShowcaseContext';
import { Loading } from '@app/components/Loading';
import { Paragraph } from '@app/components/Paragraph';
import Reanimated, {
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { Elevation } from '@app/components/Elevation';
import Svg, { Path } from 'react-native-svg';

const ReanimatedElevation = Reanimated.createAnimatedComponent(Elevation);
const ReanimatedParagraph = Reanimated.createAnimatedComponent(Paragraph);
const ReanimatedSvg = Reanimated.createAnimatedComponent(Svg);
const ReanimatedPath = Reanimated.createAnimatedComponent(Path);

const markTime_1 = 0;
const markTime_2 = 14691;
const markTime_3 = 25789;
const markTime_4 = 37537;
const markTime_5 = 38795;
const markTime_6 = 39832;

const uppercasePath1 =
    'M63 326.5L144.917 50.5071C147.51 41.7708 153.773 34.5932 162.077 30.8402V30.8402C170.292 27.1275 179.708 27.1275 187.923 30.8402V30.8402C196.227 34.5932 202.49 41.7708 205.083 50.5071L287 326.5';
const uppercasePath2 = 'M89 239H261';

const lowercasePath1 =
    'M170 186C130.788 186 100 216.788 100 256C100 295.212 130.788 326 170 326C209.212 326 240 295.212 240 256C240 216.788 210.211 185.723 171 186';
const lowercasePath2 =
    'M240.5 187.5V305.267C240.5 309.647 241.86 313.92 244.392 317.495V317.495C247.362 321.688 251.757 324.656 256.755 325.846L257.006 325.906C258.663 326.301 260.361 326.5 262.064 326.5H267';


export const Showcase = () => {
    const {
        playing,
        progress,
        loading,
        positionMillis,
        durationMillis,
        currentTime,
        totalTime,
        play,
        pause,
        forward,
        backward,
    } = useShowcase();

    const translateY_1 = useSharedValue(100);
    const opacity_1 = useSharedValue(0);
    const opacity_2 = useSharedValue(1);
    const strokeOffset_2_1 = useSharedValue(660);
    const strokeOffset_2_2 = useSharedValue(180);
    const opacity_3 = useSharedValue(1);
    const strokeOffset_3_1 = useSharedValue(440);
    const strokeOffset_3_2 = useSharedValue(160);
    const translateY_4 = useSharedValue(100);
    const opacity_4 = useSharedValue(0);
    const translateY_5 = useSharedValue(100);
    const opacity_5 = useSharedValue(0);
    const translateY_6 = useSharedValue(100);
    const opacity_6 = useSharedValue(0);

    const animatedStyles_1 = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY_1.value }],
        opacity: opacity_1.value,
    }));

    const animatedStyles_2 = useAnimatedStyle(() => ({ opacity: opacity_2.value }));

    const animatedProps_2_1 = useAnimatedProps(() => ({ strokeDashoffset: strokeOffset_2_1.value }));

    const animatedProps_2_2 = useAnimatedProps(() => ({ strokeDashoffset: strokeOffset_2_2.value }));

    const animatedStyles_3 = useAnimatedStyle(() => ({ opacity: opacity_3.value }));

    const animatedProps_3_1 = useAnimatedProps(() => ({ strokeDashoffset: strokeOffset_3_1.value }));

    const animatedProps_3_2 = useAnimatedProps(() => ({ strokeDashoffset: strokeOffset_3_2.value }));

    const animatedStyles_4 = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY_4.value }],
        opacity: opacity_4.value,
    }));

    const animatedStyles_5 = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY_5.value }],
        opacity: opacity_5.value,
    }));

    const animatedStyles_6 = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY_6.value }],
        opacity: opacity_6.value,
    }));

    useEffect(() => {
        if (playing) startAnimations(positionMillis);
        else interpolateAnimations(positionMillis);
    }, [playing]);

    const startAnimations = (positionMillis: number) => {
        const delay_1 = Math.max(markTime_1 - positionMillis, 0);
        const delay_2 = Math.max(markTime_2 - positionMillis, 0);
        const delay_3 = Math.max(markTime_3 - positionMillis, 0);
        const delay_4 = Math.max(markTime_4 - positionMillis, 0);
        const delay_5 = Math.max(markTime_5 - positionMillis, 0);
        const delay_6 = Math.max(markTime_6 - positionMillis, 0);

        translateY_1.value = withDelay(delay_1, withTiming(0, { duration: 1000 }));
        opacity_1.value =
            delay_2 - 3000 > 0
                ? withSequence(
                      withDelay(delay_1, withTiming(1, { duration: 1000 })),
                      withDelay(delay_2 - 3000, withTiming(0, { duration: 1000 })),
                  )
                : withDelay(delay_2 - 2000, withTiming(0, { duration: 1000 }));
        opacity_2.value = withDelay(delay_3 - 2000, withTiming(0, { duration: 1000 }));
        strokeOffset_2_1.value = withDelay(delay_2, withTiming(0, { duration: 3000 }));
        strokeOffset_2_2.value = withDelay(delay_2 + 4500, withTiming(0, { duration: 1000 }));
        opacity_3.value = withDelay(delay_4 - 2000, withTiming(0, { duration: 1000 }));
        strokeOffset_3_1.value = withDelay(delay_3, withTiming(0, { duration: 3000 }));
        strokeOffset_3_2.value = withDelay(delay_3 + 4500, withTiming(0, { duration: 1000 }));
        translateY_4.value = withDelay(delay_4, withTiming(0, { duration: 1000 }));
        opacity_4.value = withDelay(delay_4, withTiming(1, { duration: 1000 }));
        translateY_5.value = withDelay(delay_5, withTiming(0, { duration: 1000 }));
        opacity_5.value = withDelay(delay_5, withTiming(1, { duration: 1000 }));
        translateY_6.value = withDelay(delay_6, withTiming(0, { duration: 1000 }));
        opacity_6.value = withDelay(delay_6, withTiming(1, { duration: 1000 }));
    };

    const interpolateAnimations = (positionMillis: number) => {
        translateY_1.value = interpolate(positionMillis, [markTime_1, markTime_1 + 1000], [50, 0], Extrapolation.CLAMP);
        opacity_1.value = interpolate(
            positionMillis,
            [markTime_1, markTime_1 + 1000, markTime_2 - 2000, markTime_2 - 1000],
            [0, 1, 1, 0],
            Extrapolation.CLAMP,
        );
        opacity_2.value = interpolate(
            positionMillis,
            [markTime_2, markTime_3 - 2000, markTime_3 - 1000],
            [1, 1, 0],
            Extrapolation.CLAMP,
        );
        strokeOffset_2_1.value = interpolate(
            positionMillis,
            [markTime_2, markTime_2 + 3000],
            [660, 0],
            Extrapolation.CLAMP,
        );
        strokeOffset_2_2.value = interpolate(
            positionMillis,
            [markTime_2 + 4500, markTime_2 + 5500],
            [180, 0],
            Extrapolation.CLAMP,
        );
        opacity_3.value = interpolate(
            positionMillis,
            [markTime_3, markTime_4 - 2000, markTime_4 - 1000],
            [1, 1, 0],
            Extrapolation.CLAMP,
        );
        strokeOffset_3_1.value = interpolate(
            positionMillis,
            [markTime_3, markTime_3 + 3000],
            [440, 0],
            Extrapolation.CLAMP,
        );
        strokeOffset_3_2.value = interpolate(
            positionMillis,
            [markTime_3 + 4500, markTime_3 + 5500],
            [160, 0],
            Extrapolation.CLAMP,
        );
        translateY_4.value = interpolate(positionMillis, [markTime_4, markTime_4 + 1000], [50, 0], Extrapolation.CLAMP);
        opacity_4.value = interpolate(positionMillis, [markTime_4, markTime_4 + 1000], [0, 1], Extrapolation.CLAMP);
        translateY_5.value = interpolate(positionMillis, [markTime_5, markTime_5 + 1000], [50, 0], Extrapolation.CLAMP);
        opacity_5.value = interpolate(positionMillis, [markTime_5, markTime_5 + 1000], [0, 1], Extrapolation.CLAMP);
        translateY_6.value = interpolate(positionMillis, [markTime_6, markTime_6 + 1000], [50, 0], Extrapolation.CLAMP);
        opacity_6.value = interpolate(positionMillis, [markTime_6, markTime_6 + 1000], [0, 1], Extrapolation.CLAMP);
    };

    const handleBackward = () => {
        if (playing) startAnimations(positionMillis - 1000);
        else interpolateAnimations(positionMillis - 1000);

        backward(1000);
    };

    const handleForward = () => {
        if (playing) startAnimations(positionMillis + 1000);
        else interpolateAnimations(positionMillis + 1000);

        forward(1000);
    };

    if (loading) return <Loading />;

    return (
        <View style={styles.container}>
            {/*<CourseAnimator/>*/}
            <View style={styles.display}>
                <View style={styles.layer}>
                    <ReanimatedElevation style={animatedStyles_1}>Aa</ReanimatedElevation>
                </View>
                <View style={styles.layer}>
                    <ReanimatedSvg width={350} height={350} viewBox="0 0 350 350" style={animatedStyles_2}>
                        <ReanimatedPath
                            d={uppercasePath1}
                            fill="none"
                            stroke="#099EFD"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeDasharray={660}
                            animatedProps={animatedProps_2_1}
                        />
                        <ReanimatedPath
                            d={uppercasePath2}
                            fill="none"
                            stroke="#099EFD"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeDasharray={180}
                            animatedProps={animatedProps_2_2}
                        />
                    </ReanimatedSvg>
                </View>
                <View style={styles.layer}>
                    <ReanimatedSvg width={350} height={350} viewBox="0 0 350 350" style={animatedStyles_3}>
                        <ReanimatedPath
                            d={lowercasePath1}
                            fill="none"
                            stroke="#099EFD"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeDasharray={440}
                            animatedProps={animatedProps_3_1}
                        />
                        <ReanimatedPath
                            d={lowercasePath2}
                            fill="none"
                            stroke="#099EFD"
                            strokeWidth="24"
                            strokeLinecap="round"
                            strokeDasharray={160}
                            animatedProps={animatedProps_3_2}
                        />
                    </ReanimatedSvg>
                </View>
                <View style={styles.layer}>
                    <ReanimatedParagraph style={animatedStyles_4}>Arbuz</ReanimatedParagraph>
                    <ReanimatedParagraph style={animatedStyles_5}>Anioł</ReanimatedParagraph>
                    <ReanimatedParagraph style={animatedStyles_6}>Agrafka</ReanimatedParagraph>
                </View>
            </View>
            <MediaControl
                progress={progress}
                paused={!playing}
                onPlay={play}
                onPause={pause}
                onForward={handleForward}
                onBackward={handleBackward}
                currentTime={currentTime}
                totalTime={totalTime}
            />
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
    layer: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 300,
    },
});
