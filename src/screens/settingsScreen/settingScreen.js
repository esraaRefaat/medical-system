import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import routes from '../../utils/routes.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWithTokenAction } from '../../redux/store/slices/deleteWithTokenSlice.js';

const SettingScreen = () => {
    const navigation = useNavigation();
    const { user } = useSelector((state) => state.auth);
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        navigation.reset({
          index: 0,
          routes: [{ name: routes.login }],
        });
      };
      const handleEditInfo = () => {
        navigation.navigate(routes.EditProfileInfo)
      };

      const onDelete = () => {
        setModalVisible(true); // Show the modal
      };
    

const confirmDelete = async () => {
    try {
        const token = user.token; // Get your token from your auth state or context
        const url = `https://medical-system-server.onrender.com/api/v1/users/`;
        
        console.log(url, token);
        
        const resultAction = await dispatch(deleteWithTokenAction({ token, url }));
        
        if (deleteWithTokenAction.fulfilled.match(resultAction)) {
            console.log("Account deleted successfully");
            navigation.popToTop(); // Go back to the top of the stack
            navigation.navigate(routes.signup);
        } else {
            console.error("Error deleting account:", resultAction.error);
        }
    } catch (error) {
        console.error("Unexpected error deleting account:", error);
    } finally {
        setModalVisible(false); // Close the modal
    }
};







    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Settings</Text>
            <TouchableOpacity style={styles.button} onPress={handleEditInfo}>
                <Ionicons name="person-circle-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Edit Profile Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle change password */ }}>
                <Ionicons name="key-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onDelete}>
                <Ionicons name="trash-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Ionicons name="log-out-outline" size={24} color="black" />
                <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>Are you sure you want to delete your Account?</Text>
            <View style={styles.buttonContainerModal}>
              <Pressable style={[styles.buttonModal, styles.confirmButton]} onPress={confirmDelete}>
                <Text style={styles.buttonTextModal}>Yes</Text>
              </Pressable>
              <Pressable style={[styles.buttonModal, styles.cancelButton]} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonTextModal}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

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
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      modalContent: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
      },
      modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
      },
      modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
      },
      buttonContainerModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      },
      buttonModal: {
        padding: 10,
        borderRadius: 5,
        width: "45%",
      },
      confirmButton: {
        backgroundColor: "red",
      },
      cancelButton: {
        backgroundColor: "gray",
      },
      buttonTextModal: {
        color: "white",
        textAlign: "center",
      },
});

export default SettingScreen;
