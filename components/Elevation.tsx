import { forwardRef, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Color } from '@app/components/Color';
import { Paragraph } from '@app/components/Paragraph';

export const Elevation = forwardRef<View, PropsWithChildren<Pick<ViewProps, 'style'>>>(({ children, style }, ref) => {
    return (
        <View ref={ref} style={[styles.outer, style]}>
            <View style={styles.inner}>
                <Paragraph style={styles.text}>
                    {children}
                </Paragraph>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    outer: {
        backgroundColor: Color.Sea,
        aspectRatio: 1,
        paddingBottom: 20,
        alignSelf: 'center',
        width: 250,
        borderRadius: 30,
    },
    inner: {
        backgroundColor: Color.Blue,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        borderRadius: 30,
    },
    text: {
        textAlign: 'center',
        fontSize: 140,
    },
});
