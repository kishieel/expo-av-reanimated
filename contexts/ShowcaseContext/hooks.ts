import { useContext } from 'react';
import { ShowcaseContext } from '@app/contexts/ShowcaseContext/ShowcaseContext';

export const useShowcase = () => {
    return useContext(ShowcaseContext);
}
