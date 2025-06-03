import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from "./Avatar"
import InfoItem from "./InfoItem"

const Profile = () => {

  const user = {
    name: "Max Mohamed Freitas",
    telefone: "(+55)(16) 98124-9000",
    bio: "Malhando e crescendo...",
    peso: 90,
    altura: "1.82",
    idade: 22,
  }

  return (
    <View style = {styles.container}>

      <View style = {styles.header}>
        <Avatar 
          source = {{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F2P5QhZBOfNhz6Dsv6nfDQL&psig=AOvVaw2ENMNYxapd9O0IwCCTnNpS&ust=1747747208251000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDr4uPPr40DFQAAAAAdAAAAABAE'}} 
          size = {50}
        />
        <Text style = {styles.name}>{user.name}</Text>
        <Text style = {styles.bio}>{user.bio}</Text>
      </View>

      <View style = {styles.stats}>
      
        <InfoItem label = "Peso" value = {user.peso}/>
        <InfoItem label = "Altura" value = {user.altura}/>
        <InfoItem label = "Idade" value = {user.idade}/>

      </View>

      <View style = {styles.details}>
      
        <InfoItem label = "Telefone" value = {user.telefone}/>
      
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15
  },
  header:{
    alignItems: 'center',
    marginBottom: 20,

  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio:{
    fontSize: 14,
    color: '#666',
    marginTop: 5
  },
  stats:{
    flexDirection: 'row',
    justifyContent:  'space-around',
    marginBottom: 20,
  },
  details:{
    flexDirection: 'column',
    alignItems: 'center'
  }
})