import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import routes from '../../utils/routes.js';

const SettingScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: routes.login }],
        });
      };



    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Settings</Text>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle edit profile info */ }}>
                <Ionicons name="person-circle-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Edit Profile Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle change password */ }}>
                <Ionicons name="key-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle delete account */ }}>
                <Ionicons name="trash-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Ionicons name="log-out-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 12,
        marginVertical: 8,
        borderRadius: 8,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    buttonText: {
        marginLeft: 12,
        fontSize: 16,
    },
});

export default SettingScreen;
