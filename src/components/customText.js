import React from 'react'
import { Text,I18nManager } from "react-native";
import { TEXT_GREY ,GREY,DARK_RED,WHITE, PRIMARY} from '../styles/colors';


const chooseFontFaily = fontFamily => {
    switch (fontFamily) {
        case 'regular': {
            return 'Regular';
        }
        case 'medium': {
            return 'Medium' ;
        }
        case 'bold': {
            return 'Bold' ;
        }
        case 'extrabold': {
            return 'ExtraBold' ;
        }
        case 'extralight': {
            return 'ExtraLight' ;
        }
        case 'light': {
            return 'Light' ;
        }
        case 'semibold': {
            return 'SemiBold' ;
        }
        default:
            break;
    }
}

const chooseFontColor = (color) => {
    switch (color) {
        case "TEXT_GREY":
            return (TEXT_GREY)
            case "GREY":
                return (GREY)
                case "DARK_RED":
                    return (DARK_RED)
                    case "WHITE":
                    return (WHITE)
                    case "PRIMARY":
                        return (PRIMARY)
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