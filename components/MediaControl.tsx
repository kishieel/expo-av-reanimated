import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { BackwardIcon } from '@app/components/BackwardIcon';
import { PlayIcon } from '@app/components/PlayIcon';
import { PauseIcon } from '@app/components/PauseIcon';
import { ForwardIcon } from '@app/components/ForwardIcon';
import { Progress } from '@app/components/Progress';
import { Paragraph } from '@app/components/Paragraph';

type MediaControlProps = {
    progress: number | `${number}%`;
    paused?: boolean;
    currentTime?: string;
    totalTime?: string;
    onBackward?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onForward?: () => void;
};

export const MediaControl = ({
    progress,
    paused,
    currentTime,
    totalTime,
    onBackward,
    onPlay,
    onForward,
    onPause,
}: MediaControlProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerOfTexts}>
                <Paragraph size="h6">{currentTime}</Paragraph>
                <Paragraph size="h6">{totalTime}</Paragraph>
            </View>
            <View style={styles.containerOfProgress}>
                <Progress progress={progress} />
            </View>
            <View style={styles.containerOfButtons}>
                <TouchableOpacity onPress={onBackward}>
                    <BackwardIcon width={32} height={32} />
                </TouchableOpacity>
                {paused ? (
                    <TouchableOpacity onPress={onPlay}>
                        <PlayIcon width={32} height={32} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onPause}>
                        <PauseIcon width={32} height={32} />
                    </TouchableOpacity>
                )}
                <TouchableOpacity onPress={onForward}>
                    <ForwardIcon width={32} height={32} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    containerOfTexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerOfProgress: {
        height: 16,
    },
    containerOfButtons: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
