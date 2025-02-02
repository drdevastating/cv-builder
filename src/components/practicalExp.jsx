import { useState } from "react";
import "../styles/practicalExp.css";

const PracticalExperience = ({ onSubmit }) => {
  const [experienceList, setExperienceList] = useState([]);

  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      from: "",
      until: "",
    };
    setExperienceList([...experienceList, newExperience]);
  };

  const removeExperience = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
    onSubmit(updatedList);
  };

  const handleChange = (index, field, value) => {
    const updatedList = [...experienceList];
    updatedList[index][field] = value;
    setExperienceList(updatedList);
    onSubmit(updatedList);
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>
      {experienceList.map((exp, index) => (
        <div key={index} className="experience-entry">
          <input
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
          />
          <input
            placeholder="Position Title"
            value={exp.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
          />
          <input
            type="date"
            placeholder="From"
            value={exp.from}
            onChange={(e) => handleChange(index, "from", e.target.value)}
          />
          <input
            type="date"
            placeholder="Until"
            value={exp.until}
            onChange={(e) => handleChange(index, "until", e.target.value)}
          />
          <button
            type="button"
            className="remove-btn"
            onClick={() => removeExperience(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        + Add Experience
      </button>
    </div>
  );
};

export default PracticalExperience;
