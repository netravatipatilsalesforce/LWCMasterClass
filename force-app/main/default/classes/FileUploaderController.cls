public  class FileUploaderController {
   
    @AuraEnabled
    public static void uploadFileToAccount(String fileName, String base64Data, 
                                             String contentType, String accountId)
    {
        try
        {
            if(String.isBlank(fileName) || String.isBlank(base64Data) ||  String.isBlank(accountId))
            {
                throw new AuraHandledException('Missing required file data or Account Id');
            }

            ContentVersion cv = new ContentVersion();
            cv.Title= fileName.contains('.') ? fileName.substring(0,fileName.lastIndexOf('.')) : fileName;
            cv.PathOnClient = fileName;
            cv.VersionData = EncodingUtil.base64Decode(base64Data);
            cv.Origin = 'H';
            insert cv;

            ContentDocumentLink cdl = new ContentDocumentLink();
            cdl.ContentDocumentId = [Select ContentDocumentId from ContentVersion where Id =: cv.Id].ContentDocumentId;
            cdl.LinkedEntityId = accountId;
            cdl.ShareType= 'V';
            cdl.Visibility = 'AllUsers';
            insert cdl;
        }
        catch(exception ex){
             throw new AuraHandledException('Upload Failed' +ex.getMessage());
        }
       
    }
    
}