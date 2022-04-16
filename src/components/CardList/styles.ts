import {StyleSheet, Dimensions} from 'react-native';
import { flex } from '../../styles/common';

const { height: screenHeight } = Dimensions.get('window')

export const styles = StyleSheet.create({
    cards_container: {
        ...flex.column_center_space_evenly,
        height: screenHeight*.6,
        backgroundColor: 'pink',
        marginHorizontal: '3%'
    }
});