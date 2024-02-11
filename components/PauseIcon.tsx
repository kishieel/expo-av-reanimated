import { IconProps } from '@app/components/icons/types';
import Svg, { Path } from 'react-native-svg';

export const PauseIcon = (props: IconProps) => {
    return (
        <Svg width={props.width ?? 105} height={props.height ?? 126} viewBox="0 0 128 128" fill="none">
            <Path
                d="M15.75 0C7.05469 0 0 7.05469 0 15.75V110.25C0 118.945 7.05469 126 15.75 126H26.25C34.9453 126 42 118.945 42 110.25V15.75C42 7.05469 34.9453 0 26.25 0H15.75ZM78.75 0C70.0547 0 63 7.05469 63 15.75V110.25C63 118.945 70.0547 126 78.75 126H89.25C97.9453 126 105 118.945 105 110.25V15.75C105 7.05469 97.9453 0 89.25 0H78.75Z"
                fill={props.fill ?? '#fff'}
            />
        </Svg>
    );
};
