export default function EmailInput(props) {
    return (
        <input
            type="email"
            value={props.value}
            onInput={(e) => props.onInput(e.target.value)}
        />
    );
}
