export default function DesignList(props){
    
    if(!props.designs || props.designs.length === 0){
        return null;
    }

    return(
        <section className="design-section">
          <h2 className="section-heading">🏡 Your Design Preferences</h2>
          <div className="design-card">
            <h3 className="room-type">🏠 {props.designs[0].roomType}</h3>
            <p className="style">🎨 Style: {props.designs[0].style}</p>
            <p className="budget">💰 Budget: ${props.designs[0].budget}</p>
          </div>
        </section>
    )
}