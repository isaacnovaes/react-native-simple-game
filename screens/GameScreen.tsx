import { Text, View, StyleSheet } from 'react-native';
import { useAppSelector } from '../store/hooks';

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        marginTop: 100,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
    },
});

const GameScreen = () => {
    const userNumber = useAppSelector((state) => state.userNumber.userNumber);
    return (
        <View style={styles.gameScreen}>
            <Text style={{ marginTop: 200 }}>{userNumber}</Text>
            <View>
                <Text>Higher or lower</Text>
            </View>
            <View>
                <Text>Log rounds</Text>
            </View>
        </View>
    );
};

export default GameScreen;
