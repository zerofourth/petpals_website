import React, { useState } from 'react';

const RescueDetails = (props) => {
  const [petType, setPetType] = useState('cat');
  const [userLocation, setUserLocation] = useState('');
  const [matchingRescues, setMatchingRescues] = useState([]);
  const [error, setError] = useState('');

  const rescueData = [
    // Cats
    {
      type: 'cat',
      name: 'Catmosphere',
      location: 'Yelahanka',
      contact: '+91 9902624697',
    },
    {
      type: 'cat',
      name: 'Dawg Squad',
      location: 'Koramangala',
      contact: '+91 94 80 521 596',
    },
    {
      type: 'cat',
      name: 'Catz Squad',
      location: 'South Bangalore',
      contact: ' +91 74 06 343 464 or +91 88 61 979 295',
    },
  
    // Dogs
    {
      type: 'dog',
      name: 'Dog Catchers (Syed)',
      location: 'Hulimavu',
      contact: '+91 81055 36711',
    },
    {
      type: 'dog',
      name: 'Dog Catchers (Kiran)',
      location: 'Tavarakere',
      contact: '+91 70192 92003 or +91 88928 12010',
    },
    {
      type: 'dog',
      name: 'Dog Catchers (Dinesh)',
      location: 'Adugodi',
      contact: '+91 97389 94033',
    },
  
    // Snake Catchers
    {
      type: 'snake',
      name: 'Snake Catchers Ajay',
      location: 'Bannerghatta',
      contact: '+91 93 42 596 704',
    },
    {
      type: 'snake',
      name: 'Snake Catchers Mehmood',
      location: 'Indiranagar',
      contact: '+91 96 86 447 818',
    },
    {
      type: 'snake',
      name: 'Snake Catchers Nisham',
      location: 'Lalbagh',
      contact: '+91 95353 43976',
    },
    // Other Animals: Large
    {
      type: 'Large Animals',
      name: 'CUPA LARRC (Large Animal Rescue & Rehabilitation Center)',
      location: 'Mutharayana Nagar',
      contact: '080 2294 7317',
    },
    {
      type: 'Large Animals',
      name: 'WSA Founder Praveen',
      location: 'Yelahanka',
      contact: '+91 96 32 300 046',
    },
    {
      type: 'Large Animals',
      name: 'Gaushala',
      location: 'Madiwala',
      contact: '+91 98 45 366 029',
    },
  
    // Other Animals: Small
    {
      type: 'Small Animals',
      name: 'PFA (People For Animals)',
      location: 'Sunkalpalya',
      contact: '97 41 783 232 (General Manager) / 88 84 846 668 (Dr. Darsh)',
    },
    {
      type: 'Small Animals',
      name: 'ARRC (Horamavu)',
      location: 'Horamavu',
      contact: '9620286800',
    },
    {
      type: 'bird',
      name: 'Kabootar Dana Seva (Rajajinagar)',
      location: 'Rajajinagar',
      contact: '9845221309',
    },
  ];
  

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const selectStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
  };

  const resultStyle = {
    marginTop: '20px',
  };

  const resultItemStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px 0',
    fontSize: '14px',
  };

  const handlePetTypeChange = (event) => {
    setPetType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setUserLocation(event.target.value);
  };

  const handleSubmit = () => {
    const petTypeLower = petType.toLowerCase();

    const matchingRescues = rescueData
      .filter((rescue) => rescue.type === petTypeLower)
      .slice(0, 2); // Limit results to the top 2

    if (matchingRescues.length > 0) {
      setMatchingRescues(matchingRescues);
      setError('');
    } else {
      setError(`No ${petType} rescue centers found.`);
      setMatchingRescues([]);
    }

    setUserLocation('');
  };

  return (
    <div>
      <p>Select the type of pet and enter your location to find the nearest rescue center:</p>
      <select value={petType} onChange={handlePetTypeChange} style={selectStyle}>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="snake">Snakes</option>
        <option value="bird">Birds</option>
        <option value="small animals">Other Small Animals/Wild Animals</option>
        <option value="large animals">Large Animals/Cattle</option>
      </select>
      <input type="text" placeholder="Location" value={userLocation} onChange={handleLocationChange} style={inputStyle} />
      <button onClick={handleSubmit} style={buttonStyle}>
        Find Rescue Center
      </button>

      {matchingRescues.length > 0 && (
        <div style={resultStyle}>
          <p>Top 2 Matching Rescue Centers:</p>
          {matchingRescues.map((rescue, index) => (
            <div key={index} style={resultItemStyle}>
              <p>Name: {rescue.name}</p>
              <p>Type: {rescue.type}</p>
              <p>Location: {rescue.location}</p>
              <p>Contact: {rescue.contact}</p>
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default RescueDetails;