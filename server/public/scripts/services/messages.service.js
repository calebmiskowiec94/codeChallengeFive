myApp.service('MessagesService', ['$http', function ($http) {
    console.log('Message service loaded.');
    var self = this;
    self.messages = { list: [] };

    self.getMessages = function () {
        $http.get('/messages').then(function (response) {
            self.messages.list = response.data;
            console.log(response.data);
            console.log('get response: ', self.messages);
        });
    };
    self.getMessages();
}]); 