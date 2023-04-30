import "./index.css";

const PatientDetailsSidebar = () => {
  const re = 0;

  return (
    <div className="patient-details-container">
      <div className="patient-name-container">
        <img
          src="https://res.cloudinary.com/di8upujpz/image/upload/v1682862179/download_wxtaep.jpg"
          className="patient-image"
        />
        <h1 className="patient-name-text">Sunitha Sharma</h1>
      </div>
      <ul className="patient-hospital-card-container">
        <li className="age-text">AGE : 66</li>
        <li className="age-text">Weight : 70</li>
        <li className="age-text">Disease : Type-1 Diabetes</li>
      </ul>
    </div>
  );
};

export default PatientDetailsSidebar;
