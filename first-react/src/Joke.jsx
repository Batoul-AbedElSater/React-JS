export default function Joke(props){
    return(
        <>
           {props.Setup && <p>Setup: {props.Setup}</p>} 
            <p>{props. PunchLine}</p>
            <hr />
        </>
    )
}