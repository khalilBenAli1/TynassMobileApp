import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 


const ListItem = ({ number, avatar, name }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemText}>{number}. </Text>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.itemText}>{name}</Text>
  </View>
);

const Lobby = ({ listData }) => {
  const [text, setText] = useState("Initial Text");

  const toggleText = () => {
    setText(prevText => prevText === "Initial Text" ? "Modified Text" : "Initial Text");
  };
  return (
    <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/topImage.png")}
      style={styles.topImage}
      resizeMode="cover"
    >
      <Text style={styles.title}>Welcome To your team lobby</Text>
    </ImageBackground>
    <ImageBackground
    source={require("../../assets/images/Vector.png")}
    style={styles.contentSection}
    resizeMode="cover"
  >
   
      <View style={styles.iconTextContainer}>
      <TouchableOpacity onPress={toggleText}>
            <Icon name="pencil" size={24} color="white" />
          </TouchableOpacity>
        <Text style={styles.subtitle}>Team 1</Text>
      </View>
      <FlatList
        data={listData}
        renderItem={({ item }) => <ListItem number={item.number} avatar={item.avatar} name={item.name} />}
        keyExtractor={item => item.number.toString()}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Set Ready</Text>
      </TouchableOpacity>
    
    </ImageBackground>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentSection: {
    flex: 1,
    width: '100%', 
    backgroundColor: '#000',
    margin:"10px",
    paddingTop: 20, 
  },
  topImage: {
    width: '100%',
    height: 200, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    width:"80%",
    textAlign:"center"
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  subtitle: {
    color: 'white',
    marginLeft: 10,
    fontSize:18,
    fontWeight:"bold",
  },
  listItem: {
    flexDirection: 'row',
    width: '60%', 
    margin:10, 
    
    
  },
  itemText: {
    color: 'white',
    marginRight: 10,
    fontSize:16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal:15,
  },
  button: {
    backgroundColor: "#3DD598",
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    alignSelf:"center",
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Lobby
