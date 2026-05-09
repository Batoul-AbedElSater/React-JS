
export default function Contact(props){
    
    return(
        <article className="contact-card">
            <img className="card-image" src={props.img} alt="lipgloss"/>
            <div className="card-content">
                <h3 className="card-title">{props.name}</h3>
                <div className="card-details">
                    <h4>{props.price}</h4>
                </div>
                <div className="card-details">
                    <p>{props.brand}</p>
                </div>
            </div>
        </article>
    )
}
