import { useState } from "react";
import "../styles/generalInfo.css";

const GeneralInfo = ({ updateGeneralInfo }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "" // Added location field
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // e.target is the input element
    const updatedInfo = { ...generalInfo, [name]: value };
    setGeneralInfo(updatedInfo);
    updateGeneralInfo(updatedInfo); // Pass updated information to the parent
  };

  return (
    <div className="general-info">
      <h2>General Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={generalInfo.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={generalInfo.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={generalInfo.location}
            onChange={handleChange}
            placeholder="Enter your location"
          />
        </label>
      </form>
    </div>
  );
};

export default GeneralInfo;
