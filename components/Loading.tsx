import { StyleSheet, View } from 'react-native';
import { Paragraph } from '@app/components/Paragraph';

export const Loading = () => {
    return (
        <View style={styles.container}>
            <Paragraph>Loading...</Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
