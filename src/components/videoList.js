angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      handleClick: '<'
    },
    templateUrl: 'src/templates/videoList.html'

  });
