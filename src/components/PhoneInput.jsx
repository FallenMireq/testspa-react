import { IMaskInput } from 'react-imask';

export default function PhoneInput(props) {
    return (
        <IMaskInput
            mask="+{7}(000)000-00-00"
            value={(props.value || '').replace(/^\+/, '')}
            unmask={true}
            onAccept={(value) => props.onInput('+' + value)}
        />
    );

    // return (
    //     <input
    //         type="text"
    //         value={props.value}
    //         onInput={(e) => props.onInput(e.target.value)}
    //     />
    // );
}
