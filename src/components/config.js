import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import PetOptions from './components/PetOptions';
import EmergencyDetails from './components/EmergencyDetails'; // Import the EmergencyDetails widget
import RescueDetails from './components/RescueDetails';
import Adoption2Signup from './components/Adopt2Signup';
import data from './data';

const config = {
  botName: 'PetHelper Bot',
  initialMessages: [
    createChatBotMessage('Welcome to PetHelper! How can I assist you today?', {
      widget: 'petOptions',
    }),
  ],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
  },
  state: {
    checker: null,
    data,
    userData: {
      name: '',
      action: '', // New field to track user's pet-related action (adoption, rescue, SOS)
      petInfo: null, // Store information about the pet when needed
      emergencyDetails: '', // Store emergency details when user requests SOS
      location: '', // New field to store user location
    },
  },
  widgets: [
    {
      widgetName: 'petOptions',
      widgetFunc: (props) => <PetOptions {...props} />,
    },
    {
      widgetName: 'emergencyDetails',
      widgetFunc: (props) => <EmergencyDetails {...props} />, // Use the EmergencyDetails widget
    },
    {
      widgetName: 'Adoption2Signup',
      widgetFunc: (props) => <Adoption2Signup {...props} />,
    },
    {
      widgetName: 'RescueDetails',
      widgetFunc: (props) => <rescueDetails {...props} />,
    },
  ],
};

export default config;
