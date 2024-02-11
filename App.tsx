import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Color } from '@app/components/Color';
import { Paragraph } from '@app/components/Paragraph';
import { ShowcaseProvider } from '@app/contexts/ShowcaseContext';
import { MediaControl } from '@app/components/MediaControl';
import { Showcase } from '@app/components/Showcase';
import { ShowcaseReanimated } from '@app/components/ShowcaseReanimated';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded, fontError] = useFonts({
        'MPlusRounded1cBlack': require('@assets/mplusrounded1c_black.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="auto" />
            {/*<ShowcaseReanimated/>*/}
            <ShowcaseProvider children={<Showcase />}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.Gray,
    }
});
