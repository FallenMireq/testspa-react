export default function DatePicker(props) {
    return (
        <input
            type="date"
            value={props.value}
            onInput={(e) => props.onInput(e.target.value)}
        />
    );
}
