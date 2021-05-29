import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, 
         SafeAreaView, 
         Image, 
         View, 
         TextInput, 
         TouchableOpacity,
         Text,  
         StyleSheet,
         Animated,
         Platform, 
         Keyboard,
} from 'react-native'


export default function login(){

    const [offset]  = useState (new Animated.ValueXY({x:0, y:95}));
    const [opacity] = useState (new Animated.Value(0));
    const [logo] =    useState (new Animated.ValueXY({x:270, y:200}));
    
    useEffect(() => {
    
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);
       
           Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20
              }),
              Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
              })
           ]).start();   
    }, []);


    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue:  150,
                duration: 190,
            }),
            Animated.timing(logo.y, {
                toValue:  150,
                duration: 190,
            }),
        ]).start();   
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue:  270,
                duration: 200,
            }),
            Animated.timing(logo.y, {
                toValue:  270,
                duration: 200,
            }),
        ]).start();
    }

    return(
        <KeyboardAvoidingView style={styles.backgoud} behavior={ Platform.OS === 'ios' ? 'padding' : null}>
        <SafeAreaView style={styles.containerLogo}> 
        <Animated.Image style={{width: logo.x , height:logo.y }}  source = {require('../../assets/img/logo.png')} />
       </SafeAreaView>

       <Animated.View style={[styles.container, { opacity: opacity, transform: [{ translateY: offset.y }]}]}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCorrect={false}
                onChangeText={() => {}}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={() => {}}
            />

            <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity >
                    <Text></Text>
            </TouchableOpacity>

       </Animated.View >

       </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({

    backgoud:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#191919'
    },

    containerLogo:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
    },
    container:{
       flex:1,
       alignItems: 'center',
       width: '90%',
    },
    input:{
       backgroundColor: '#FFF',
       width: '90%',
       marginBottom: 15,
       color: '#222',
       fontSize: 17,
       borderRadius: 7,
       padding: 10,
    },
    btnSubmit:{
       backgroundColor: '#35AAFF',
       width: '90%',
       height: 45,
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 7
    },
    btnText:{
       color: '#FFF',
       fontSize: 16,
    },

})