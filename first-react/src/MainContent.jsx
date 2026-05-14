import "./MainContent.css";
import React, { useState } from "react";

export default function MainContent() {
        const [designs, setDesigns] = React.useState([
        // { roomType: "Bedroom", style: "Modern", budget: "5000" },
        // { roomType: "Kitchen", style: "Rustic", budget: "3000" }
    ]);

    const designListItems = designs.map((design, index) => (
        <li key={index}>
        <strong>{design.roomType}</strong> — {design.style} — Budget: ${design.budget}
        </li>
    ));
    
        function handleSubmit(event) {
            event.preventDefault();
            console.log("Form Submitted ✔");

            const formData = new FormData(event.currentTarget);

            // Build a new object from the form inputs
            const newDesign = {
            roomType: formData.get("RoomType"),
            style: formData.get("StylePreference"),
            budget: formData.get("Budget")
            };

            console.log(newDesign);

            // Add the new object to the designs array
            setDesigns(prev => [...prev, newDesign]);
    }

  return (
     <main>  
            <form onSubmit={handleSubmit} className="add-info-form">
            <h1 className="form-heading">🏠 Add Room Type</h1>
            <input
                type="text"
                placeholder="e.g. Bedroom"
                aria-label="Add Room Type"
                name="RoomType"
                required
            />

            <h1 className="form-heading">🎨 Add Style Preference</h1>
            <input
                type="text"
                placeholder="e.g. Modern, Rustic, Minimalist"
                aria-label="Add Style Preference"
                name="StylePreference"
                required
            />

            <h1 className="form-heading">💰 Add Budget</h1>
            <input
                type="number"
                placeholder="e.g. 5000$"
                aria-label="Add Budget"
                name="Budget"
                required
            />

            <button type="submit" className="submit-btn">
                Submit Design Preferences
            </button>
            </form>
       <ul>
            {designListItems}
       </ul>
   </main>
   
  );
}
