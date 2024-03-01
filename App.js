import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CodeRoom from './Screens/CodeRoom/CodeRoom.jsx';
import Language from './Screens/Language/Language.jsx';
import Loading from './Screens/Loading/Loading.jsx';
import Login from './Screens/Login/Login.jsx';
import Lobby from './Screens/Lobby/Lobby.jsx';
import Memories from './Screens/Memories/Memories.jsx';
import TeamSelect from './Screens/TeamSelect/TeamSelect.jsx';


const lobbyData = [
  { number: 1, avatar: 'http://example.com/avatar1.png', name: 'Player One' },
  { number: 2, avatar: 'http://example.com/avatar2.png', name: 'Player Two' },

];
export default function App() {
  return (
    // <Login/>
  //   <Loading
  //   backgroundColor="#161615"
  //   logoImage={require('./assets/images/WhiteLogoVersion.png')}
  //   backgroundImage={require('./assets/images/Vector.png')}
  // />
  // <CodeRoom/>
  // <Language/>
  // <TeamSelect/>
  <Lobby listData={lobbyData} />
  // <Memories/>
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
