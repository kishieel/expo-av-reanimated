import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@app/types/IconProps';

export const ForwardIcon = (props: IconProps) => {
    return (
        <Svg width={props.width ?? 105} height={props.height ?? 126} viewBox="0 0 128 128" fill="none">
            <Path
                d="M17.2266 123.565C14.1094 126.157 9.74531 126.748 6.0375 125.009C2.32969 123.27 0 119.563 0 115.495V10.5141C0 6.44607 2.3625 2.73893 6.0375 1.00019C9.7125 -0.738559 14.0766 -0.180848 17.2266 2.44367L80.2266 54.9341L84 58.0835V10.5141C84 4.70732 88.6922 0.0159906 94.5 0.0159906C100.308 0.0159906 105 4.70732 105 10.5141V115.495C105 121.302 100.308 125.993 94.5 125.993C88.6922 125.993 84 121.302 84 115.495V67.9255L80.2266 71.0749L17.2266 123.565Z"
                fill={props.fill ?? '#fff'}
            />
        </Svg>
    );
};
