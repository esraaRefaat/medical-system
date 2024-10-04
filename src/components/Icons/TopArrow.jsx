
import { Svg, Path } from 'react-native-svg';
import React from 'react'

const TopArrow = ({ color }) => {
    return (
        <Svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17 15L12 10L7 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export default TopArrow

