import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CodeRoom from './Screens/CodeRoom/CodeRoom.jsx';
import Language from './Screens/Language/Language.jsx';
import Loading from './Screens/Loading/Loading.jsx';
import Login from './Screens/Login/Login.jsx';


export default function App() {
  return (
    <Login/>
  //   <Loading
  //   backgroundColor="#161615"
  //   logoImage={require('./assets/images/WhiteLogoVersion.png')}
  //   backgroundImage={require('./assets/images/Vector.png')}
  // />
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
