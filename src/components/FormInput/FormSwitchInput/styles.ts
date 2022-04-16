import {StyleSheet} from 'react-native';
import {flex, fonts, colors, margins, shadows} from '../../../styles/common';
export const styles = StyleSheet.create({
    container: {
        ...flex.column_center,
        justifyContent: 'center'
    },
    input: {},
    text: {
        fontSize: fonts.medium_text,
        textTransform: 'uppercase', 
        fontWeight: '800',
        color: colors.whiteDark 
    },
    switch_container: {
        ...flex.row_space_evenly,
        alignItems: 'center',
        width: '100%'
    }
});