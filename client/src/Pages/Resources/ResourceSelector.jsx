import React, { useState } from "react";

const data = {
    "School Students": {
        "Class 9": [],
        "Class 10": [],
        "Class 11": ["PCM", "Humanities", "Commerce"],
        "Class 12": ["PCM", "Humanities", "Commerce"],
    },
    "College Students": {
        BTech: ["CSE", "ECE", "Mechanical", "Civil"],
        BSc: ["Math", "Physics", "Chemistry"],
        BA: ["History", "Economics", "Political Science"],
        BBA: ["Finance", "Marketing", "HR"],
    },
};

export default function ResourceSelector() {
    const [level, setLevel] = useState("");
    const [subLevel, setSubLevel] = useState("");
    const [stream, setStream] = useState("");

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
        setSubLevel("");
        setStream("");
    };

    const handleSubLevelChange = (e) => {
        setSubLevel(e.target.value);
        setStream("");
    };

    const handleStreamChange = (e) => {
        setStream(e.target.value);
    };

    return (
        <div className="resource-selector">
            <select onChange={handleLevelChange} value={level}>
                <option value="">Select Level</option>
                <option value="School Students">School Students</option>
                <option value="College Students">College Students</option>
            </select>

            {level && (
                <select onChange={handleSubLevelChange} value={subLevel}>
                    <option value="">Select Category</option>
                    {Object.keys(data[level]).map((key) => (
                        <option key={key} value={key}>
                            {key}
                        </option>
                    ))}
                </select>
            )}

            {subLevel && data[level][subLevel]?.length > 0 && (
                <select onChange={handleStreamChange} value={stream}>
                    <option value="">Select Stream</option>
                    {data[level][subLevel].map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            )}

            {stream && (
                <p>
                    You selected: {level} → {subLevel} → {stream}
                </p>
            )}
        </div>
    );
};
