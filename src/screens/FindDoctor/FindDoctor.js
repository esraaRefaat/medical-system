import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoctorCard from '../../components/DoctorCard';
import SearchBox from '../../components/SearchBox';
import FilterButton from '../../components/FilterButton';
import Menu from '../../components/Menu';


export default function FindDoctor() {
    const [searchName, setSearchName] = useState('');
    return (
        <SafeAreaView>

            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <View style={styles.listHeader}>
                            <View style={styles.listHeaderFirstSection}>
                                <View style={styles.searchBox}>
                                    <SearchBox searchName={searchName} setSearchName={setSearchName} />
                                </View>
                                <FilterButton />
                            </View>
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
                        </View>
                    )
                }}
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                keyExtractor={i => i}
                contentContainerStyle={{ gap: 16 }}
                ItemSeparatorComponent={() => <View style={{ height: 38 }} />}
                renderItem={
                    () => <DoctorCard
                        avatar={'https://s3-alpha-sig.figma.com/img/78ba/f237/b32634d9f131723a21fb54a51b0dc114?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L8xYoPM28s5uBmO-rNZGuZ37lV2WltP0Jgc3bqWKevJ6gaJOAPMafIzWDVMfkJfY-jOi7H-JaDLufs9-pRmJEw2hjmdJk0h-mUbsahCez9GvDbjG3fcbqmOtm~ogOxnd6gEVybUqtTinrN13H1ToQ-KWTkCj64hJF2OnO1Jwk6Faa8GJuEJJO2RveyzGQYa0kQMeW-~rFV8FTDCF1w9dlOjFI3~cz2Wv-vf50nU4KLyBn83FAxembCH85Dcck1sNu7uvYViutvixrTxCZ2aOIyKRSZCEm2sO-eS4-4P2sOaL8kO3M5N-grbq5~~91I9DhLO60G0Sr3zpFNVaaITlfw__'}
                        fullName={'Patric Ahoy'}
                        specialization={'Ear Nose and Throat Specialist'}
                        idr={'120.000'}
                        rating={'4.5'}
                    />
                }
            />


            <StatusBar style='dark' />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    listHeader: {
        gap: 8
    },
    listHeaderFirstSection: {
        paddingHorizontal: 20,
        gap: 8,
        flexDirection: 'row',
    },
    searchBox: {
        flexGrow: 1
    }
})