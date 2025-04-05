const getGeminiResponse = async (userInput) => {
    try {
        const res = await fetch("/api/gemini/dropout-guidance", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({userInput})
        });
        const response = await res.json();
        if(!res.ok){
            throw new Error(res.message);
        }
        return response;
    } catch (error) {
        console.log(`error in getting gemini response service ${error.message}` );
    }
};

export {getGeminiResponse}
