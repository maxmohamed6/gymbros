import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from './Avatar'

const InfoItem = ({ label, value}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.labelContainer}>{label}</Text>
      <Text style = {styles.valueContainer}>{value}</Text>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
  },
  labelContainer: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  valueContainer: {
    color: '#FFF'
  }
})

export default InfoItem;