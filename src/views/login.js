import React from 'react'
import { KeyboardAvoidingView, 
         SafeAreaView, 
         Image, 
         View, 
         TextInput, 
         TouchableOpacity,
         Text,  
         StyleSheet 
} from 'react-native'


export default function login(){


    return(
        <KeyboardAvoidingView style={styles.backgoud}>
        <SafeAreaView style={styles.containerLogo}> 
        <Image source = {require('../../assets/img/logo.png')} />
       </SafeAreaView>

       <View style={styles.container}>
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

       </View>

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