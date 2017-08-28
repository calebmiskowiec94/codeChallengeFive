myApp.controller('MessagesController', ['MessagesService', function (MessagesService) {
    var self = this;
    self.MessagesThings = MessagesService.messages;


}]);