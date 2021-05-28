import React, { useState, useEffect} from 'react'
import {
KeyboardAvoidingView,
TextInput,
TouchableOpacity,
Text,
StyleSheet,
Animated,
Keyboard,
SafeAreaView } from 'react-native'

export default function login(){

    const [offset] = useState (new Animated.ValueXY({x:0, y:95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] =    useState(new Animated.Value({x:130, y:155}));

    useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboarDidHideListener  = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

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
    });
    


    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 55,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 65,
                duration: 100,
            }),
        ])
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 130,
                duration: 100,
            }),
            Animated.timing(logo.y, {
                toValue: 155,
                duration: 100,
            }),
        ]).start();
    }



    return(
        <KeyboardAvoidingView style={styles.backgoud}>
            <SafeAreaView style={styles.containerLogo}>
                <Animated.Image
                  style={{
                      width: logo.x,
                      height:logo.y,
                    }}
                    source= { require('../../assets/img/logo.png')}
                />
            </SafeAreaView>
             
            <Animated.View style={[styles.container, { opacity: opacity, transform:[{ translateY }]}]} >


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


                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>

            </Animated.View>
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
        justifyContent: 'center'
     },
     container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
     },
     input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
     },
     btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: '45',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7

     }

})