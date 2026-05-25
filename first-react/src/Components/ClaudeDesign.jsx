export default function ClaudeDesign({ design }) {
  const lines = design.split("\n").filter((line) => line.trim() !== "");

  const isHeader = (line) =>
    line.startsWith("✨") ||
    line.startsWith("🎨") ||
    line.startsWith("🛋") ||
    line.startsWith("💡") ||
    line.startsWith("🖼") ||
    line.startsWith("📐") ||
    line.startsWith("💎");

  const cleanLine = (line) => line.replace(/\*\*/g, "").replace(/\*/g, "");

  return (
    <section className="claude-design-section">
      <h2 className="claude-design-title">🏠 Your Personalized Design Plan</h2>
      <div className="claude-design-content">
        {lines.map((line, index) =>
          isHeader(line) ? (
            <h3 key={index} className="claude-section-header">
              {cleanLine(line)}
            </h3>
          ) : (
            <p key={index} className="claude-section-text">
              {cleanLine(line)}
            </p>
          )
        )}
      </div>
    </section>
  );
}