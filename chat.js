const express = require("express");
const router = express.Router();
const {
    getUserMemory,
    createUserMemory,
    updateChatHistory,
} = require("../models/memoryModel");

const { generateResponse } = require("../utils/openaiAPI");

router.post("/", async (req, res) => {
    try {
        const { userId, message } = req.body;

        if (!userId || !message) {
            return res.status(400).json({ reply: "Missing userId or message." });
        }
        let memory = await getUserMemory(userId);
        if (!memory) {
            await createUserMemory(userId);
            memory = await getUserMemory(userId);
        }
        let chatHistory = memory.chat_history || [];
        chatHistory.push(`User: ${message}`);
        const recentContext = chatHistory.slice(-10).join("\n");

        const prompt = `
        You are ${process.env.BOT_NAME || "Liora"}, a warm and helpful chatbot.
        This is an ongoing chat with user ID ${userId}.
        Here is the recent chat history:
        ${recentContext}
        Respond naturally. Mirror the user’s tone if emotional (happy/sad). Be human-like, friendly, and empathetic.
        `;
        const botReply = await generateResponse(prompt);
        chatHistory.push(`Bot: ${botReply}`);
        await updateChatHistory(userId, chatHistory);
        res.json({ reply: botReply });
    } catch (err) {
        console.error("Error in /chat:", err);
        res.status(500).json({ reply: "Oops, something went wrong." });
    }
});

module.exports = router;
