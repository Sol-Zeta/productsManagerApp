import {StyleSheet} from 'react-native';
import {flex, fonts, colors, margins, shadows} from '../../../styles/common';
export const styles = StyleSheet.create({
    container: {},
    input: {},
    error_message:{
        fontSize: fonts.medium_text,
        fontWeight: '600',
        color: colors.error,
        marginTop: margins.xsmall_margin,
        paddingLeft: margins.xsmall_margin
    }
});
