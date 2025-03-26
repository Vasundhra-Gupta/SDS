import React from "react";

export default function EducationalDetails() {
    const institutename = useRef();
    const courseName = useRef();
    const year = useRef();
    const studentId = useRef();
    const marks = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const institute = institutename.current.value;
        const course = courseName.current.value;
        const yearr = year.current.value;
        const rollNo = studentId.current.value;
        const cgpa = marks.current.value;

        institutename.current.value = "";
        courseName.current.value = "";
        year.current.value = "";
        studentId.current.value = "";
        marks.current.value = "";

        addPost(institutename, courseName, year, studentId, marks);
    };

    return (
        <div>
            <h1>Education Details</h1>
            <form className="create-post" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">
                        Institute Name
                    </label>
                    <input
                        type="text"
                        ref={institutename}
                        className="form-control"
                        id="Name"
                        placeholder="Enter your school/college Name"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="course" className="form-label">
                        Course Name
                    </label>
                    <input
                        type="text"
                        ref={courseName}
                        className="form-control"
                        id="course"
                    />
                </div>
                <div className="mb-3">
                    <label for="studentId">🔲 Student Id</label>
                    <input
                        type="tel"
                        id="studentId"
                        name="StudentId"
                        pattern="[0-9]{10}"
                        ref={studentId}
                        required
                    />
                    <br />
                    <br />
                </div>

                <div className="mb-3">
                    <label>🔲 Academic Performance</label>
                    <input
                        type="radio"
                        id="cgpa"
                        name="grade"
                        value="CGPA"
                        ref={marks}
                        required
                    />
                    <label for="male">CGPA</label>
                    <input
                        type="radio"
                        id="percent"
                        name="grade"
                        value="percent"
                        ref={marks}
                        required
                    />
                    <label for="female">Percentage</label>
                    <br />
                    <br />
                </div>

                <div className="app-container">
                    <button type="button" className="btn btn-primary">
                        Back
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Save & Next
                    </button>
                </div>
            </form>
        </div>
    );
}
