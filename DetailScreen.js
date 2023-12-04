// DetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';


const DetailsScreen = ({ navigation }) => {
  const myIcon = <Icon name="pencil" size={35} color="black" />;


  return (
    <View >
      <View>

        <View><Text>Published</Text>
        </View>

        <View>
          <Text>Drafts</Text>
        </View>

        <View>
          <Text>Scheduled</Text>
        </View>
      </View>

      <View style={styles.IconView}>
        
          <TouchableOpacity  style={styles.touch} onPress={() => navigation.navigate('CreatePost')}>
            {myIcon}
          </TouchableOpacity>

        
        
      </View>



    </View>

  );
};

export default DetailsScreen;





const styles = StyleSheet.create({

  IconView: {
    backgroundColor: 'orange',
    borderRadius: 100,
    width: 50,
    height: 50,
    marginVertical:450,
    marginLeft:300
  },

  icon: {

    alignItems: 'center',
    marginVertical: 0,
    height:10,
    width:10
    


  },

  touch:{
    
    borderRadius: 100,
    width: 40,
    height: 40,
    alignItems:'center',
    margin:5,
   

  },




})