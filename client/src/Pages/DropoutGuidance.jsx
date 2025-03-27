import { useState } from "react";
import { motion } from "framer-motion";

const demoResponses = [
    {
        issue: "I feel unmotivated to study.",
        response: "Set small goals, take breaks, and use study techniques like the Pomodoro method to stay focused.",
    },
    {
        issue: "I can't afford school fees.",
        response: "We recommend applying for financial aid through SDS and looking for scholarships that match your needs.",
    },
    {
        issue: "I'm failing my subjects.",
        response: "Try breaking down your subjects into smaller topics, use online resources like YouTube tutorials, and practice regularly.",
    },
];

export default function DropoutGuidance() {
    const [chats, setChats] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        const newChats = [...chats, { type: "user", text: userInput }];

        const matchedResponse = demoResponses.find((item) =>
            userInput.toLowerCase().includes(item.issue.toLowerCase())
        );
        const botResponse = matchedResponse
            ? matchedResponse.response
            : "Our AI is analyzing your issue. Stay tuned!";

        setTimeout(() => {
            setChats([...newChats, { type: "bot", text: botResponse }]);
        }, 800);

        setChats(newChats);
        setUserInput("");
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
