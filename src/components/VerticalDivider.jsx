
import React from 'react';
import { View, StyleSheet } from 'react-native';

const VerticalDivider = ({ height = '100%', width = 1, color = '#000' }) => {
    return (
        <View style={[styles.divider, { height, width, backgroundColor: color }]} />
    );
};

const styles = StyleSheet.create({
    divider: {
    },
});

export default VerticalDivider;
