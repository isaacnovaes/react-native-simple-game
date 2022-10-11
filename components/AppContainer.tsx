import { useAppSelector } from '../store/hooks';
import StartGame from '../screens/StartGame';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from '../screens/GameScreen';
import bgImage from '../assets/images/app-background.png';
import { Color } from '../constants/colors';
import GameOver from '../screens/GameOver';
import { useState } from 'react';

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

    const [isGameOver, setIsGameOver] = useState(false);

    const screen = isGameOver ? (
        <GameOver setIsGameOver={setIsGameOver} />
    ) : userNumber === null ? (
        <StartGame />
    ) : (
        <GameScreen setIsGameOver={setIsGameOver} />
    );

    return (
        <LinearGradient
            style={styles.app}
            colors={[Color.bordo500, Color.yellow]}
        >
            <ImageBackground
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                source={bgImage}
                resizeMode='cover'
                style={styles.app}
                imageStyle={styles.imageBackground}
            >
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
};

export default AppContainer;
