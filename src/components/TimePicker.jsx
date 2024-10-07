import { StyleSheet } from 'react-native';
import MaskInput from 'react-native-mask-input';

const TimePicker = ({ time, setTime }) => {

    return (
        <MaskInput
            style={styles.input}
            value={time}
            placeholder='00:00'
            onChangeText={(masked) => {
                setTime(masked);
            }}
            maxLength={5}
            mask={[/^([0-1]?)/, /[0-9]|2[0-3]/, ':', /(3|0)/, /0$/]}

        />
    );
}

export default TimePicker;

const styles = StyleSheet.create({
    input: {
        fontSize: 24
    }
})