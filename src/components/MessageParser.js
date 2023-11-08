import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // Convert the message to lowercase for case-insensitive comparisons
    const lowerCaseMessage = message.toLowerCase();

    // Handle pet adoption
    if (lowerCaseMessage.includes('pet adoption') || lowerCaseMessage.includes('adopt') || lowerCaseMessage.includes('adoption')) {
      actions.handlePetAdoption(message);
    }

    // Handle pet rescue
    if (lowerCaseMessage.includes('pet rescue') || lowerCaseMessage.includes('rescue')) {
      actions.handlePetRescue(message);
    }

    // Handle SOS or emergency
    if (lowerCaseMessage.includes('emergency') || lowerCaseMessage.includes('sos') || lowerCaseMessage.includes('urgent')) {
      actions.handleSOS(message);
    }

    // Handle "about us" and related queries
    if (lowerCaseMessage.includes('about us') || lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what do you do') || lowerCaseMessage.includes('what is petpals') || lowerCaseMessage.includes('what petpals')|| lowerCaseMessage.includes('about')) {
      actions.handleAboutus(message);
    }

    // Handle "Bhupinder Jogi" and related queries
    if (lowerCaseMessage.includes('bhupinder jogi') || lowerCaseMessage.includes('jogi') || lowerCaseMessage.includes('bhupinder') || lowerCaseMessage.includes('america')) {
      actions.handleJogi(message);
    }

    // Handle "Bohot jagah" query
    if (lowerCaseMessage.includes('bohot jagah')) {
      actions.handleNaam(message);
    }

    // Handle contribution-related queries
    if (lowerCaseMessage.includes('contribute') || lowerCaseMessage.includes('contribution') || lowerCaseMessage.includes('how to help')|| lowerCaseMessage.includes('assist')|| lowerCaseMessage.includes('appreciate')) {
      actions.handleContribution(message);
    }

    // Handle injured pet-related queries
    if (lowerCaseMessage.includes('injured pet') || lowerCaseMessage.includes('help injured animal')|| lowerCaseMessage.includes('injured')|| lowerCaseMessage.includes('hurt')|| lowerCaseMessage.includes('injury pet')) {
      actions.handleInjuredPet(message);
    }

    // Handle when to rescue animal-related queries
    if (lowerCaseMessage.includes('when to rescue an animal') || lowerCaseMessage.includes('should I rescue an animal')|| lowerCaseMessage.includes('when rescue')) {
      actions.handleWhenToRescueAnimal(message);
    }

    // Handle securing a touchable pet-related queries
    if (lowerCaseMessage.includes('secure a touchable pet') || lowerCaseMessage.includes('how to pick up a cat or dog')|| lowerCaseMessage.includes('pick')
    || lowerCaseMessage.includes('pick up')|| lowerCaseMessage.includes('handle')) {
      actions.handleSecureTouchablePet(message);
    }

    // Handle securing an untouchable pet-related queries
    if (lowerCaseMessage.includes('secure an untouchable pet') || lowerCaseMessage.includes('how to trap an animal')|| lowerCaseMessage.includes('catch')|| lowerCaseMessage.includes('trap')|| lowerCaseMessage.includes('hold')
    || lowerCaseMessage.includes('no touch')|| lowerCaseMessage.includes('unctouchable')|| lowerCaseMessage.includes('angry')) {
      actions.handleSecureUntouchablePet(message);
    }

    // Handle transportation services-related queries
    if (lowerCaseMessage.includes('transportation for rescued animals') || lowerCaseMessage.includes('animal transport service')|| lowerCaseMessage.includes('animal transport')|| lowerCaseMessage.includes('trasnport')) {
      actions.handleTransportationServices(message);
    }

    // Handle treatment centers-related queries
    if (lowerCaseMessage.includes('treatment centers in Bangalore') || lowerCaseMessage.includes('where to get medical help for animals')|| lowerCaseMessage.includes('treatment centre')|| lowerCaseMessage.includes('hospital')|| lowerCaseMessage.includes('medical')|| lowerCaseMessage.includes('vet')|| lowerCaseMessage.includes('vetenary')
    || lowerCaseMessage.includes('medical help')) {
      actions.handleTreatmentCenters(message);
    }

    // Handle joining groups-related queries
    if (lowerCaseMessage.includes('join animal rescue groups') || lowerCaseMessage.includes('rescue group') || lowerCaseMessage.includes('animal group') || lowerCaseMessage.includes('join group')|| lowerCaseMessage.includes('group')) {
      actions.handleJoiningGroups(message);
    }

    // Handle reporting animal abuse-related queries
    if (lowerCaseMessage.includes('report animal abuse') || lowerCaseMessage.includes('how to report animal cruelty')|| lowerCaseMessage.includes('animal cruelty')|| lowerCaseMessage.includes('cruelty')|| lowerCaseMessage.includes('abuse')) {
      actions.handleReportAbuse(message);
    }

    // Handle large animal rescue-related queries
    if (lowerCaseMessage.includes('large animal rescue') || lowerCaseMessage.includes('help cows or horses')|| lowerCaseMessage.includes('large')) {
      actions.handleLargeAnimalRescue(message);
    }

    // Handle small animal rescue-related queries
    if (lowerCaseMessage.includes('small animal rescue') || lowerCaseMessage.includes('rescue birds, snakes, or small animals')|| lowerCaseMessage.includes('snakes')|| lowerCaseMessage.includes('bird')|| lowerCaseMessage.includes('small')) {
      actions.handleSmallAnimalRescue(message);
    }

    // You can add more condition handling here for other scenarios
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
