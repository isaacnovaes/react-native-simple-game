import { StyleSheet, View, Text } from 'react-native';
import { Color } from '../constants/colors';
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        width: '90%',
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: Color.bordo800,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8,
    },
    title: {
        color: Color.white,
        fontSize: 18,
        marginBottom: 15,
        fontFamily: 'OpenSansBold',
    },
});

const Card = (props: { children: React.ReactNode; title?: string }) => {
    return (
        <View style={styles.card}>
            {props.title ? (
                <Text style={styles.title}>{props.title}</Text>
            ) : null}
            {props.children}
        </View>
    );
};
export default Card;
