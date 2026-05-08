import h from '../assets/hanabira mochi.jpeg'
import l from '../assets/location.jpeg'

export default function Entry(props){
    return(
        <article className='journal-entry'>
            <div className='main-image-container'>  <img className='main-image' src={h} alt="hanabira mochi" /></div>
          
            <div className='info-maker'>
                <div className='location'>
                    <img className='marker' src={l} alt="map icon" />
                    <span className='country'> Japan </span>
            </div>
                
            <a href="https://maps.google.com/?cid=15104443152636885936"> View on Google Maps</a>
            <h2 className='entry-title'> Hanabira Mochi </h2>
            <p className='trip-dates'>12 Jan, 2021 - 24 Jan, 2021</p>
            <p className='entry-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, id fugit maiores, consectetur veniam, ea explicabo dolorum suscipit similique a in magni laborum maxime aperiam tenetur natus labore ipsa vero.</p>
            </div>
            
        </article>
    )
}