import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoctorCard from '../../components/DoctorCard';
import SearchBox from '../../components/SearchBox';
import EnterButton from '../../components/EnterButton';
import axios from 'axios';
import * as NavigationBar from 'expo-navigation-bar';
import FAB from '../../components/FAB';
import TopArrow from '../../components/Icons/TopArrow';

const solidBlue = '#1552b4';

axios.defaults.baseURL = 'https://medical-system-server.onrender.com/api/v1'

//route, navigation
//route.params ||
export default function FindDoctor({ }) {
    const { drSpecialties } = { drSpecialties: 'ear-nose-and-throat' };
    const [searchName, setSearchName] = useState('');
    const [page, setPage] = useState(1);
    const [doctors, setDoctors] = useState([]);
    const [showFAB, setShowFAB] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const flatListRef = useRef(null)


    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('white');
    }, [])

    const fetchDoctors = async (cb) => {
        try {
            const verifiedDoctor = 'pending'
            let endpoint = `/users?role=doctor&verifiedDoctor=${verifiedDoctor}&page=${page}`;
            if (searchName)
                endpoint += `&keyword=${searchName}`
            if (drSpecialties)
                endpoint += `&drSpecialties=${drSpecialties}`
            const res = await axios.get(endpoint);

            cb(res);

            if (res.data.document.length < 10)
                setShowLoading(false);

            console.log(res)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {

        fetchDoctors((res) => {
            setDoctors(res.data.document)
        });

    }, [searchName, drSpecialties]);

    useEffect(() => {
        if (page > 1) {
            fetchDoctors((res) => {
                setDoctors([...doctors, ...res.data.document])
            })
        }
    }, [page])


    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;

        if (offsetY > 100) {
            setShowFAB(true);
        } else if (offsetY === 0) {
            setShowFAB(false);
        }
    }


    return (
        <SafeAreaView >

            <FlatList
                style={{ height: '100%' }}
                ref={flatListRef}
                ListHeaderComponent={
                    <View style={styles.listHeader}>
                        <View style={styles.listHeaderFirstSection}>
                            <View style={styles.searchBox}>
                                <SearchBox setSearchName={setSearchName} />
                            </View>
                            <EnterButton />
                        </View>
                    </View>

                }
                data={doctors}
                keyExtractor={_id => _id}
                contentContainerStyle={{ gap: 16 }}
                ItemSeparatorComponent={() => <View style={{ height: 38 }} />}
                renderItem={
                    ({ item }) => <DoctorCard
                        avatar={'https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__'}
                        fullName={item.name}
                        specialization={item.drSpecialties}
                        fees={item.drSessionFees}
                        rating={item.rating}
                    />
                }
                ListFooterComponent={
                    () => {
                        return (
                            showLoading ?
                                <ActivityIndicator size={50} color={solidBlue} /> :
                                <Text style={styles.endText}>✋ No More Doctors</Text>
                        )
                    }
                }
                ListFooterComponentStyle={doctors.length === 0 ? { paddingTop: Dimensions.get('window').height / 3 } : { paddingVertical: 16 }}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                onEndReached={() => {
                    if (showLoading && doctors.length >= 10)
                        setPage((prevState) => {
                            return prevState + 1
                        })
                }}
                onEndReachedThreshold={0.3}
            />


            {showFAB && <FAB Icon={TopArrow} onPress={() => {
                flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
            }} />}

            <StatusBar style='dark' />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    listHeader: {
        gap: 8,
        paddingTop: 8,
        paddingBottom: 24
    },
    listHeaderFirstSection: {
        paddingHorizontal: 20,
        gap: 8,
        flexDirection: 'row',
    },
    searchBox: {
        flexGrow: 1
    },
    endText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
    }
})


{
    // import Menu from '../../components/Menu';

    /* 
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={['Available Today', 'Gender', 'Price', 'Placeholder1', 'Placeholder2', 'Placeholder3', 'Placeholder4']}
            keyExtractor={i => i}
            contentContainerStyle={{ gap: 16, padding: 16, }}
            renderItem={(title) => {
                return (
                    <Menu title={title.item} />
                )
            }}
        /> 
    */
}