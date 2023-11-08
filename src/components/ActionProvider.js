import React from 'react';
import EmergencyDetails from './components/EmergencyDetails';
import RescueDetails from './components/RescueDetails';
import Adoption2Signup from './components/Adopt2Signup';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handlePetAdoption = () => {
    const widgetmessage = createChatBotMessage('Click here to adopt a pet');
    widgetmessage.widget = 'Adoption2Signup';
    updateState(widgetmessage, 'adoption');
  };

  const handlePetRescue = (checker) => {
    const widgetmessage = createChatBotMessage('Rescue');
    widgetmessage.widget = 'RescueDetails';
    updateState(widgetmessage, 'rescue');

  };
  const handleAboutus = (checker) => {
    const message = createChatBotMessage('At petpals we are dedicated to assisting pets in need of rescue and rehabilitation, and ultimately connecting them with loving homes. Our doors and hearts are open to pets seeking a new family. How can we assist you today?');
    updateState(message, 'about');
  };
  const handleContribution = (checker) => {
    const message = createChatBotMessage("You can contribute to pet rescue and rehabilitation by volunteering with local animal rescue groups, offering your time and resources, and participating in fundraising efforts to support their work.");
    updateState(message, "contribution");
};

const handleInjuredPet = (checker) => {
    const message = createChatBotMessage("If you encounter an injured or distressed cat or dog on the street, try to secure them safely using the methods described in the guide. If it's a medical emergency, contact nearby animal rescue organizations or veterinarians for assistance.");
    updateState(message, "injuredPet");
};

const handleWhenToRescueAnimal = (checker) => {
    const message = createChatBotMessage("It's necessary to rescue an animal when it's injured, in pain, or unable to fend for itself. If an animal is healthy and doesn't require medical attention, it's best to provide food, water, and shelter and observe from a distance.");
    updateState(message, "whenToRescueAnimal");
};

const handleSecureTouchablePet = (checker) => {
    const message = createChatBotMessage("If the cat or dog is approachable, you can gently pick it up and place it in a secure box or carrier. Be cautious as cats in pain may scratch, and ensure there's proper ventilation in the box.");
    updateState(message, "secureTouchablePet");
};

const handleSecureUntouchablePet = (checker) => {
    const message = createChatBotMessage("If the animal is not approachable, you can hire a cat or dog catcher, use professional traps, or follow specific methods mentioned in the guide, such as creating a makeshift trap with a standard cage.");
    updateState(message, "secureUntouchablePet");
};

const handleTransportationServices = (checker) => {
    const message = createChatBotMessage("There are individuals and services listed in the guide that offer transportation for rescued animals. You can contact them to arrange for the safe transportation of the animals.");
    updateState(message, "transportationServices");
};

const handleTreatmentCenters = (checker) => {
    const message = createChatBotMessage("Yes, there are several treatment centers in Bangalore as listed in the guide. You can contact these centers directly, and they often offer free or subsidized treatment for rescued animals.");
    updateState(message, "treatmentCenters");
};

const handleJoiningGroups = (checker) => {
    const message = createChatBotMessage("You can join WhatsApp and Facebook groups mentioned in the guide by reaching out to their administrators or community leaders for membership.");
    updateState(message, "joiningGroups");
};

const handleReportAbuse = (checker) => {
    const message = createChatBotMessage("You can contact individuals, such as Harish from PFA, who can assist in reporting animal abuse and taking legal action against abusers. Legal helplines and government agencies can also be notified.");
    updateState(message, "reportAbuse");
};

const handleLargeAnimalRescue = (checker) => {
    const message = createChatBotMessage("For larger animals, you can contact government veterinarians, CUPA LARRC, or individuals who specialize in rescuing and rehabilitating larger animals as mentioned in the guide.");
    updateState(message, "largeAnimalRescue");
};

const handleSmallAnimalRescue = (checker) => {
    const message = createChatBotMessage("Yes, there are organizations listed in the guide that specialize in rescuing small wild animals, birds, and snakes. You can contact them for assistance in rescuing and caring for these animals.");
    updateState(message, "smallAnimalRescue");
};

  const handleJogi = (checker) => {
    const message = createChatBotMessage('Amrika mein kaha kaha gaye ho?');
    updateState(message, 'jogi');
    console.log(checker)
  };
  const handleNaam= (checker) => {
    const message = createChatBotMessage('Naam?');
    updateState(message, 'naam');
    console.log(checker)
  };

  const handleSOS = () => {
    const widgetMessage = createChatBotMessage('Use the above form to access emergency contact details'); // Add a space as the message text.
    widgetMessage.widget = 'EmergencyDetails';
  
    updateState(widgetMessage, 'emergency');
  };

  const updateState = (message, checker) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handlePetAdoption,
            handlePetRescue,
            handleSOS,
            handleAboutus,
            handleContribution,
            handleInjuredPet,
            handleWhenToRescueAnimal,
            handleSecureTouchablePet,
            handleSecureUntouchablePet,
            handleTransportationServices,
            handleTreatmentCenters,
            handleJoiningGroups,
            handleReportAbuse,
            handleLargeAnimalRescue,
            handleSmallAnimalRescue,
            handleJogi,
            handleNaam,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
