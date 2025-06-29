import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    //One way  binding - JS to HTML
    userName = 'Ravi';
    subscribeerScore = 50;
    // when we want- 2:39:19 PM  add the method(toLocaleTimeString())
    //for new Date() - Thu May 01 2025 14:44:19 GMT+0530 (India Standard Time) we getting whole information
    currentDate =new Date().toLocaleTimeString();
    totalLessonWatched = 50;

    // Like this we are giving for two way binding - HTML to JS
    memberStatus;

    updateMemberStatus(event){
        console.log('Event Target recieved : ' + typeof(event.target));
        console.log('Event Target recieved  : ' + event.target);
        console.log('Event Target recieved  : ' + event.target.value);
        console.log('Event Detail recieved  : ' + JSON.stringify(event.detail));
        this.memberStatus = event.detail.value;
    }

//JSON.stringify - We using this in JS console to convert any JSON object to string.
//JSON.parse - We using this in JS console to convert any JSON string to object.
//JSON.serialize - We using this in JS console to convert any JS object to JSON string.
//JSON.serialize - Apex class has inbuilt method called as toJSON. It will convert Apex class to JSON


   /*get handleMinuteWatched(){
    // return (this.totalLessonWatched * 10);
    return `The total Watch duration is:  ${this.totalLessonWatched * 10}`;
    }*/

    _minutesWatched = this.totalLessonWatched * 10;

    get minutesWatched (){
        return this._minutesWatched;// 500 on the page load
    }

    set minutesWatched(value){
        this._minutesWatched = value < 1000 ? value : 5000;
    }

    handleMinuteWatched(event){
        this.minutesWatched= event.target.value;
    }
    
}