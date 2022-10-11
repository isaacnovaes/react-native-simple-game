import { View } from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';

const GameOver = (props: {
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { setIsGameOver } = props;
    return (
        <View style={{ marginTop: 100 }}>
            <Card title='Game Over'>
                <PrimaryButton
                    text='Restart'
                    onPressButton={() => setIsGameOver(false)}
                />
            </Card>
        </View>
    );
};
export default GameOver;
