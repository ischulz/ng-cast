angular.module('video-player')
  .service('youTube', function($http) {
    this.search = _.debounce(function(query, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          maxResults: 5,
          part: 'snippet',
          q: query,
          type: 'video',
          videoEmbeddable: true,
          key: window.YOUTUBE_API_KEY
        }
      }).then(function(response) {
        callback(response.data.items);
        //console.log(response);
      });
    }, 500);
  });

  
