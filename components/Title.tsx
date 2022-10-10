import { StyleSheet, Text } from 'react-native';
import { Color } from '../constants/colors';

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'OpenSansBold',
        color: Color.white,
        borderWidth: 2,
        borderColor: Color.white,
        padding: 12,
        borderRadius: 5,
    },
});

const Title = (props: {
    title: string;
    style?: Record<string, string | number>;
}) => {
    return <Text style={[styles.title, props.style]}>{props.title}</Text>;
};
export default Title;
