import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@app/types/IconProps';

export const BackwardIcon = (props: IconProps) => {
    return (
        <Svg width={props.width ?? 105} height={props.height ?? 126} viewBox="0 0 128 128" fill="none">
            <Path
                d="M87.7734 123.565C90.8906 126.157 95.2547 126.748 98.9625 125.009C102.67 123.27 105 119.563 105 115.495V10.5141C105 6.44607 102.638 2.73893 98.9625 1.00019C95.2875 -0.738559 90.9234 -0.180848 87.7734 2.44367L24.7734 54.9341L21 58.0835V10.5141C21 4.70732 16.3078 0.0159906 10.5 0.0159906C4.69219 0.0159906 0 4.70732 0 10.5141V115.495C0 121.302 4.69219 125.993 10.5 125.993C16.3078 125.993 21 121.302 21 115.495V67.9255L24.7734 71.0749L87.7734 123.565Z"
                fill={props.fill ?? '#fff'}
            />
        </Svg>
    );
};
