const OpenAI = require("openai");
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateResponse(prompt) {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4o-mini",  // You can also use "gpt-3.5-turbo"
            messages: [{ role: "system", content: `You are ${process.env.BOT_NAME}, an empathetic chatbot.` },
            { role: "user", content: prompt }]
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return "I'm having trouble responding right now.";
    }
}

module.exports = { generateResponse };
