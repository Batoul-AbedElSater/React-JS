export default function Pad(props){
    return(
        <button className="pad" style={{backgroundColor: props.color}}
        className={props.on ? "on" : undefined}
        >

        </button>

    )
}