import { StyleSheet } from 'react-native'
import React from 'react'
import Star from './Icons/Star';
import EmptyStarIcon from './Icons/EmptyStarIcon';
import HalfStar from './Icons/HalfStar';

const RatingBuilder = ({ rating }) => {
    let ratingNumber = Number.parseFloat(rating);
    return (
        <>
            {
                ([1, 2, 3, 4, 5]).map((val) => {
                    if (ratingNumber >= 1) {
                        ratingNumber--;
                        return (
                            <Star key={val} />
                        )
                    }
                    else if (ratingNumber == 0.5) {
                        ratingNumber -= 0.5;
                        return (
                            <HalfStar />
                        )
                    }
                    else {
                        return (
                            <EmptyStarIcon />
                        )
                    }
                })
            }
        </>
    )
}

export default RatingBuilder

const styles = StyleSheet.create({})