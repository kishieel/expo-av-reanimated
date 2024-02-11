import Svg, { Path } from 'react-native-svg';
import { IconProps } from '@app/types/IconProps';

export const PlayIcon = (props: IconProps) => {
    return (
        <Svg width={props.width ?? 108} height={props.height ?? 126} viewBox="0 0 128 128" fill="none">
            <Path
                d="M20.5312 1.98462C16.3687 -0.574303 11.1375 -0.658664 6.89062 1.73154C2.64375 4.12174 0 8.62094 0 13.5138V112.496C0 117.389 2.64375 121.888 6.89062 124.279C11.1375 126.669 16.3687 126.556 20.5312 124.026L101.531 74.5343C105.553 72.0878 108 67.7292 108 63.0051C108 58.2809 105.553 53.9504 101.531 51.4759L20.5312 1.98462Z"
                fill={props.fill ?? '#ffffff'}
            />
        </Svg>
    );
};
