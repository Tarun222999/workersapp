import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {Image} from 'expo-image'
import { ThemedText } from '@/components/ThemedText'
const Users = ({users}) => {
    
  return (
  
 <FlatList
        data={users}
        numColumns={3}
        renderItem={({item})=><UserCard user={item}/>}
        keyExtractor={(item)=>item.id.toString()}
        contentContainerStyle={styles.container}
    />
 
   
  )
}


const UserCard=({user})=>{
  
    return (
        <View style={styles.userContainer}>
 <View style={styles.categoryContainer}>
    <View style={styles.imageContainer}>
    <Image
                source={{ uri: user.profileImage }}
                style={styles.userImage}
            />
              <Image
                source={{ uri: user.countryImage }}
                style={styles.countryImage}
            />
    </View>
          
            <ThemedText style={styles.userTitle}>{user.name}</ThemedText>
        </View>
        </View>
    )
}
export default Users

const styles = StyleSheet.create({

   
    container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:250
    },
    userContainer:{
        width:'22%',
        margin:15,
        alignItems:'center',
        position:'relative'

    },
    imageContainer:{
        position:'relative',
        height:80,
        width:80
    },
    userImage:{
        width: '100%',
        height: '100%',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#ccc'
    },
    countryImage:{
        width:30,
        height:30,
        borderRadius:10,
        position:'absolute',
        top:-5,
        right:-5
    },

    userTitle:{

    }
})