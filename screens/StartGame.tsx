import { StyleSheet, TextInput, View, Alert, Text } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { useAppDispatch } from '../store/hooks';
import { getUserNumber } from '../store/userNumber/userNumber-slice';
import { Color } from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 100,
        textAlign: 'center',
    },
    textInput: {
        textAlign: 'center',
        width: 100,
        height: 50,
        fontSize: 32,
        borderBottomColor: Color.yellow,
        borderBottomWidth: 2,
        color: Color.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
    },
    labelText: {
        color: Color.yellow,
        fontFamily: 'OpenSansBold',
        fontSize: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
});

const StartGame = () => {
    const [numberInput, setNumberInput] = useState('');
    const dispatch = useAppDispatch();
    return (
        <View style={styles.rootContainer}>
            <Title title='Guess My Number' style={styles.title} />
            <Card>
                <Text style={styles.labelText}>Enter a number</Text>
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
            </Card>
        </View>
    );
};

export default StartGame;
