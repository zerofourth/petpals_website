import React, { useState } from 'react';

const EmergencyDetails = (props) => {
  const [userLocation, setUserLocation] = useState('');
  const [matchingHospitals, setMatchingHospitals] = useState([]);
  const [error, setError] = useState('');

  const hospitalDetails = [
    {
      slno: 1,
      hospitalType: "Super speciality hospital",
      location: "Cantonment",
      address: "Government Veterinary Hospital,Vasanth Nagar,Opposite to cantonment Railway station, Bengaluru,Bangalore north taluk, Bangalore,560051",
      mapLink: "https://goo.gl/maps/sbFUaBaUUJ9usUuP6",
      doctorName: "Dr Nageshappa",
      phoneNum: "9448087826",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 2,
      hospitalType: "Veterinary Hospital",
      location: "Malleshwaram",
      address: "Government Veterinary Hospital,11th cross,Karuna complex,Malleshwara, Bengaluru, Bangalore north taluk, Bangalore,560003",
      mapLink: "https://maps.app.goo.gl/YkqQ1eayjs1C9vR98",
      doctorName: "Dr Venkatesh K.M",
      phoneNum: "9731144556",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 3,
      hospitalType: "Veterinary Hospital",
      location: "Hesaraghatta",
      address: "Government Veterinary Hospital,Hesaraghatta,Bangalore north taluk, Bangalore,560088",
      mapLink: "https://maps.app.goo.gl/q9w6rrj5wFzADAsP6",
      doctorName: "Dr Vasudev",
      phoneNum: "9448754695",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 4,
      hospitalType: "Veterinary Hospital",
      location: "Rajajinagara",
      address: "Government Veterinary Hospital,64/1, 3rd, 15th Main Rd, opp. to Vets Hospital, Y Block, Rajajinagar, Bengaluru, Karnataka 560010",
      mapLink: "https://maps.app.goo.gl/3uPD7o6xD8B4TFri8",
      doctorName: "Dr M H Reddy",
      phoneNum: "9900229973",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 5,
      hospitalType: "Veterinary Hospital",
      location: "Chikkajala",
      address: "Government Veterinary Hospital,Chikkajala, Bengaluru, Bangalore north taluk, Bangalore",
      mapLink: "https://goo.gl/maps/VFukNpkntJwDx8Kk8",
      doctorName: "Dr Sudarshan",
      phoneNum: "8217573732",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 6,
      hospitalType: "Veterinary Hospital",
      location: "Byatha",
      address: "Government Veterinary Dispensary,Byatha,Bangalore north taluk, Bangalore",
      mapLink: "https://maps.app.goo.gl/UpTyhky88affgDmw6",
      doctorName: "Dr Vinutha Gurukar",
      phoneNum: "9886281543",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 7,
      hospitalType: "Veterinary Hospital",
      location: "Bettahalasuru",
      address: "Government Veterinary Dispensary,Bettahalasuru, Bangalore north taluk, Bangalore",
      mapLink: "https://maps.app.goo.gl/p4toPKLBK9JXrff68",
      doctorName: "Dr Kantharaju",
      phoneNum: "8073939905",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 8,
      hospitalType: "Veterinary Hospital",
      location: "Jalahalli",
      address: "Government Veterinary Dispensary,28, 5th Cross, A.K.Colony, K S Road, Jalahalli Village, Jalahalli, Bengaluru, Bengaluru North taluk, Bangalore",
      mapLink: "https://maps.app.goo.gl/C6cVZ3zus83bXJmV8",
      doctorName: "Dr Savithramma",
      phoneNum: "9535637813",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 9,
      hospitalType: "Veterinary Hospital",
      location: "Kodigenahalli",
      address: "Government Veterinary Dispensary,Kodigenahalli, Bengaluru North taluk, Bangalore",
      mapLink: "https://maps.app.goo.gl/xcR2fF1trfG7mMMr7",
      doctorName: "Dr Girish",
      phoneNum: "9739056960",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 10,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Hospital,R C Puram, Bengaluru, Bangalore North taluk, Bangalore",
      mapLink: "https://maps.app.goo.gl/RScZ6KuMQnMMVHZx8",
      doctorName: "Dr Hemavathi",
      phoneNum: "9481298263",
      timings: "9am -1pm and 3pm-5pm on weekdays. 9am to 1pm on",
    },
    {
      slno: 11,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Kacharakanahalli, St. Thomas Town P.O., Bangalore",
      mapLink: "https://goo.gl/maps/Y2SR8nX9ZNNAM7ub9",
      doctorName: "Dr. Hemanth",
      phoneNum: "9481873909",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 12,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Horamavu Main Road, Horamavu, Bangalore",
      mapLink: "https://goo.gl/maps/gLfVv1TRMAc8NTwF7",
      doctorName: "Dr. Lakshmidevi",
      phoneNum: "9449848210",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 13,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Kothanur Main Road, JP Nagar 7th Phase, Bangalore",
      mapLink: "https://goo.gl/maps/gwSL6FejwJH1yFQm8",
      doctorName: "Dr. Ganesh",
      phoneNum: "9741644766",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 14,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Bannerghatta Road, Hulimavu, Bangalore",
      mapLink: "https://goo.gl/maps/25aTpdmjzeTJGSUw6",
      doctorName: "Dr. Sushma",
      phoneNum: "9886114386",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 15,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Arakere Bannerghatta Road, Bangalore",
      mapLink: "https://goo.gl/maps/yv4irT5cBKfiaxvS9",
      doctorName: "Dr. Raghavendra",
      phoneNum: "9448217166",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 16,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Bilekahalli, Bannerghatta Road, Bangalore",
      mapLink: "https://goo.gl/maps/hTQFuzJDhx3MxUvS6",
      doctorName: "Dr. Varsha",
      phoneNum: "9448552455",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 17,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Anekal Road, Chandapura, Bangalore",
      mapLink: "https://goo.gl/maps/eDCaXr52idMhL7nJ6",
      doctorName: "Dr. Ramesh",
      phoneNum: "9900668745",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 18,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Konappana Agrahara, Electronic City, Bangalore",
      mapLink: "https://goo.gl/maps/RUpL7hNxNKbKUedT9",
      doctorName: "Dr. Smitha",
      phoneNum: "9482624589",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 19,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Harohalli, Kanakapura Road, Bangalore",
      mapLink: "https://goo.gl/maps/vW5tbkyRiCWMCu2w6",
      doctorName: "Dr. Pradeep",
      phoneNum: "9886724396",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 20,
      hospitalType: "Veterinary Hospital",
      location: "Bangalore",
      address: "Government Veterinary Dispensary, Hosakerehalli, Uttarahalli, Bangalore",
      mapLink: "https://goo.gl/maps/DUfiwTgyMdnuCJwE7",
      doctorName: "Dr. Jayanthi",
      phoneNum: "9902303727",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on weekends.",
    },
    {
      slno: 21,
      hospitalType: "Veterinary Hospital",
      location: "Mysore Road",
      address: "City Veterinary Hospital, Mysore Road, Anjanappa Gardens, Cottonpete, Bengaluru, Bangalore 560002",
      mapLink: "https://goo.gl/maps/PQT86fk6Z128fCka9",
      doctorName: "Dr. Chandraiah T",
      phoneNum: "9902041310",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 22,
      hospitalType: "Veterinary Hospital",
      location: "Uttarahalli",
      address: "Govt. Veterinary Hospital, Uttarahalli Main Road, Masjid Road, Vaishnavi Layout, Uttarahalli Hobli, Bengaluru, Bangalore 560061",
      mapLink: "https://maps.app.goo.gl/WagG9usNuvAVjjRx6",
      doctorName: "Dr. Sujatha",
      phoneNum: "8495935420",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 23,
      hospitalType: "Veterinary Hospital",
      location: "Madiwala",
      address: "Govt. Veterinary Hospital, UniverCell, Door No. 62/2, Hosur Main Road, 2nd Main Rd, Madiwala, 1st Stage, BTM 1st Stage, Bengaluru, Bangalore 560068",
      mapLink: "https://maps.app.goo.gl/Y66JYQga8zuRARCQ7",
      doctorName: "Dr. Rudramma",
      phoneNum: "9845973602",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 24,
      hospitalType: "Veterinary Hospital",
      location: "Gavipuram Guttahalli",
      address: "Govt. Veterinary Hospital, 5th Main Rd, 4E Block, Gavipura, Kempegowda Nagar, Bengaluru, Karnataka 560019",
      mapLink: "https://g.co/kgs/6KYVWi",
      doctorName: "Dr. Srinath",
      phoneNum: "7259299109",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    }, 
    {
      slno: 25,
      hospitalType: "Veterinary Dispensary",
      location: "Kaggalahalli",
      address: "Government Veterinary Dispensary, Kaggalahalli, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://maps.app.goo.gl/S8KEqo7v44qV1uNE9",
      doctorName: "Dr. Usha",
      phoneNum: "9448153147",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 26,
      hospitalType: "Veterinary Dispensary",
      location: "Kadabagere",
      address: "Government Veterinary Dispensary, Kadabagere, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://goo.gl/maps/nAJS1f3gcFYRHKDS6",
      doctorName: "Dr. Prashant",
      phoneNum: "9900267485",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 27,
      hospitalType: "Veterinary Dispensary",
      location: "Kanminike",
      address: "Government Veterinary Dispensary, Kanminike, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://maps.app.goo.gl/5VgZ5sVXmWVx2L7b9",
      doctorName: "Dr. Harish",
      phoneNum: "9945256900",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 28,
      hospitalType: "Veterinary Dispensary",
      location: "Krishnagiri",
      address: "Government Veterinary Dispensary, Krishnagiri, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://goo.gl/maps/4ayvpo9uQ8Ji7yf98",
      doctorName: "Dr. Manjunath",
      phoneNum: "9449258838",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 29,
      hospitalType: "Veterinary Dispensary",
      location: "Nadigere",
      address: "Government Veterinary Dispensary, Nadigere, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://maps.app.goo.gl/7pG3t7PKrja6mRK39",
      doctorName: "Dr. Shobha",
      phoneNum: "9886158388",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 30,
      hospitalType: "Veterinary Dispensary",
      location: "Thyamagondlu",
      address: "Government Veterinary Dispensary, Thyamagondlu, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://goo.gl/maps/5b9tS7aRvqqZ9UJP8",
      doctorName: "Dr. Ramesh",
      phoneNum: "9448491504",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 31,
      hospitalType: "Veterinary Dispensary",
      location: "Vaderahalli",
      address: "Government Veterinary Dispensary, Vaderahalli, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://maps.app.goo.gl/VZq87tzB2eEUetQY7",
      doctorName: "Dr. Nagarathna",
      phoneNum: "9448491462",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 32,
      hospitalType: "Veterinary Dispensary",
      location: "Vanakanahalli",
      address: "Government Veterinary Dispensary, Vanakanahalli, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://goo.gl/maps/5f1zzS7W7foNes3Q7",
      doctorName: "Dr. Nagaraj",
      phoneNum: "9448491456",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
    {
      slno: 33,
      hospitalType: "Veterinary Dispensary",
      location: "Vasantanarayana Pura",
      address: "Government Veterinary Dispensary, Vasantanarayana Pura, Bangalore South Taluk, Bangalore 560091",
      mapLink: "https://maps.app.goo.gl/xgXpy8zS9yq8JkgB6",
      doctorName: "Dr. Hemanth",
      phoneNum: "9448491512",
      timings: "9am - 1pm and 3pm - 5pm on weekdays. 9am to 1pm on holidays.",
      services: "General Treatment And Minor surgeries",
    },
  ];
  

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '14px',
    // Add other input field styles as needed
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    // Add other button styles as needed
  };

  const handleLocationChange = (event) => {
    setUserLocation(event.target.value);
  };

  const handleSubmit = () => {
    // Compare submitted location with hospital locations
    const userLocationLower = userLocation.toLowerCase();
    const matchingHospitals = hospitalDetails.filter((hospital) => {
      return hospital.location.toLowerCase() === userLocationLower;
    });

    if (matchingHospitals.length > 0) {
      // Store matching hospitals
      setMatchingHospitals(matchingHospitals);
      setError('');
    } else {
      // No matching hospitals found
      setError('No particular hospital found in your area.');
      setMatchingHospitals([]);
    }

    setUserLocation('');
  };

  const hospitalDetailsStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '14px',
  };

  const mapLinkStyle = {
    marginTop: '10px',
    fontSize: '14px',
  };
  const timingsStyle = {
    fontSize: '14px',
    marginTop: '5px',
    color: '#555',
  };
  return (
    <div>
      <p>Enter your location to find a hospital:</p>
      <input type="text" value={userLocation} onChange={handleLocationChange} style={inputStyle} />
      <button onClick={handleSubmit} style={buttonStyle}>
        Find Hospital
      </button>

      {/* Display matching hospital details or error message */}
      {matchingHospitals.length > 0 && (
        <div>
          <p>Matching Hospitals:</p>
          {matchingHospitals.map((hospital, index) => (
            <div key={index} style={hospitalDetailsStyle}>
              <p>Name: {hospital.hospitalType}</p>
              <p>Location: {hospital.location}</p>
              <p style={timingsStyle}>Timings: {hospital.timings}</p>
              <p>Phone Number: {hospital.phoneNum}</p>
              {hospital.mapLink && (
                <p style={mapLinkStyle}>
                  <a href={hospital.mapLink} target="_blank" rel="noopener noreferrer">
                    View on Map
                  </a>
                </p>
              )}
              {/* You can display other hospital details as needed */}
            </div>
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default EmergencyDetails;