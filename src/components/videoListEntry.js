angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      handleClick: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
