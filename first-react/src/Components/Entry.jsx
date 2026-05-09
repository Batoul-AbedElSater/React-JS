// import h from '../assets/hanabira mochi.jpeg'
// import l from '../assets/location.jpeg'

export default function Entry(props){
    return(
        <article className='journal-entry'>
            <div className='main-image-container'>  <img className='main-image' src={props.img.src} alt={props.img.alt} /></div>
          
            <div className='info-maker'>
                <div className='location'>
                    <img className='marker' src={props.location.src} alt={props.location.alt} />
                    <span className='country'> {props.country} </span>
            </div>
                
            <a href={props.googleMapsLink}> View on Google Maps</a>
            <h2 className='entry-title'> {props.title} </h2>
            <p className='trip-dates'>{props.date}</p>
            <p className='entry-text'>{props.text}</p>
            </div>
            
        </article>
    )
}

