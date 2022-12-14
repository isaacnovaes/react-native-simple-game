import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Color } from '../constants/colors';

interface PrimaryButtonProps {
    text: string;
    onPressButton?: () => void;
    style?: Record<string, string | number>;
    textStyle?: Record<string, string | number>;
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: Color.bordo700,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 4,
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'OpenSansRegular',
        paddingVertical: 8,
    },
    pressed: {
        opacity: 0.75,
    },
});

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <View style={[styles.buttonStyle, props.style]}>
            <Pressable
                onPress={props.onPressButton}
                android_ripple={{
                    color: Color.bordo600,
                }}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Text style={[styles.buttonText, props.textStyle]}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;
