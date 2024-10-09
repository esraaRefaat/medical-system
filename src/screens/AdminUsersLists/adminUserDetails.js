// AdminUserDetails.jsx

import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  ActivityIndicator, 
  Dimensions 
} from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdminUserDetails = () => {
  const route = useRoute();
  const { id } = route.params; // Assuming you pass 'id' when navigating

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(`https://medical-system-server.onrender.com/api/v1/users/${id}`);
        setUserData(response.data.document[0]);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#1552b4" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No user data available.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: userData.profilePicture }} 
          style={styles.profileImage} 
        />
        <Text style={styles.nameText}>{userData.name}</Text>
        <Text style={styles.emailText}>{userData.email}</Text>
      </View>

      {/* Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailTitle}>Role</Text>
        <Text style={styles.detailText}>{userData.role}</Text>

        <Text style={styles.detailTitle}>Verified Doctor: {userData.verifiedDoctor}</Text>

        {userData.drBio&&<Text style={styles.detailTitle}>Bio</Text>}
        {userData.drBio&&<Text style={styles.detailText}>{userData.drBio}</Text>}

        {userData.drLocation&&<Text style={styles.detailTitle}>Location</Text>}
        {userData.drLocation&&<Text style={styles.detailText}>{userData.drLocation}</Text>}

        {userData.drSessionFees&&<Text style={styles.detailTitle}>Session Fees</Text>}
        {userData.drSessionFees&&<Text style={styles.detailText}>${userData.drSessionFees}</Text>}

        {userData.drSpecialties&&<Text style={styles.detailTitle}>Specialties</Text>}
        {userData.drSpecialties&&<Text style={styles.detailText}>{userData.drSpecialties}</Text>}

        {userData.drWorkingHours&&<Text style={styles.detailTitle}>Working Hours</Text>}
        {userData.drWorkingHours&&<Text style={styles.detailText}>{userData.drWorkingHours}</Text>}

        <Text style={styles.detailTitle}>Created At</Text>
        <Text style={styles.detailText}>{new Date(userData.createdAt).toLocaleString()}</Text>

        <Text style={styles.detailTitle}>Updated At</Text>
        <Text style={styles.detailText}>{new Date(userData.updatedAt).toLocaleString()}</Text>
      </View>

      {/* Verifying Documents Section */}
      <View style={styles.docsSection}>
        <Text style={styles.sectionTitle}>Verifying Documents</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.docsContainer}
        >
          {userData.verifyingDocs && userData.verifyingDocs.length > 0 ? (
            userData.verifyingDocs.slice(0, 10).map((docUrl, index) => (
              <Image 
                key={index} 
                source={{ uri: docUrl }} 
                style={styles.docImage} 
              />
            ))
          ) : (
            <Text style={styles.noDocsText}>No verifying documents available.</Text>
          )}
        </ScrollView>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: 'gray',
  },
  detailsSection: {
    marginBottom: 30,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  detailText: {
    fontSize: 16,
    marginTop: 5,
  },
  docsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  docsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  docImage: {
    width: windowWidth * 0.6,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  noDocsText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AdminUserDetails;
