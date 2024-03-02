
import AsyncStorage from '@react-native-async-storage/async-storage';
import { onSnapshot } from 'mobx-state-tree';
import  RootStore  from './Models/rootStore';

export async function setupRootStore() {

  const savedState = await AsyncStorage.getItem('appState');
  const initialState = savedState ? JSON.parse(savedState) : {}; 

  const rootStore = RootStore.create(initialState);
  
  onSnapshot(rootStore, async (snapshot) => {
    await AsyncStorage.setItem('appState', JSON.stringify(snapshot));
  });

  return rootStore; 
}
