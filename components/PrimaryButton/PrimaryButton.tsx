import { View, Text, Pressable, StyleSheet } from 'react-native';

interface PrimaryButtonProps {
    text: string;
    onPressButton: () => void;
    style?: Record<string, string | number>;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
    return (
        <View style={[styles.buttonStyle, props.style]}>
            <Pressable
                onPress={props.onPressButton}
                android_ripple={{
                    color: '#640233',
                }}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <Text style={styles.buttonText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#72063c',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 4,
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 8,
    },
    pressed: {
        opacity: 0.75,
    },
});

export default PrimaryButton;
