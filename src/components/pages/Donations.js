import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Donations() {
  const pageStyle = {
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    color: "#333",
    backgroundColor: "white",
  };

  const qrCodeStyle = {
    display: "block",
    margin: "0 auto",
    maxWidth: "200px",
    maxHeight: "200px",
  };

  const boxStyle = {
    padding: "20px", // Add padding to create a box
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white", // Background color for the box
    margin: "0 auto",
    maxWidth: "600px",
    maxHeight: "600px",
    marginBottom: "20px", // Add margin bottom for gap
  };
  
  const boxStyle1 = {
    padding: "20px", // Add padding to create a box
    //border: "1px solid #ddd",
    //borderRadius: "5px",
    //boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    //backgroundColor: "white", // Background color for the box
    margin: "0 auto",
    maxWidth: "900px",
    maxHeight: "600px",
    marginBottom: "20px", // Add margin bottom for gap
  };
  

  const charityCardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#333",
    transition: "background-color 0.3s, transform 0.2s, box-shadow 0.2s",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    fontFamily: "League Spartan, sans-serif", // Apply League Spartan font
  };

  const charityCardHoverStyle = {
    backgroundColor: "#f4f4f4",
    transform: "scale(1.03)",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
  };

  const charityImageStyle = {
    width: "80px",
    height: "80px",
    marginRight: "10px",
  };

  const charityLinks = [
    {
      name: "Help Animals India",
      imageSrc: "https://helpanimalsindia.org/assets/build/img/logo.png",
      url: "https://helpanimalsindia.org/",
    },
    {
      name: "Stray Animal Foundation of India ",
      imageSrc: "https://strayanimalfoundationindia.org/wp-content/uploads/2022/04/SAFI-Logo_GRY-LG-262x300.png",
      url: "https://strayanimalfoundationindia.org/",
    },
    {
      name: "Indian Animal Fund",
      imageSrc: "https://indiaanimalfund.org/wp-content/uploads/2023/08/Logo-Color-solid.png",
      url: "https://indiaanimalfund.org/",
    },
    {
      name: "People For Animals",
      imageSrc: "https://www.peopleforanimalsindia.org/front/img/logo.png",
      url: "https://www.peopleforanimalsindia.org/",
    },
    {
      name: "VOSD Sanctuary",
      imageSrc:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3pc1xvrcw35tl.cloudfront.net%2Fln%2FfeedImages%2F686x514%2Fdhsfjgshfjgsdyufhsdbf_202101.jpg&f=1&nofb=1&ipt=e029b236b0b3fc05bbeb2be2d8044c10342fd67317bb90bd912f02bf9caaee00&ipo=images",
      url: "https://vosd.in/",
    },
    {
      name: "Blue Cross India",
      imageSrc: "https://bluecrossofindia.org/images/BCILogoWithWhiteR.png",
      url: "https://bluecrossofindia.org",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={pageStyle}
    >
      <div>
        <div style={boxStyle1}>
        <h1 style={{ fontSize: "36px", color: "#2b49bc", fontFamily: "Montserrat, sans-serif" }}>Make a Donation</h1>

        <p>
        Your generous donation can make a real difference in the lives of animals in need. We greatly appreciate your support in helping us continue our mission.
        </p>
        </div>
        <div style={boxStyle}>
          <h3>Ways to Donate</h3>
          <ul>
            <p>You can directly donate to us using the <strong>QR Code</strong> provided below</p>
            <p> <br />You can directly transfer funds to our bank account. Contact <a href='mailto:bps.petpals@gmail.com'>our team</a> for more details</p>
            <p> <br />You can also click on the links below to donate to other charities</p>
            <p> <br /><strong>Donate via QR Code:</strong></p>
            <img src="https://api.qrcode-monkey.com/tmp/9ba0f145a766d690187fec11d08a2656.svg?1699388961510" alt="Donation QR Code" style={qrCodeStyle} />
        
          </ul>
        </div>
        <div>
          <h3>Explore Other Charities:</h3>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {charityLinks.map((charity, index) => (
              <a
                key={index}
                href={charity.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...charityCardStyle,
                  backgroundColor: index % 2 === 0 ? "white" : "#f4f4f4",
                  flex: "1",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e8e8e8";
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? "white" : "#f4f4f4";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
                }
                }
              >
                <img src={charity.imageSrc} alt={charity.name} style={charityImageStyle} />
                {charity.name}
              </a>
            ))}
          </div>
        </div>
        <p>
          For any questions or assistance with donations, please contact us at:{" "}
          <a href="mailto:bps.petpals@gmail.com">bps.petpals@gmail.com</a>
        </p>
        <Link to="/" style={{ fontSize: "20px", color: "#2b49bc", textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
}

export default Donations;
