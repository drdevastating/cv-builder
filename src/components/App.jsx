import { useState } from "react";
import GeneralInfo from "./generalInfo.jsx";
import EducationalExperience from "./educationalInfo.jsx";
import PracticalExperience from "./practicalExp.jsx";
import ResumePreview from "./resumePreview.jsx";
import "../styles/App.css";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
      <div className="app-container">
        <div className="form-section">
          <GeneralInfo updateGeneralInfo={setGeneralInfo} />
          <EducationalExperience updateEducationalInfo={setEducationList} />
          <PracticalExperience onSubmit={setExperienceList} />
        </div>
        <div className="preview-section">
          <ResumePreview
            generalInfo={generalInfo}
            educationList={educationList}
            experienceList={experienceList}
          />
        </div>
      </div>
  );
};

export default App;
