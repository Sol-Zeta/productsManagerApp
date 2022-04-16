import {StyleSheet, Dimensions} from 'react-native';
import { flex, fonts, colors, margins } from '../../styles/common';

const { height: screenHeight } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cards_container: {
        ...flex.column_center_space_evenly,
        height: screenHeight*.65,
        marginHorizontal: '5%'
    },
    message_container: {
        ...flex.column_center,
        position: 'relative'
    },
    symbol: {
        ...fonts.main_title,
        fontFamily: 'arial',
        fontSize: 200,
        position: 'absolute',
        top: 25,
        opacity: 0.4
    },
    image: {
        height: 250,
        resizeMode: 'contain',
        marginBottom: margins.xlarge_margin
    },
    text: {
        ...fonts.main_title,
        fontSize: fonts.medium_text,
        color: colors.whiteDark,
        textAlign: 'center',
        marginBottom: margins.xsmall_margin,
    }
});