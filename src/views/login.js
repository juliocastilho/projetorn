import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, 
         SafeAreaView, 
         TextInput, 
         TouchableOpacity,
         Text,  
         StyleSheet,
         Animated,
         Platform, 
         Keyboard,
         Alert,
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
    
    state = { nome:'' ,email:'' ,senha:'' ,confirmasenha:'' ,stageNew: false}

    signinOrSignup = () => {
        if( this.setState.stageNew){
            Alert.alert('Sucesso!', 'Criar conta!')
        } else {
           Alert.alert('Sucesso!', 'Logar')
         }
    }

    return(
        <KeyboardAvoidingView style={styles.backgoud} behavior={ Platform.OS === 'ios' ? 'padding' : null}>
        
         <SafeAreaView style={styles.containerLogo}> 
              <Animated.Image style={{width: logo.x , height:logo.y }}  source = {require('../../assets/img/logo.png')} />
          </SafeAreaView>
       
           <Animated.View  style={[styles.container, { opacity: opacity, transform: [{ translateY: offset.y }]}]}>
       
              <Text style={styles.subtite}> 
                  {this.state.stageNew ? 'Crie sua conta' : 'Informe seus dados'}
              </Text>
       
              {this.state.stageNew &&  
                  <TextInput
                     style={styles.input}
                     placeholder="Nome"
                     autoCorrect={false}
                     value={this.state.nome}
                     onChangeText={nome => this.setState({ nome })}
                    />
                }
               <TextInput
                 style={styles.input}
                 placeholder="Email"
                 autoCorrect={false}
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
                />

               <TextInput
                 style={styles.input}
                 placeholder="Senha"
                 autoCorrect={false}
                 value={this.state.senha}
                 secureTextEntry= {true}
                 onChangeText={senha => this.setState({ senha })}
                />

                {this.state.stageNew &&  
                 <TextInput
                     style={styles.input}
                     placeholder="confirme a senha"
                     autoCorrect={false}
                     value={this.state.confirmasenha}
                     secureTextEntry= {true}
                     onChangeText={confirmasenha => this.setState({ confirmasenha })}
                    /> 
                }

                <TouchableOpacity style={styles.btnSubmit} onPress={this.signinOrSignup}>
                 <Text style={styles.btnText}>
                     {this.state.stageNew ? 'Registar' : 'Entrar'}
                 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () =>  this.setState({ stageNew: !this.state.stageNew })}>
                 <Text style={styles.btnText}>
                     {this.state.stageNew ? 'Já possui conta ?' : 'Ainda não possui conta ?'}
                 </Text>
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
    subtite:{
        color: '#FFF',
        fontSize: 20,
        textAlign:'center',
        marginBottom: 10,
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
       borderRadius: 7,
    },
    btnText:{
       color: '#FFF',
       fontSize: 16,
       padding: 10
    },

})