'use strict';

angular.module('newsApp')
  .controller('MainCtrl', function ($scope, redditNews, $sce) {
	var redditNewsData = redditNews.get();
	$scope.newsData = redditNewsData; 
	$scope.searchButton = function(searchTopic) {
		var redditQuery = searchTopic;
		var redditNewsData = redditNews.get({
			query: redditQuery
		});
		$scope.newsData = redditNewsData;

	};
	$scope.selectArticle = function(news) {
		$scope.framesrc = $sce.trustAsResourceUrl(news.data.url);
		var first = moment.unix(news.data.created_utc);
		console.log(first._d);
	}

		
 //  	var utcSeconds = "";
	// var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
	// date.setUTCSeconds(utcSeconds);
	// return date;
  });
