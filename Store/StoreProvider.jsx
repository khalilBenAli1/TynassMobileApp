import React, { useState, useEffect } from 'react';
import { Provider } from 'mobx-react';
import { setupRootStore } from './PersistStore';
import { StoreContext } from './storeContext';
export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(null);
  
  useEffect(() => {
    setupRootStore().then(initializedStore => {
      setStore(initializedStore);
    }).catch(error => console.error("Failed to setup root store:", error));
  }, []);

  if (!store) {
    console.log("Store is not ready yet.");
    return null;
  }

  console.log("Store is ready:", store);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;;
};
