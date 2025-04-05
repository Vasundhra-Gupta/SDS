import { useState } from "react";
import { motion } from "framer-motion";
import { getGeminiResponse } from "../Services/geminiService";

export default function DropoutGuidance() {
    const [chats, setChats] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!userInput.trim()) return;

            const userMessage = { type: "user", text: userInput };
            setChats((prev) => [...prev, userMessage]);
            setUserInput("");
            const response = await getGeminiResponse(userInput);

            const botResponse = response
                ? response
                : "Our AI is analyzing your issue. Stay tuned!";

            setChats((prev) => [...prev, { type: "bot", text: botResponse }]);
        } catch (error) {
            setChats((prev) => [
                ...prev,
                {
                    type: "bot",
                    text: "something went wrong. Please try again later.",
                },
            ]);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen  flex flex-col justify-center items-center p-6">
            <div className="w-full max-w-5xl bg-white shadow-2xl rounded-xl p-6 flex flex-col">
                <h2 className="text-4xl font-bold text-blue-700 text-center mb-6">
                    Dropout Guidance Chat 💬
                </h2>
                <p className="text-lg text-gray-600 text-center mb-4">
                    Share your problem here, and get guidance.
                </p>

                {/* Chat Box */}
                <div className="flex-1 overflow-y-auto max-h-[500px] space-y-4 p-4 border rounded-lg bg-gray-50 shadow-inner">
                    {chats.map((chat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 max-w-xl break-words rounded-lg shadow-md ${
                                chat.type === "user"
                                    ? "bg-blue-200 text-gray-800 self-end ml-auto"
                                    : "bg-gray-300 text-gray-800 self-start"
                            }`}
                        >
                            {chat.text}
                        </motion.div>
                    ))}

                    {/* 👇 Loading shown as bot message */}
                    {loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="p-4 max-w-xl break-words rounded-lg shadow-md bg-gray-300 text-gray-800 self-start flex items-center gap-2"
                        >
                            <span className="animate-spin h-5 w-5 border-2 border-blue-400 border-t-transparent rounded-full"></span>
                            AI is thinking...
                        </motion.div>
                    )}
                </div>

                {/* Input Box */}
                <form onSubmit={handleSubmit} className="flex mt-6 w-full">
                    <input
                        type="text"
                        placeholder="Type your problem..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="flex-1 p-3 border rounded-l-lg focus:ring focus:ring-blue-300 shadow-md text-lg"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition shadow-md text-lg"
                    >
                        Send 🚀
                    </button>
                </form>
            </div>
        </div>
    );
}
