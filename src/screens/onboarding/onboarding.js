import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import routes from "../../utils/routes";
import styles from './styles';




const Onboarding = ({ navigation }) => {
  const swiperRef = useRef(null); 

  const handleNext = () => {
    swiperRef.current.scrollBy(1); 
  };

  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      renderPagination={renderPagination} 
    >
     
      <View style={styles.slide}>
        <Image source={require('../../assets/1.png')} style={styles.image} />
        <Text style={styles.title}>Welcome !</Text>
        <Text style={styles.text}>
        We will assist you in efficiently and easily{'\n'}scheduling appointments with doctors.{'\n'}Let's get started!
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace(routes.mainapp, { screen: routes.home })}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleNext}>
            <Text style={styles.buttonPrimaryText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.slide}>
        <Image source={require('../../assets/2.png')} style={styles.image} />
        <Text style={styles.title}>Choose Specialization</Text>
        <Text style={styles.text}>
        Select the medical specialization you need so we can tailor your experience.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.replace(routes.mainapp, { screen: routes.home })}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary} onPress={handleNext}>
            <Text style={styles.buttonPrimaryText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.slide}>
        <Image source={require('../../assets/3.png')} style={styles.image} />
        <Text style={styles.title}>Schedule Your First Appointment</Text>
        <Text style={styles.text}>
          Choose a suitable time and date to meet your preferred doctor. Begin your journey to better{'\n'}health!
        </Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStartedPrimary} onPress={() => navigation.replace(routes.mainapp, { screen: routes.home })}>
          <Text style={styles.buttonStartedPrimaryText}>Get Started!</Text>
        </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};


const renderPagination = (index, total) => {
  const dashArray = Array.from({ length: total }).map((_, i) => {
    return (
      <View
        key={i}
        style={[styles.dash, i === index ? styles.activeDash : styles.inactiveDash]}
      />
    );
  });

  return <View style={styles.paginationContainer}>{dashArray}</View>;
};



export default Onboarding;
