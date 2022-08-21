import AppContainer from './components/AppContainer/AppContainer';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}
