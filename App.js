import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CodeRoom from './Screens/CodeRoom/CodeRoom.jsx';


export default function App() {
  return (
     <CodeRoom/>
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
