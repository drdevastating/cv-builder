import { useState } from "react";
import "../styles/educationalInfo.css";

const EducationalExperience = ({ updateEducationalInfo }) => {
  const [educations, setEducations] = useState([
    { institution: "", course: "", grade: "", from: "", to: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducations = educations.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );
    setEducations(updatedEducations);
    updateEducationalInfo(updatedEducations);
  };

  const addEducation = () => {
    setEducations([
      ...educations,
      { institution: "", course: "", grade: "", from: "", to: "" },
    ]);
  };

  const removeEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    updateEducationalInfo(updatedEducations);
  };

  return (
    <div className="educational-info">
      <h2>Educational Information</h2>
      {educations.map((education, index) => (
        <div key={index} className="education-form">
          <form>
            <label>
              Institution Name:
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter institution name"
              />
            </label>
            <label>
              Course:
              <input
                type="text"
                name="course"
                value={education.course}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter course"
              />
            </label>
            <label>
              Grade:
              <input
                type="text"
                name="grade"
                value={education.grade}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter grade"
              />
            </label>
            <label>
              From:
              <input
                type="date"
                name="from"
                value={education.from}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
            <label>
              To:
              <input
                type="date"
                name="to"
                value={education.to}
                onChange={(e) => handleChange(index, e)}
              />
            </label>
          </form>
          <button
            className="remove-button"
            onClick={() => removeEducation(index)}
          >
            Remove
          </button>
          <hr />
        </div>
      ))}
      <button className="add-button" onClick={addEducation}>
        + Add More Education
      </button>
    </div>
  );
};

export default EducationalExperience;
