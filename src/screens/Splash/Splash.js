import React, { useEffect } from "react";
import { View, Image } from "react-native";
import routes from "../../utils/routes";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  const navigateTo = () => {

    setTimeout(function () {
      navigation.dispatch(StackActions.replace(routes.AdminSignUpView));
    }, 1500);

    // AsyncStorage.getItem("notFirst").then((notFirst) => {
    //   if (!notFirst) {
    //     AsyncStorage.setItem("notFirst", "true");
       
    //   } else {
    //     setTimeout(function () {
    //       navigation.dispatch(StackActions.replace(routes.login));
    //       // navigation.dispatch(
    //       //   StackActions.replace(routes.medicalrecords)
    //       // )
    //       // navigation.dispatch(
    //       //   StackActions.replace(routes.mainapp, { screen: routes.home })
    //       // );
    //     }, 3000);
    //   }
    // });
  };

  useEffect(() => {
    navigateTo();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/FaturedIcon.png")}
      />
    </View>
  );
};

export default Splash;
