angular.module('video-player')

  .component('search', {
    bindings: {
      search: '<',
      query: '@'
    },
    templateUrl: 'src/templates/search.html'
  });
