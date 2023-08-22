import React, {useState} from "react";
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function SignIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){
        if(email===''||password===''){
            return
        }
        
    }
 
    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/Logo.png')}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    placeholderTextColor="#F0F0F0"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    placeholderTextColor="#F0F0F0"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D1D2E'
    },
    logo:{
        width: '100%',
        height: 100,
        resizeMode: 'contain'
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center', 
        paddingVertical: 32,
        paddingHorizontal: 14
    },
    input:{
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 15,
        color: '#FFF'
    },
    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#3fffa3',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 20
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#101026',
    }
})
