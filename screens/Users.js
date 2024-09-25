import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View,Text, Button } from 'react-native';
import routes from '../utils/routes';

const Users = () => {
    const [users,setUsers]=useState(null)
    const {navigate}=useNavigation()
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(res=>res.json())
        // .then((data)=>setUsers(data))
    },[])
    if (!users) return <Text>No Data</Text>
    return (
        <View>
            <Text>Users</Text>
            {users?.map(user=><View key={user.id}>
                <Text >{user.name} , user name: {user.username} </Text>
                <Button onPress={()=>navigate(routes.userDetails,{id:user.id})} title='See More'></Button>
                </View>)}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Users;
