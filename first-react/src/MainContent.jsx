import "./MainContent.css";

export default function MainContent() {
  return (
    <form className="add-info-form">
      <h1 className="form-heading">🏠 Add Room Type</h1>
      <input
        type="text"
        placeholder="e.g. Bedroom"
        aria-label="Add Room Type"
        required
      />

      <h1 className="form-heading">🎨 Add Style Preference</h1>
      <input
        type="text"
        placeholder="e.g. Modern, Rustic, Minimalist"
        aria-label="Add Style Preference"
        required
      />

      <h1 className="form-heading">💰 Add Budget</h1>
      <input
        type="number"
        placeholder="e.g. 5000$"
        aria-label="Add Budget"
        required
      />

      <button type="submit" className="submit-btn">
        Submit Design Preferences
      </button>
    </form>
  );
}
