import Animated, { interpolate, Keyframe, useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Slider from '@react-native-community/slider';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSlider = Animated.createAnimatedComponent(Slider);
const path1 = 'M12 311L93.9168 35.0071C96.5098 26.2708 102.773 19.0932 111.077 15.3402V15.3402C119.292 11.6275 128.708 11.6275 136.923 15.3402V15.3402C145.227 19.0932 151.49 26.2708 154.083 35.0071L236 311';
const path2 = 'M37.5 224.5H209.5';

export const ShowcaseReanimated = () => {
    const stroke1Offset = useSharedValue(660);
    const stroke2Offset = useSharedValue(180);
    const sliderValue = useSharedValue(0);

    useEffect(() => {
        animate();
    }, []);

    const animate = () => {
        sliderValue.value = withTiming(1, { duration: 6000 - sliderValue.value * 6000 });
    };

    const animatedPath1Props = useAnimatedProps(() => {
        return { strokeDashoffset: interpolate(sliderValue.value, [0, 0.7], [660, 0], 'clamp') };
    });

    const animatedPath2Props = useAnimatedProps(() => {
        return { strokeDashoffset: interpolate(sliderValue.value, [0.8, 1], [180, 0], 'clamp') };
    });

    const animatedSliderProps = useAnimatedProps(() => {
        return { value: sliderValue.value };
    });

    return (
        <View style={{ flex: 1, flexDirection: 'column', gap: 36, justifyContent: 'center', alignItems: 'center' }}>
            <Svg width={248} height={323} viewBox="0 0 248 323">
                <AnimatedPath
                    d={path1}
                    fill="none"
                    stroke="#099EFD"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeDasharray={660}
                    animatedProps={animatedPath1Props}
                />
                <AnimatedPath
                    d={path2}
                    fill="none"
                    stroke="#099EFD"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeDasharray={180}
                    animatedProps={animatedPath2Props}
                />
            </Svg>
            <AnimatedSlider
                minimumValue={0}
                maximumValue={1}
                style={{ width: 200 }}
                onSlidingComplete={animate}
                onValueChange={(value) => {
                    sliderValue.value = value;
                }}
                animatedProps={animatedSliderProps}
            />
        </View>
    );
};
