import { StyleSheet, View } from 'react-native';
import { Color } from '@app/components/Color';

export type ProgressProps = {
    progress?: number | `${number}%`;
};

export const Progress = ({ progress = 0 }: ProgressProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBackground}>
                <View style={[styles.progressForeground, { width: progress }]}>
                    <View style={styles.reflex} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    progressBackground: {
        height: 16,
        backgroundColor: Color.White,
        borderRadius: 12,
    },
    progressForeground: {
        height: 16,
        backgroundColor: Color.Blue,
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingTop: 4,
    },
    reflex: {
        height: 4,
        backgroundColor: Color.White,
        borderRadius: 12,
        opacity: 0.4,
    },
});
