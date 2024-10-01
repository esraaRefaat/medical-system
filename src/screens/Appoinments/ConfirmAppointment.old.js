import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import DoctorCardWithExpandedRating from '../../components/DoctorCardWithExpandedRating'
import TouchableButton from '../../components/TouchableButton'
import ScheduleDate from '../../components/ScheduleDate'
import SelectPaymentMethod from '../../components/SelectPaymentMethod'

const ConfirmAppointment = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.section}>
                    <DoctorCardWithExpandedRating
                        avatar={'https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__'}
                        fullName={'Patric Ahoy'}
                        specialization={'Ear Nose and Throat Specialist'}
                        idr={'120.000'}
                        rating={'5'}
                    />
                </View>
                <View style={styles.section}>
                    <ScheduleDate />
                </View>
                <View style={styles.section}>
                    <SelectPaymentMethod />
                </View>
                <View style={[styles.section, styles.bottomSection]}>
                    <View style={styles.bottomDetails}>
                        <Text style={styles.lightFont}>Total</Text>
                        <Text style={styles.boldFont}>IDR {"200.000"}</Text>
                    </View>
                    <View style={styles.bottomAction}>
                        <TouchableButton otherStyle={{ width: '100%' }} onPress={() => { }} title={"Pay"} />
                    </View>
                </View>
            </View>

            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default ConfirmAppointment

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafb',
        gap: 12,
        height: '100%'

    },
    section: {
        backgroundColor: 'white',
        paddingVertical: 20,

    },
    bottomSection: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20
    },
    bottomDetails: {
        flexGrow: 1,
        gap: 4
    },
    bottomAction: {
        flexGrow: 1,
    },
    lightFont: {
        color: 'gray',
    },
    boldFont: {
        fontWeight: 'bold',
        fontSize: 16
    }
})