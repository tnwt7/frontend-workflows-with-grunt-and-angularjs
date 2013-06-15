angular.element(document).ready(function() {

  var app = angular.module("app");

  $.ajax({method: "GET", type: "json", url: "/auth/csrf_token"}).then(function(response) {
    app.constant("CSRF_TOKEN", response.csrf_token);
    angular.bootstrap(document, ['app']);
  });

});
