import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.yellow,
        padding: 24,
        borderRadius: 8,
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.yellow,
        fontSize: 36,
        fontWeight: 'bold',
    },
});

const NumberContainer = (props: { number: number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.number}</Text>
        </View>
    );
};
export default NumberContainer;
