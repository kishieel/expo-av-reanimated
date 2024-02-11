import { Text, TextProps, StyleSheet } from 'react-native';
import { forwardRef, PropsWithChildren } from 'react';
import { Color } from '@app/components/Color';

export type ParagraphProps = TextProps & {
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Paragraph = forwardRef<Text, PropsWithChildren<ParagraphProps>>(({ children, size = 'h1', style, ...props }, ref) => {
    const fontSize = {
        h1: 42,
        h2: 36,
        h3: 30,
        h4: 24,
        h5: 18,
        h6: 16,
    }[size ?? 'h1'];

    return (
        <Text ref={ref} style={[styles.paragraph, { fontSize }, style]} {...props}>
            {children}
        </Text>
    );
});


const styles = StyleSheet.create({
    paragraph: {
        color: Color.White,
        fontFamily: 'MPlusRounded1cBlack',
        justifyContent: 'center',
    },
});
