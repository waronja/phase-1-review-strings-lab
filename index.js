// Write your code in this file!

const currentUser = 'Thaiya Waronja';
const welcomeMessage = 'Welcome to Flatbook ' + currentUser + "!!" ;
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//Printing out the short Greeting 
const firstInitial = currentUser[0];
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log (shortGreeting);