public with sharing class TaskController {

    @AuraEnabled(cacheable = true)
    public static List<Task> fetchTaskBySubject( String subjectString)
    {
        return [SELECT Id, Status, Reason, Subject, Priority, ActivityDate FROM Task WHERE Subject = :subjectString];
    }
} 