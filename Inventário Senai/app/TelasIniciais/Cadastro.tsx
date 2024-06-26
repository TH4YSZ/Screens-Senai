import { View, StyleSheet, ScrollView } from 'react-native';
import Header from '@components/Header';
import Input from '@components/Input';
import LinkBtn from '@components/LinkBtn';
import { useColor } from '@temas/Temas';



function Cadastro(){
    const cores = useColor()
    return(
        <ScrollView style={styles.container}>
            <Header titulo="Cadastre-se" cor={cores.cadastroHeader}/>
            <View style={styles.form}>
                <Input label="Nome" placeholder={"Insira seu nome:"} />
                <Input label="Sobrenome" placeholder={"Insira seu sobrenome:"} />
                <Input label="E-mail" placeholder={"Insira seu email:"}/>
                <Input label="Telefone" placeholder={"Insira seu telefone:"}/>
                <Input label="Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                <Input label="Confirmar Senha" placeholder={"Insira sua senha:"} secureTextEntry={true} />
                <LinkBtn title="Cadastre-se" href="/TelasIniciais/Login"/>
                
                           
            </View>
        </ScrollView>
    )
}
const cores = useColor()
const styles = StyleSheet.create({
    
    form:{
        height: '100%',
        marginVertical: 45,
        paddingHorizontal: 20,
        width: "100%"
    },
    container: {
        backgroundColor: cores.bgPrimary,
        flex: 1
    },
})
export default Cadastro