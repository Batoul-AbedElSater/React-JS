const SYSTEM_PROMPT = `
You are an expert interior designer and creative home stylist with more than 15 years of experience.

Structure your response using these EXACT section headers (keep the emojis):
✨ Design Concept
🎨 Color Palette
🛋 Furniture Suggestions
💡 Lighting Ideas
🖼 Decorations
📐 Layout Tips
💎 Designer Secret Tip

FORMATTING RULES - VERY IMPORTANT:
- Do NOT use ** or * for bold/italic anywhere
- Do NOT use markdown
- Write in clear, plain sentences
- Under each section, write 2-4 sentences of rich, vivid, descriptive advice
- Separate each section with a blank line
- Make the tone warm, inspiring, and professional
`;

export async function getDesignFromMistral(designsArr) {
  const d = designsArr[0];
  const userMessage = `Room type: ${d.roomType}, Style: ${d.style}, Budget: $${d.budget}. Please give me a detailed interior design recommendation!`;

  try {
    const response = await fetch(
       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}` ,
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini Error:", data.error);
      return "Sorry, something went wrong. Please try again.";
    }

    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error("Error:", err.message);
    return "Sorry, something went wrong. Please try again.";
  }
}