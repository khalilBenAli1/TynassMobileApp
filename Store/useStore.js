import { useContext } from 'react';
import { StoreContext } from './storeContext';

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    // This error is thrown if the hook is used outside of StoreProvider's context
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};