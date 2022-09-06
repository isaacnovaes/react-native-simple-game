import { StyleSheet, TextInput, View, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton/PrimaryButton';
import { useAppDispatch } from '../store/hooks';
import { getUserNumber } from '../store/userNumber/userNumber-slice';

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#3b021f',
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8,
    },
    textInput: {
        textAlign: 'center',
        width: 100,
        height: 50,
        fontSize: 32,
        borderBottomColor: '#DDB52F',
        borderBottomWidth: 2,
        color: '#DDB52F',
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
});

const StartGame = () => {
    const [numberInput, setNumberInput] = useState('');
    const dispatch = useAppDispatch();
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                keyboardType='number-pad'
                value={numberInput}
                maxLength={2}
                onChangeText={(e) => setNumberInput(e)}
            />
            <View style={styles.buttonsContainer}>
                <PrimaryButton
                    onPressButton={() => setNumberInput('')}
                    text='Reset'
                />
                <PrimaryButton
                    onPressButton={() => {
                        const enteredNumber = +numberInput;
                        if (enteredNumber <= 0 || enteredNumber > 99) {
                            Alert.alert(
                                'Invalid number',
                                'Number has to be between 1 and 99',
                                [
                                    {
                                        text: 'Ok',
                                        style: 'destructive',
                                    },
                                ]
                            );
                            return;
                        }

                        dispatch(getUserNumber(+numberInput));
                    }}
                    text='Confirm'
                />
            </View>
        </View>
    );
};

export default StartGame;
