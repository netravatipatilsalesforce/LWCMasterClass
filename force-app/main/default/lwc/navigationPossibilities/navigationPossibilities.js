import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationPossibilities extends NavigationMixin(LightningElement) {

    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001dM00000JiXYQQA3',
                objectAPIName: 'Account', 
                actionName: 'view'
            }
        })
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.youtube.com/@salesforcemakessense'
            }
        })
    }

    navigateToCustomTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Employees' // check Developer Name in Tabs setup
            }
        });
    }

    navigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'AllAccounts' // must match List View API Name
            }
        });
    }
}