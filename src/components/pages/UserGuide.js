import React, { useState } from "react";
import { motion } from "framer-motion";

function UserGuide() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContent, setFilteredContent] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter content based on the search query
    if (query.trim() === "") {
      setFilteredContent([]);
    } else {
      const filtered = document.body.innerText
        .split('\n')
        .filter((line) => line.toLowerCase().includes(query));

      setFilteredContent(filtered);
    }
  }

  const pageStyle = {
    textAlign: "left",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "18px",
    color: "#333",
    backgroundColor: "white",
    padding: "20px",
  };

  const boxStyle = {
    padding: "20px 40px", // Adjust the padding as needed
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
    margin: "0 auto",
    maxWidth: "1000px",
    marginBottom: "20px",
    textAlign: "left",
    lineHeight: "1.6", // Add line spacing
  };
  
  const headingStyle = {
    textAlign: "center", // Center-align headings
  };

  const searchButtonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#2b49bc",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    //textAlign:centre++
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={pageStyle}
    >
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        />
        {filteredContent.length > 0 && (
          <div style={boxStyle}>
            <h2 style={headingStyle}>Search Results</h2>
            <ul>
              {filteredContent.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        )}
        <div style={boxStyle}>
          <h1
            style={{
              fontSize: "36px",
              color: "#2b49bc",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            A Guide to Animal Rescue in Bangalore
          </h1>
          <p>
            Welcome to our user guide! This guide will provide you with valuable
            information on how to handle pet rescue, emergency, and rehabilitation.
          </p>
          <p>
  A special thanks to Vladyslava for preparing this awesome guide | follow: {' '}
  <a href="https://www.instagram.com/_unabashed_rescue_ /" target="_blank">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Flogo-ig-png%2Fig-logo-png-instagram-blue-logo-png-4.png&f=1&nofb=1&ipt=33c5de5bf70bbc72ee41f68a39d73e9498d8562052905e099eb6a5f29b5694e8&ipo=images" alt="Instagram" width="24" height="24" style={{ verticalAlign: 'middle' }} />{' '}
    @Vladyslava 
  </a>
</p>

        </div>
        <div style={boxStyle}>
          <h2 style={headingStyle}>How rescue usually works</h2>
          <ol>
            <p><br/>
            <li>Most of the rescues are easy and consist of securing the animal and then sending it off for treatment.</li>
            <li>Both securing the animal as well as transporting it can be done with the help of hired private professionals. </li>
            <li>Expenses for securing the animal and transporting it with the help of hired private professionals wont be much and can be easily fundraised for in various WhatsApp and Facebook groups. </li>
            <li>There is no need to wait for a "team of rescues" or an "ambulance" to arrive.</li> 
            </p>
            <p>Way too often they simply never arrive. </p>
            <p>Be the rescuer yourself, lead the process, and take others help!</p>

          </ol>
        </div>
        <div style={boxStyle}>
        <h2>Who needs to be rescued</h2>
        <p>Not every animal needs to be rescued! It is not possible to admit every street dog to a shelter or find adopters for everyone out there.</p>
        <ol>
            <li>If an animal is an adult and does not have any injuries, and does not require medical attention — do not rescue it.
                <ul>
                    <li>Instead, feed it, give it water, provide shelter from the rain if possible, and keep an eye on it.</li>
                    <li>Adult dogs, even if relocated and in emotional distress, tend to adjust to new territories and new dogs over time.</li>
                    <li>In addition, shelters are always overcrowded and only agree to take in dogs that cannot otherwise survive on the streets, such as blind, deaf, or with missing limbs.</li>
                </ul>
            </li>
            <li>If an animal is a baby (kitten, puppy) but does not have any injuries, and does not require medical attention:
                <ul>
                    <li>Carefully assess the age of the animal. Is it indeed too small to survive on the streets? Then take it in and search for fosterers/adopters.</li>
                    <li>But if kittens/puppies run on their own and eat normal food — consider feeding them regularly and providing shelter in a relatively safe area on the street (a carton box with blankets, for example) instead of taking them in.</li>
                </ul>
                <p>As there is nothing worse than taking in a kitten/a puppy hoping it will get adopted soon and then releasing it back on the streets after months of a comfortable life during which they didn't get any skills of fending for themselves and surviving.</p>
                <ul>
                    <li>Search for the mother / the rest of the litter. Sometimes, mothers just leave to search for food. Sometimes, kids play with kittens/puppies and don't bring them back to the litter. Ask locals if they know anything. Do not take in small kittens and puppies right away. They have more chances of survival being with their mother, so there is nothing better than finding a mother and then feeding the mother regularly, and providing shelter.</li>
                </ul>
            </li>
        </ol>

        </div>
        <div style={boxStyle}>
        <section>
    <h2 style={headingStyle}>How to Secure a Cat</h2>

    <p>If the cat lets you touch it, it's easy to pick it up and put it in a box. Be careful, as cats in pain are likely to scratch; you can use a towel for protection. While an animal carrier is preferable, any box, even an Amazon carton box, would do. Ensure there is airflow circulation for the cat to breathe, but also make sure that the box is securely closed, as cats are fast and cunning escapers. Letting a cat escape in an unknown environment can be fatal despite the best intentions, so please be careful about securing the box the cat is in.</p>

    <p>If the cat doesn’t let you touch it, there are several methods you can use to capture it:</p>

    <ol>
        <li>
            <p><strong>Hire a Cat Catcher</strong></p>
            <ul>
                <li>Syed, personally vouched for expertise and reliability: +91 81055 36711</li>
                <li>Dinesh: +91 97389 94033</li>
                <li>Kiran: +918431885400</li>
            </ul>
            <p>Tips:</p>
            <ul>
                <li>Catchers can also help with transporting the animal.</li>
                <li>Discuss all costs and payment terms with the catcher, as they may have varying charges.</li>
                <li>Make sure to provide the catcher with all details about the situation, including the cat's temperament and the surrounding area.</li>
            </ul>
        </li>
        <li>
            <p><strong>Rent/Make a Trap</strong></p>
            <p>A professional trap is the easiest way to catch a non-friendly cat. You can place food inside the trap (raw meat works best), and leave the cat alone. The cat, feeling comfortable being alone, will enter the trap to get the food, and the trap will automatically close.</p>
            <p>Such traps can be rented at:</p>
            <ul>
                <li>Let's Live Together at 500 INR a day (with a 5000 INR refundable security deposit): +91 99864 13916</li>
                <li>CUPA Admin Office at 500 INR a week (with a 5000 INR refundable security deposit): +91 99722 44078</li>
                <li>Vladyslava (initial author of this guide) intends to provide her trap for free with a minimum refundable security deposit amount; reachable at +91 799 33 81 521.</li>
                <li>One of the volunteers also owns such a trap and can lend it to people. Contact via WhatsApp: +91 99800 72775</li>
            </ul>
            <p>Tips:</p>
            <ul>
                <li>Usually, organizations that rent out traps require in-person pickup and drop-off. In emergencies, you may request online payment of the deposit and document signing, and arrange for pickup and drop-off through delivery services like Dunzo or Swiggy Genie.</li>
                <li>The deposit is charged to ensure responsible use of the traps. In emergencies, you may request to leave your passport as a deposit instead of money or seek help from volunteer groups to pay this refundable deposit.</li>
            </ul>
        </li>
        <li>
            <p><strong>Make a Similar Trap</strong></p>
            <p>A similar trap can be made by using a standard cage borrowed from a volunteer or a pet parent. Tie a long rope to the door, leave food inside, and wait from a distance for the cat to enter the cage. Once all four legs of the cat are inside the cage, pull the rope fast to close the door. If there is any vacant room nearby that the cat can potentially enter when food is thrown inside, you can use the same mechanism with a room instead of a cage by tying the rope to the room’s door. However, do not enter the room on your own, as cornered cats can get very aggressive. Seek help from transportation people whose contacts are provided below.</p>
        </li>
    </ol>

    <p>There are also a few videos on YouTube that show how to hand-make different cat traps. While the efficiency of these traps may vary, you can explore them as an option.</p>

    <p>If none of these methods work, please call the below numbers and inform them of the situation in detail:</p>

    <ul>
        <li><strong>Government Helpline:</strong> 8277100200</li>
        <li><strong>Alai Rescue:</strong> 9739288282</li>
        <li><strong>Care Rescue:</strong> 9035999372</li>
        <li><strong>Krupa Rescue:</strong> 9880563690</li>
        <li><strong>Girish Rescue:</strong> 9632201065</li>
        <li><strong>CUPA Rescue:</strong> 9845425678</li>
        <li><strong>Sarvotham Rescue:</strong> 8123571619</li>
        <li><strong>Friend For Animal Trust:</strong> 814762000</li>
    </ul>
    </section>

    </div>
        <div style={boxStyle}>
        <section>
    <h2 style={headingStyle}>How to Secure a Dog</h2>
    
    <p><strong>1. Leash</strong></p>
    <p>Ideal for cases where the dog is friendly and is comfortable eating food near you.</p>
    <p><a href="https://example.com">Click here to see a detailed video explanation of this method.</a></p>
    <p><strong>Things to remember:</strong></p>
    <ul>
        <li>Any leash or even a rope would do.</li>
        <li>If you do not have a box/a room to put an animal in right after you secure it and you are going to use the transportation services listed below — it is better to simply follow the animal until the transport arrives, and only when the transport arrives proceed with securing it. The whole operation then would be less stressful, as the moment you secure the dog on a leash, the transportation person can help right then and there by putting the animal in a net.</li>
        <li>Once secured — don’t let the animal escape. It will learn a lesson and will not let you catch it the same way again. Stay alert even if the animal seemingly calms down and relaxes.</li>
        <li>Do not let the animal choke — once secured, put two fingers in between a leash and a neck.</li>
        <li>Don’t panic — their resistance won’t last forever. Push the dog’s face and body toward the ground, and in 3-5 minutes it will calm down.</li>
    </ul>
    <p>And here is a video of how to muzzle a dog with any rope!</p>

    <p><strong>2. Trap in a Room</strong></p>
    <p>By throwing the chicken inside from a distance, and closing the door once the dog is inside. The door can be closed from a distance by tying a rope to it in advance.</p>
    <p>Once the dog is closed in the room — people providing transportation services (listed below) generally are capable of entering the room with a net and securing the dog.</p>

    <p><strong>3. Hire a Dog Catcher</strong></p>
    <p>Hiring a professional dog catcher is ideal for those cases when there is no room around to trap the dog in, and the dog is too aggressive or terrified to let people come close to them even when food is used.</p>
    <p><strong>Tips:</strong></p>
    <ul>
        <li>Catchers can also help with transporting the animal.</li>
        <li>Make sure to discuss all the costs included and terms of payment with the catcher for each particular case. Some catchers charge extra for fuel, for nighttime, etc. Some catchers charge nothing if the catch fails, some charge just fuel if the catch fails, and some charge the full amount irrespective of whether or not the catch is successful.</li>
        <li>Make sure to let the catcher know all the details about the situation such as previous attempts at catching the dog, its temperament (friendly/scared/aggressive), its surrounding area, etc.</li>
    </ul>
    
    <p><strong>Below are the contacts of professional dog catchers:</strong></p>
    <ul>
        <li>Syed, whom I (Vladyslava) have worked with personally and can vouch for his expertise and reliability: +91 81055 36711</li>
        <li>Kiran: +91 70192 92003 or +91 88928 12010</li>
        <li>Dinesh: +91 97389 94033</li>
        <li>+91 808 82 52 132 Deepak</li>
    </ul>

    <p><strong>IF NOTHING WORKS, PLEASE CALL THE BELOW NUMBERS AND INFORM THEM OF THE SITUATION IN DETAIL:</strong></p>
    <ul>
        <li>Government Helpline: 8277100200</li>
        <li>Alai Rescue: 9739288282</li>
        <li>Care Rescue: 9035999372</li>
        <li>Krupa Rescue: 9880563690</li>
        <li>Girish Rescue: 9632201065</li>
        <li>CUPA Rescue: 9845425678</li>
        <li>Sarvotham Rescue: 8123571619</li>
        <li>Friend For Animal Trust: 8147620003 (for cases around Vasanthnagar, Fraser Town, R T Nagar, Ulsoor)</li>
    </ul>

    <p>When reporting a case to the numbers above, make sure to include the exact location, video of the animal, and contact number of someone who can show the animal when rescuers arrive.</p>
</section>

        </div>
        <div style={boxStyle}>
        <section>
    <h2 style={headingStyle}>How to Transport a Cat/Dog</h2>
    
    <p>Transporting a cat or dog can be done in several ways:</p>

    <p><strong>1. Auto or Personal Vehicle</strong></p>
    <p>You can use your own vehicle, such as an auto, car, or scooter, to transport the animal to its destination. Ensure you secure the animal properly to prevent it from escaping during the journey. If using your personal vehicle, keep the windows closed and provide proper ventilation.</p>

    <p><strong>2. Pet Transportation Service</strong></p>
    <p>You can also hire a professional pet transportation service that specializes in moving animals. These services have vehicles equipped with carriers or nets for transporting cats and dogs. However, please note that these carriers may have a strong animal smell that can distress some animals. To minimize the chances of your pet smelling other animals and becoming anxious, try to secure your pet in advance using a leash or other methods before the transportation service arrives.</p>

    <p><strong>Costs for each case:</strong></p>
    <p>Discuss the transportation costs with the service provider for each specific case. Costs may vary depending on the distance, size of the animal, and other factors.</p>

</section>

        </div>
        <div style={boxStyle}>
        <section>
    <h2 style={headingStyle}>Groups and Contacts for Animal Rescue</h2>

    <h3>WhatsApp Groups</h3>
    <p>If you need urgent help or require fundraising support, consider posting your request in multiple groups, even if the locations don't exactly match.</p>
    <ul>
        <li><strong>Catmosphere</strong> - for cats only. To be added, please WhatsApp the admin: +91 9902624697</li>
        <li><strong>Dawg Squad</strong> - WhatsApp the admin for addition: +91 9480521596</li>
        <li><strong>Local Canine Squad Groups</strong> - WhatsApp the admin for community-specific groups: +91 8197037554 or +91 9880713031</li>
        <li><strong>South B’lore Rescue Zone</strong> - WhatsApp the admin: +91 7406343464 or +91 8861979295</li>
    </ul>

    <h3>Facebook Groups</h3>
    <ul>
        <li><strong>Animals Club Of Bangalore</strong></li>
        <li><strong>Animal Rescue, Bangalore</strong></li>
        <li><strong>Adopt/Foster a Cat (Bangalore)</strong></li>
        <li><strong>Fans Of Cats, Bangalore</strong></li>
        <li><strong>Cat Care, Adoption, and Treatment (CAT) - Bangalore Chapter</strong></li>
        <li><strong>Pet Parents, Bangalore</strong></li>
        <li><strong>Pet Adoption Bangalore</strong></li>
        <li><strong>Pet Adoption - Bangalore</strong></li>
        <li><strong>Genuine Animal Lovers of Bangalore</strong></li>
        <li><strong>Pet Adoption in Bangalore, India</strong></li>
        <li><strong>Love for Animals</strong></li>
        <li><strong>Dog Lovers Bangalore</strong></li>
        <li><strong>Bangalore Animal Welfare Group</strong></li>
        <li><strong>Save Bangalore Strays</strong></li>
        <li><strong>Citizens for Animal Birth Control</strong></li>
    </ul>

    <h3 style={headingStyle} >Other Useful Contacts</h3>
    <ul>
        <li><strong>Harish</strong> from PFA (People for Animals) - for legal action against animal abusers: +91 7892886992 or +91 8861781775 (try both numbers)</li>
        <li><strong>Dog Burial Services</strong> - +91 9538966995 or +91 9844037424</li>
        <li><strong>BBMP Rabies Helpline</strong> - +91 6364893322</li>
    </ul>
</section>

        </div>
        <div style={boxStyle}>
          <h2 style={headingStyle}>Contact Us</h2>
          <p>
            If you have any questions or need assistance, feel free to contact us:
          </p>
          <p>
            Email: <a href="mailto:bps.petpals@gmail.com">bps.petpals@gmail.com</a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default UserGuide;
