import jsPDF from "jspdf";
import "../styles/resumeReview.css";

const ResumePreview = ({ generalInfo, educationList, experienceList }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Capture the resume preview content
    const content = document.querySelector(".resume-preview");
    doc.html(content, {
      callback: function (pdf) {
        pdf.save("resume.pdf");
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <div className="resume-preview-container">
      <div className="resume-preview">
        {/* General Information Section */}
        <div className="general-info-display">
          <h1>{generalInfo.name || "Your Name"}</h1>
          <div className="info">
            <div className="info-item">
              <i className="fa-solid fa-envelope"></i>
              <span>{generalInfo.email || "Your Email"}</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-phone"></i>
              <span>{generalInfo.phone || "Your Phone Number"}</span>
            </div>
            <div className="info-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>{generalInfo.location || "Your Location"}</span>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <h2>Education</h2>
        {educationList.length ? (
          educationList.map((edu, index) => (
            <div key={index}>
              <h3>{edu.institution || "Institution Name"}</h3>
              <p>{edu.course || "Course"}</p>
              <p>{edu.grade || "Grade"}</p>
              <p>
                {edu.from || "Start Date"} - {edu.to || "End Date"}
              </p>
            </div>
          ))
        ) : (
          <p>No educational details added yet.</p>
        )}

        {/* Experience Section */}
        <h2>Experience</h2>
        {experienceList.length ? (
          experienceList.map((exp, index) => (
            <div key={index}>
              <h3>{exp.company || "Company Name"}</h3>
              <p>{exp.position || "Position"}</p>
              <p>
                {exp.from || "Start Date"} - {exp.until || "End Date"}
              </p>
            </div>
          ))
        ) : (
          <p>No practical experience added yet.</p>
        )}
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={handleDownload}>
        Download PDF
      </button>
    </div>
  );
};

export default ResumePreview;
