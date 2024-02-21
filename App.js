import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Language from './Screens/Language/Index.jsx';

export default function App() {
  return (
    
      <Language/>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
