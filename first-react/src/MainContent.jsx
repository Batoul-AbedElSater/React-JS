import "./MainContent.css";
import React, { useState } from "react";

export default function MainContent() {
  const [designs, setDesigns] = useState([]);
  const[designShown, setDesignShown] = useState(false)

  function toggleDesignShown(){
    setDesignShown(prevShown => !prevShown)
  }

  function addDesigns(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const newDesign = {
      roomType: formData.get("RoomType"),
      style: formData.get("StylePreference"),
      budget: formData.get("Budget"),
    };

    // Replace previous design with the new one 
    setDesigns([newDesign]);
  }

  return (
    <main>
      {/* Form */}
      <form onSubmit={addDesigns} className="add-info-form">
        <h1 className="form-heading">🏠 Add Room Type</h1>
        <input type="text" name="RoomType" placeholder="e.g. Bedroom" required />

        <h1 className="form-heading">🎨 Add Style Preference</h1>
        <input type="text" name="StylePreference" placeholder="e.g. Modern" required />

        <h1 className="form-heading">💰 Add Budget</h1>
        <input type="number" name="Budget" placeholder="e.g. 5000$" required />

        <button type="submit" className="submit-btn">Submit Design Preferences</button>
      </form>

      {/* Show Design Section only if we have one */}
      {designs.length > 0 && (
        <section className="design-section">
          <h2 className="section-heading">🏡 Your Design Preferences</h2>
          <div className="design-card">
            <h3 className="room-type">🏠 {designs[0].roomType}</h3>
            <p className="style">🎨 Style: {designs[0].style}</p>
            <p className="budget">💰 Budget: ${designs[0].budget}</p>
          </div>
        </section>
      )}

      {/* AI Section appears only if we have one design */}
      {designs.length > 0 && (
        <section className="ai-section">
          <h3 className="ai-heading">✨ Ready for Inspiration?</h3>
          <p className="ai-text">
            Send your preferences to the AI and get a tailored interior design idea.
          </p>
          <button className="ai-btn" onClick={toggleDesignShown}>🚀 Generate Design Idea</button>
        </section>
      )}


     {designShown && <section>
            <h1>Designer Claude – Bedroom Design Plan</h1>
            <p><strong>Room Type:</strong> Bedroom</p>
            <p><strong>Style Preference:</strong> Modern</p>
            <p><strong>Budget:</strong> $5000</p>

            <h2>Step-by-Step Design Instructions</h2>
            <p>1. Start with a low-profile platform bed with an upholstered headboard in neutral tones such as gray or beige. Allocate about $1500.</p>
            <p>2. Add layered lighting: LED strip lighting behind the headboard for ambiance, and two pendant lamps above bedside tables. Budget around $700.</p>
            <p>3. Install a built-in wardrobe with sliding mirrored doors to maximize space and keep the look sleek. Allocate $1200.</p>
            <p>4. Choose warm oak flooring or laminate, and place a geometric rug in monochrome tones for contrast. Budget about $600.</p>
            <p>5. Decorate with abstract wall art above the bed, minimalist bedside tables with metallic accents, and a statement chair in one corner for reading. Allocate $700.</p>

            <h2>AI Inspiration Notes</h2>
            <p>- Consider smart blinds for natural light control.</p>
            <p>- Use layered lighting to shift moods between cozy and bright.</p>
            <p>- Add greenery with potted plants for freshness.</p>

            <h2>Budget Allocation</h2>
            <p>Bed & Furniture: $1500</p>
            <p>Lighting: $700</p>
            <p>Storage: $1200</p>
            <p>Flooring & Rug: $600</p>
            <p>Decor & Accents: $700</p>
            <p><strong>Total:</strong> $5000</p>



        
      </section>}


    </main>
  );
}
