public with sharing class CaseController {
    
    //fetch 20 cases based on their createdDate ascending order
    @AuraEnabled(cacheable=true)
    public static List<Case> getCasesRecordsInSequence()
    {
        return [SELECT Id, Subject, Reason, Priority, Origin FROM Case ORDER BY CreatedDate LIMIT 20];
    }
}