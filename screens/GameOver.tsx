import { Image, StyleSheet, View, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { Color } from '../constants/colors';
import { getGameOverData } from '../store/userNumber/userNumber-slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Color.bordo800,
    },
    summaryContainer: {
        width: '80%',
    },
    summaryText: {
        fontFamily: 'OpenSansRegular',
        color: Color.white,
        fontSize: 18,
        textAlign: 'center',
    },
    roundsText: {
        fontFamily: 'OpenSansBold',
        color: Color.bordo700,
    },
    guessText: { fontFamily: 'OpenSansBold', color: Color.bordo700 },
});

const GameOver = (props: {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { setIsGameOver } = props;
    const dispatch = useAppDispatch();

    const gameOverData = useAppSelector(
        (state) => state.userNumber.gameOverData
    );

    const onStartNewGame = () => {
        setIsGameOver(false);
        dispatch(
            getGameOverData({
                number: null,
                rounds: null,
            })
        );
    };

    return (
        <View style={styles.container}>
            {
                <Image
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    source={require('../assets/success.png')}
                    style={styles.image}
                />
            }
            <PrimaryButton
                text='Start New Game'
                onPressButton={onStartNewGame}
                style={{ width: 150, marginVertical: 30, padding: 5 }}
                textStyle={{ fontSize: 18 }}
            />
            <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>
                    Your phone needed{' '}
                    <Text style={styles.roundsText}>{gameOverData.rounds}</Text>{' '}
                    rounds to guess the number{' '}
                    <Text style={styles.guessText}>{gameOverData.number}</Text>
                </Text>
            </View>
        </View>
    );
};
export default GameOver;
