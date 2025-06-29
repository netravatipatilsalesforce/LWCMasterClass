import { LightningElement,track } from 'lwc';

export default class ReactivityCheck extends LightningElement {

    userAddress = 'Shivalingeshwar Nagar Narendra';

    @track myPersonalDetails =[
        {
            "_id": "68270c89b99ac92e9703f088",
            "index": 0,
            "guid": "8662f566-7a1e-4398-8a66-ad4f785b2a4e",
            "isActive": true,
            "balance": "$2,881.93",
            "picture": "http://placehold.it/32x32",
            "age": 27,
            "eyeColor": "green",
            "name": "Nellie Delaney",
            "gender": "female",
            "company": "PLASMOSIS",
            "email": "nelliedelaney@plasmosis.com",
            "phone": "+1 (988) 462-2387",
            "address": "173 Terrace Place, Camptown, Pennsylvania, 1235",
            "registered": "2023-04-16T12:34:14 -06:-30",
            "latitude": -47.320393,
            "longitude": 10.779708,
            "tags": [
            "deserunt",
            "tempor",
            "est",
            "esse",
            "cillum",
            "ut",
            "magna"
            ],
            "friends": [
            {
                "id": 0,
                "name": "Marla Holden"
            },
            {
                "id": 1,
                "name": "Callahan Snider"
            },
            {
                "id": 2,
                "name": "Berta Zimmerman"
            }
            ],
            "greeting": "Hello, Nellie Delaney! You have 8 unread messages.",
            "favoriteFruit": "apple"
        }
        ];

    updateAddress(){
        this.userAddress = 'Sambajinagar Aurangabad';
        this.myPersonalDetails[0].guid = "68270c89b99ac92e9703f088";
        this.myPersonalDetails[0].friends[0].name = 'Abhishek Dolas';
        this.myPersonalDetails[0].friends[1].name = 'Neha Patil';
        this.myPersonalDetails[0].friends[2].name = 'Netra Dolas';
    }
}
