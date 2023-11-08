import React, { useState } from 'react';
import EmergencyDetails from './EmergencyDetails';
import RescueDetails from './RescueDetails'; // Import the RescueDetails component

const buttonStyle = {
  backgroundColor: '#1E90FF', // Patrol Blue
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '14px', // Adjust the font size as needed
};

export default function PetOptions(props) {
  const [showRescueDetails, setShowRescueDetails] = useState(false); // State to control RescueDetails visibility

  const handleAdoption = () => {
    props.actions.handlePetAdoption();
  };

  const handleRescue = () => {
    props.actions.handlePetRescue();
    setShowRescueDetails(true); // Set the state variable to true to show RescueDetails
  };

  const handleEmergency = () => {
    props.actions.handleSOS();
    setShowRescueDetails(false); // Set the state variable to false to hide RescueDetails
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleAdoption}>
        Pet Adoption
      </button>
      <button style={buttonStyle} onClick={handleRescue}>
        Pet Rescue
      </button>
      <button style={buttonStyle} onClick={handleEmergency}>
        Emergency (SOS)
      </button>
      {showRescueDetails && <RescueDetails />} {/* Conditionally render RescueDetails */}
      {props.state.checker === 'emergency' && (
        <div>
          <EmergencyDetails actions={props.actions} />
        </div>
      )}
    </div>
  );
}
