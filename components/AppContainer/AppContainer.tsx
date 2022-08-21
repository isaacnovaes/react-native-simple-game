import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { increment, incrementBy } from '../../store/counter/counter-slice';

const AppContainer = () => {
    const counter = useAppSelector((state) => state.counter.counter);
    const dispatch = useAppDispatch();

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>{counter}</Text>
            <StatusBar style='auto' />
            <Button title='increment' onPress={() => dispatch(increment())} />
            <Button
                title='increment by 10'
                onPress={() => dispatch(incrementBy(10))}
            />
        </View>
    );
};
export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
