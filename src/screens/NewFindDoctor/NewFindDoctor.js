import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import DoctorCard from "../../components/DoctorCard";
import SearchBox from "../../components/SearchBox";
import EnterButton from "../../components/EnterButton";
import axios from "axios";
import * as NavigationBar from "expo-navigation-bar";
import FAB from "../../components/FAB";
import TopArrow from "../../components/Icons/TopArrow";
import { PRIMARY } from "../../styles/colors";
import SearchIcon from "../../components/Icons/SearchIcon";

const solidBlue = "#1552b4";




export default function NewFindDoctor({ route }) {
    const { drSpecialties = "dentistry" } = route.params || {};
    const [searchkeyword, setKeyword] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);




    const buildUrl = () => {
        const verifiedDoctor = "true";
        let url = `https://medical-system-server.onrender.com/api/v1/users?role=doctor&verifiedDoctor=${verifiedDoctor}&page=${page}&keyword=${searchkeyword}&drSpecialties=${drSpecialties}`;
        return url;
    };


    const fetchDoctors = async () => {
        setLoading(true);
        try {
            const response = await axios.get(buildUrl());
            console.log(response)
            setDoctors(response.data.document);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchDoctors()
    }, [searchkeyword, drSpecialties]);

    return (
        <View style={{ padding: 20 }}>
            <FlatList
                data={doctors}
                keyExtractor={(item) => item._id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 38 }} />}
                ListEmptyComponent={() =>
                    <Text style={styles.endText}>✋ No More Doctors</Text>
                }
                ListHeaderComponent={
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginBottom: 25 }}>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center', borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 10, height: 50, width: '82%', paddingHorizontal: 16
                        }}>
                            <SearchIcon />
                            <TextInput
                                placeholder="Search Doctor"
                                value={searchkeyword}
                                onChangeText={(text) => setKeyword(text)}
                                style={{ marginLeft: 5 }}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={fetchDoctors}>
                            <EnterButton />
                        </TouchableOpacity>
                    </View>
                }
                renderItem={({ item }) => (
                    <DoctorCard
                        avatar={
                            item.profilePicture}
                        fullName={item.name}
                        specialization={item.drSpecialties}
                        fees={item.drSessionFees}
                        rating={item.rating}
                        id={item._id}
                    />
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    listHeader: {
        gap: 8,
        paddingTop: 8,
        paddingBottom: 24,
    },
    listHeaderFirstSection: {
        paddingHorizontal: 20,
        gap: 8,
        flexDirection: "row",
    },
    searchBox: {
        flexGrow: 1,
    },
    endText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
    },
    endText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22,
        marginTop: 100
    },
});


