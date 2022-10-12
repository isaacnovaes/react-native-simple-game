import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        OpenSansRegular: require('./assets/fonts/OpenSans-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}
