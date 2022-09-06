import { useAppSelector } from '../store/hooks';
import StartGame from '../screens/StartGame';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from '../screens/GameScreen';
import bgImage from '../assets/images/app-background.png';
import colors from '../constants/colors';

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.18,
    },
});

const AppContainer = () => {
    const userNumber = useAppSelector((state) => state.userNumber.userNumber);

    return (
        <LinearGradient
            style={styles.app}
            colors={[colors.bordo500, colors.yellow]}
        >
            <ImageBackground
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={bgImage}
                resizeMode='cover'
                style={styles.app}
                imageStyle={styles.imageBackground}
            >
                {userNumber === null ? <StartGame /> : <GameScreen />}
            </ImageBackground>
        </LinearGradient>
    );
};

export default AppContainer;
