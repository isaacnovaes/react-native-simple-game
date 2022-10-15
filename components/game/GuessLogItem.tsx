import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../../constants/colors';

const styles = StyleSheet.create({
    item: {
        borderColor: Color.bordo800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        width: 300,
        marginVertical: 10,
        backgroundColor: Color.yellow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.7,
    },
    text: {
        fontFamily: 'OpenSansRegular',
    },
});

const GuessLogItem = (props: { roundNumber: number; guess: number }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>#{props.roundNumber}</Text>
            <Text
                style={styles.text}
            >{`Opponent's guess: ${props.guess}`}</Text>
        </View>
    );
};
export default GuessLogItem;
