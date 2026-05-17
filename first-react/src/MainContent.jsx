import "./MainContent.css";
import React, { useState } from "react";
import DesignList from "./Components/DesignList";
import ClaudeDesign from "./Components/ClaudeDesign";


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
        <input type="number" name="Budget" placeholder="e.g. $5000" required />

        <button type="submit" className="submit-btn">Submit Design Preferences</button>
      </form>

      {/* Show Design Section only if we have one */}
      {designs.length > 0 && 
           <DesignList designs={designs}  />}

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


     {designShown && <ClaudeDesign />}


    </main>
  );
}
