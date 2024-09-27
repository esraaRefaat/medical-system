import React from 'react'
import { Text, Platform ,I18nManager } from "react-native";
import { ORANGE, DARK_ORANGE, LIGHT_GRAY, DARK_RED, BLACK, SEMILIGHT_ORANGE, WHITE, GRAY, SEMI_GRAY, RED_TEXT, DARK_GRAY, DARK_WHITE } from '../styles/colors';


const chooseFontFaily = fontFamily => {
    switch (fontFamily) {
        case 'ultrathinitalic': {
            return Platform.OS === 'ios'
                ? 'SFProDisplay-UltraThinItalic'
                : 'SFPRODISPLAYULTRALIGHTITALIC';
        }
        case 'regular': {
            return Platform.OS === 'ios' ? 'SFProDisplay-Regular' : 'SFPRODISPLAYREGULAR';
        }
        case 'medium': {
            return Platform.OS === 'ios' ? 'SFProDisplay-Medium' : 'SFPRODISPLAYMEDIUM';
        }
        case 'blackitalic': {
            return Platform.OS === 'ios' ? 'SFProDisplay-BlackItalic' : 'SFPRODISPLAYBLACKITALIC';
        }
        case 'heavyitalic': {
            return Platform.OS === 'ios' ? 'SFProDisplay-HeavyItalic' : 'SFPRODISPLAYHEAVYITALIC';
        }
        case 'lightitalic': {
            return Platform.OS === 'ios' ? 'SFProDisplay-LightItalic' : 'SFPRODISPLAYLIGHTITALIC';
        }
        case 'semibolditalic': {
            return Platform.OS === 'ios'
                ? 'SFProDisplay-SemiboldItalic'
                : 'SFPRODISPLAYSEMIBOLDITALIC';
        }
        case 'thinitalic': {
            return Platform.OS === 'ios' ? 'SFProDisplay-ThinItalic' : 'SFPRODISPLAYTHINITALIC';
        }
        case 'bold': {
            return Platform.OS === 'ios' ? 'SFProDisplay-Bold' : 'SFPRODISPLAYBOLD';
        }
        default:
            break;
    }
}

const chooseFontColor = (color) => {
    switch (color) {
        case "orang":
            return (ORANGE)
        case "dark_orang":
            return (DARK_ORANGE)
        case "light_gray":
            return (LIGHT_GRAY)
        case "darkRed":
            return (DARK_RED)
        case "black":
            return (BLACK)
        case "semilightOrange":
            return (SEMILIGHT_ORANGE)
        case "white":
            return (WHITE)
        case "gray":
            return (GRAY)
        case "semigray":
            return (SEMI_GRAY)
        case "redtext":
            return (RED_TEXT)
        case "darkgray":
            return (DARK_GRAY)
        case "darkwhite":
            return (DARK_WHITE)
        default:
            break;
    }
}

const CustomText = ({ size, color, fontFamily, text, style, textDecorationLine = "none", numberOfLines = null }) => {
    return (
        <Text
            textDecorationLine={textDecorationLine}
            numberOfLines={numberOfLines}
          //  writingDirection={'auto'}
            style={[{
                fontSize: size,
                color: chooseFontColor(color),
                fontFamily: chooseFontFaily(fontFamily)

            }, style,{writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr'}]}>
            {text}
        </Text>
    )
}

export default CustomText;