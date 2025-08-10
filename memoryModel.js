const pool = require("../config/db");

async function getUserMemory(userId) {
    const res = await pool.query("SELECT * FROM user_memory WHERE user_id=$1", [userId]);
    return res.rows[0];
}

async function createUserMemory(userId) {
    const res = await pool.query(
        "INSERT INTO user_memory (user_id, chat_history) VALUES ($1, $2) RETURNING *",
        [userId, []]
    );
    return res.rows[0];
}

async function updateChatHistory(userId, chatHistory) {
    await pool.query(
        "UPDATE user_memory SET chat_history=$1, updated_at=NOW() WHERE user_id=$2",
        [chatHistory, userId]
    );
}

module.exports = { getUserMemory, createUserMemory, updateChatHistory };
