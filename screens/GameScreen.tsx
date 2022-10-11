import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUserNumber } from '../store/userNumber/userNumber-slice';
import Card from '../components/Card';

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

let MIN = 1;
let MAX = 100;

const generateRandomBetween = (
    min: number,
    max: number,
    exclude: number | null
): number => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = (props: {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const userNumber = useAppSelector((state) => state.userNumber.userNumber);
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const dispatch = useAppDispatch();
    const { setIsGameOver } = props;

    const nextGuessHandler = (direction: 'lower' | 'greater') => {
        if (
            (direction === 'lower' &&
                userNumber !== null &&
                currentGuess < userNumber) ||
            (direction === 'greater' &&
                userNumber !== null &&
                currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", "You know that it's wrong...", [
                {
                    text: 'Sorry!',
                    style: 'cancel',
                },
            ]);
            return;
        }
        if (direction === 'lower') {
            MAX = currentGuess;
        } else {
            MIN = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(MIN, MAX, currentGuess);
        setCurrentGuess(newRandomNumber);
    };

    useEffect(() => {
        if (currentGuess === userNumber) {
            dispatch(getUserNumber(null));
            setIsGameOver(true);
        }
    }, [currentGuess, dispatch, setIsGameOver, userNumber]);

    return (
        <View style={styles.gameScreen}>
            <Title title="Opponent's Guess" />
            <View>
                <NumberContainer number={currentGuess} />
            </View>
            <Card title=' Higher or lower?'>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton
                        text='+'
                        onPressButton={() => nextGuessHandler('greater')}
                    />
                    <PrimaryButton
                        text='-'
                        onPressButton={() => nextGuessHandler('lower')}
                    />
                </View>
            </Card>
        </View>
    );
};

export default GameScreen;
