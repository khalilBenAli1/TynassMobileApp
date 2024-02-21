import React, { useState ,useRef} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from "react-native";

const CodeRoom = () => {
    const [code, setCode] = useState(["", "", "", "", ""]); 

    const inputRefs = useRef(code.map(() => React.createRef()));

    const handleCodeInput = (text, index) => {
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);

      if (text && index < code.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }

      if (!text && index > 0) {
        inputRefs.current[index - 1].current.focus();
      }
    };
    return (
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
      >
        <Text style={styles.title}>Treasure Hunt Experience</Text>
        <Image
          source={require("../../assets/images/bajoreux_pirate_wallpaper_png_for_mobile_application_b36f88c8-d22a-4a34-b634-467a43a5bd11 1.png")}
          style={styles.image}
        />
        <Text style={styles.codeRoomText}>Enter Your Code Room</Text>
        
        <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={inputRefs.current[index]} // Attach the ref
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleCodeInput(text, index)}
            value={digit}
          />
        ))}
      </View>
  
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#161615",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    color: "#D4A75B",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginVertical: 50,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginVertical: 10,
    color: "white",
  },
  iconText: {
    marginLeft: 10,
    textAlign: "left",
    fontSize: 18,
    color: "white",
  },
  pointedBorder: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#D4A75B",
    padding: 20,
    borderRadius: 5,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  flagIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 8,
  },
  dashedLine: {
    height: 0,
    width: "95%",
    borderWidth: 1,
    borderColor: "white",
    borderStyle: "dashed",
    borderRadius: 1,
    marginVertical: 10,
  },
  checkIcon: {
    marginLeft: 'auto',
  },
  codeRoomText: {
    fontSize: 24,
    color: "white",
    fontWeight:"bold",
    marginVertical: 20,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 50, 
  },
  codeInput: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius:"10%", 
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default CodeRoom;
