import { LightningElement ,api ,track } from 'lwc';

export default class VariableUnderstanding extends LightningElement {

    // these are the private variables
    name = 'Saurabh';
    memberName = 'Abhishek';
    myFavTeam = 'Mumbai Indians';
    $myName = '';
    _myPlannet = '';

  // this is the private variable
    @track myPersonality = {
        sports: 'cricket',
        food: 'chinese',
        color: 'black'
    };


    // this is the public variable
    @api myFavCity = 'Pune';
    @api myFavMovie = 'Lord of the Rings'
    @api myFavSeason = 'Spring';

    @api tryingTHIS = 'Trying Now';
}