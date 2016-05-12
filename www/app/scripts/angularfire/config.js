angular.module('firebase.config', [])
  .constant('FBURL', 'https://mixinaid.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','google','github'])

  .constant('loginRedirectPath', '/login');
