import {useEffect} from 'react';

/**
 * Runs effect only once
 * @param {Function} effect
 */
export const useEffectOnce = (effect: Function) => useEffect(() =>  effect(), []);

