public  class independentWiresController {
    
    @AuraEnabled(cacheable = true)
    public static List<Case> getCases()
    {
        return [ SELECT Id, Subject, Reason, Priority, Origin FROM Case ORDER BY CreatedDate LIMIT 5];
       
    }

     @AuraEnabled(cacheable = true)
    public static List<Task> getTasks()
    {
        return [SELECT Id, Subject, Status, ActivityDate , Description FROM Task LIMIT 5];
    }
}