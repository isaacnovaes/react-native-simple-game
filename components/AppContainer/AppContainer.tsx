import { useAppSelector } from '../../store/hooks';
import StartGame from '../../screens/StartGame';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from '../../screens/GameScreen';

const AppContainer = () => {
    const userNumber = useAppSelector((state) => state.userNumber.userNumber);

    return (
        <LinearGradient style={styles.app} colors={['#4e0329', '#ddb52f']}>
            <ImageBackground
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={require('../../assets/images/app-background.png')}
                resizeMode='cover'
                style={styles.app}
                imageStyle={styles.imageBackground}
            >
                {userNumber === null ? <StartGame /> : <GameScreen />}
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.18,
    },
});

export default AppContainer;
