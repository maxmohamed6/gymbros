import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'; 

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import Avatar from "./components/Avatar"
import InfoItem from "./components/InfoItem"

function Home({navigation}){

  return(
    <View style = {Styles.container}>
      <View style = {Styles.cabecalho}>
        <TouchableOpacity style = {Styles.icone} onPress = {()=>navigation.navigate('profile')}><Image style={Styles.icone} source={require('./img/perfilicone.png')} transition={1000}/></TouchableOpacity>
      </View>

      <View style = {Styles.conteudoPrincipal}>
        <Image style={Styles.logo} source={require('./img/gymbrosicon.png')} transition={1000}/>
        <Text style={Styles.textLogo}>GYM BRO'S</Text>
      </View>

      <View style = {Styles.rodape}>
        <TouchableOpacity style = {Styles.icone} onPress = {()=>navigation.navigate('profile')}><Image style={Styles.icone} source={require('./img/maisicone.png')} transition={1000}/></TouchableOpacity>
      </View>

    </View>
  )

}

function Menu({navigation}){

  return(
      <View style = {Styles.container}>
      <View style = {Styles.cabecalho}>
        <TouchableOpacity style = {Styles.icone} onPress = {()=>navigation.navigate('profile')}><Image style={Styles.icone} source={require('./img/perfilicone.png')} transition={1000}/></TouchableOpacity>
      </View>

      <View style = {Styles.conteudoPrincipal}>
        <Image style={Styles.logo} source={require('./img/gymbrosicon.png')} transition={1000}/>
        <Text style={Styles.textLogo}>GYM BRO'S</Text>
      </View>

      <View style = {Styles.rodape}>
        <TouchableOpacity style = {Styles.icone} onPress = {()=>navigation.navigate('profile')}><Image style={Styles.icone} source={require('./img/maisicone.png')} transition={1000}/></TouchableOpacity>
      </View>

    </View>
  )

}

function Profile({navigation}){

const user = {
    name: "Max Mohamed Freitas",
    telefone: "(+55)(16) 98124-9000",
    bio: "Malhando e crescendo...",
    peso: 90,
    altura: "1.82",
    idade: 22,
  }

  return(
      <View style = {Styles.container}>
        <View style = {Styles.cabecalho}>
          <TouchableOpacity style = {Styles.icone} onPress = {()=>navigation.goBack()}><Image style={Styles.icone} source={require('./img/voltaricone.png')} transition={1000}/></TouchableOpacity>
        </View>

        <View style = {Styles.conteudoPrincipalPerfil}>
          
            <Avatar 
              source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQGl-w6adchXitNyRj9CmiXYeNG_ea9guBg&s'}} 
              size = {100}/>
            <Text style = {Styles.name}>{user.name}</Text>
            <Text style = {Styles.bio}>{user.bio}</Text>

            <View style={Styles.hr}></View>

            <View style = {Styles.stats}>
          
            <InfoItem label = "Peso" value = {user.peso}/>
            <InfoItem label = "Altura" value = {user.altura}/>
            <InfoItem label = "Idade" value = {user.idade}/>

          </View>

          <View style = {Styles.details}>
          
            <InfoItem label = "Telefone" value = {user.telefone}/>
          
          </View>
          </View>

      </View>
  )

}

const Stack = createNativeStackNavigator();


export default function App() {

useFonts({'Inconsolata-Light': require('./assets/fonts/Inconsolata-Light.ttf')});
  
  return (
    
    <NavigationContainer>
    
      <Stack.Navigator initialRoute = "home">
        <Stack.Screen name = "home" component = {Home} options = {{headerShown: false}}/> 
        <Stack.Screen name = "menu" component = {Menu} /> 
        <Stack.Screen name = "profile" component = {Profile} options = {{headerShown: false}}/> 
      </Stack.Navigator>
    
    </NavigationContainer>

  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cabecalho: {
    marginTop: 10,
    width: 310,
    height: 40
  },

  conteudoPrincipal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  conteudoPrincipalPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -250,
    flex: 1
  },

  rodape: {
    marginBottom: 30,
    width: 310,
    alignItems: 'center',
    height: 40
  },

  button: {
    backgroundColor: '#00f',
    padding: 10,
    borderRadius: 5
  },

  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  logo: {
    alignItems: 'center',
    marginTop: 150,
    width: 150,
    height: 150
  },

  textLogo: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
    width: 150,
    height: 150,
    fontFamily: 'Inconsolata-Light',
  },

  icone: {
    width: 33,
    height: 33,
  },

  //aba perfil

  name:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFF',
  },
  bio:{
    fontSize: 14,
    color: '#FFF',
    marginTop: 7,
    gap: 20
  },
  stats:{
    flexDirection: 'row',
    justifyContent:  'space-around',
    marginTop: 20,
    marginBottom: 20,
    color: '#FFF',
    gap: 20
  },
  details:{
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFF',
    gap: 20
  },

  hr: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,       
    marginVertical: 10          
}

});

