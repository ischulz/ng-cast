angular.module('video-player')
  .controller('videoCtrl', function($scope, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    
    youTube.search('dogs', (data) => {
      this.currentVideo = data[0];
      this.videos = data;
    });
    

    this.handleClick = (video) => {
      this.currentVideo = video;
    }; 
    this.searchResults = (query) => {
      youtube.search(query, (data) => {
        this.currentVideo = data[1];
        this.videos = data;
      });
    };
  })

  .component('app', {
    controller: 'videoCtrl',
    templateUrl: 'src/templates/app.html'
  });


