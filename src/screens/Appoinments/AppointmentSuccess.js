import { StyleSheet, View, Image, Text, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import SquareCardWithRoundedCorners from './../../components/SquareCardWithRoundedCorners'
import { SafeAreaView } from 'react-native-safe-area-context';
import checkDoubleFill from './../../assets/check-double-fill.png'
import PaymentSuccessCard from '../../components/PaymentSuccessCard';
import TouchableButton from '../../components/TouchableButton';
import Headers from '../../components/Headers';
import DoctorOverview from '../../components/DoctorOverview';
import FinalAppointmentInfo from '../../components/FinalAppointmentInfo';

const solidBlue = '#1552b4';



const AppointmentSuccess = () => {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(solidBlue);
    }, [])

    return (
        <SafeAreaView >

            <View style={styles.background}>
                <View style={styles.foreground}>
                    <SquareCardWithRoundedCorners image={<Image source={checkDoubleFill} />} />
                    <PaymentSuccessCard>
                        <View style={styles.cardContent}  >
                            <Headers />
                            <DoctorOverview
                                avatar={'https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__'}
                                fullName={'Dr. Stone Gaze'}
                                specialization={'Ear. Nose & Throat specialist'}
                            />
                            <FinalAppointmentInfo date={'Wednesday, 10 Jan 2024, 11:00'} />
                        </View>

                        <TouchableButton title='Back to home' onPress={() => { }} />
                    </PaymentSuccessCard>
                </View>
            </View>
            <StatusBar backgroundColor={solidBlue} style='light' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: solidBlue,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    foreground: {
        width: '90%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cardContent: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        padding: 20,
        gap: 38
    },
    headers: {
        gap: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    },
    subTitle: {
        color: 'gray',
        textAlign: 'center',

    }
})

export default AppointmentSuccess

//<Image source={} />