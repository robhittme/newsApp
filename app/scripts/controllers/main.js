'use strict';

angular.module('newsApp')
  .controller('MainCtrl', function ($scope, redditNews, $sce) {
	$scope.searchButton = function(searchTopic) {
		var redditQuery = searchTopic;
		var redditNewsData = redditNews.get({
			query: redditQuery
		});
		$scope.newsData = redditNewsData;
		// var current = moment(news.data.created_utc);
		// var oneWeek = moment(news.data.created_utc).subtract("days", 7);
		// var twoWeeks = moment(news.data.created_utc).subtract("days", 14);
		// var threeWeeks = moment(news.data.created_utc).subtract("days", 21);
		// var fourWeeks = moment(news.data.created_utc).subtract("days", 28);
		// var current = moment(newsData.data.created_utc);
		

	};
	$scope.selectArticle = function(news) {
		$scope.framesrc = $sce.trustAsResourceUrl(news.data.url);
	}
	$scope.timelineFilter = function(news) {
		var current = moment(news.data.created_utc)._d;
		var oneWeek = moment(news.data.created_utc).subtract("days", 7)._d;
		var twoWeeks = moment(news.data.created_utc).subtract("days", 14)._d;
		var threeWeeks = moment(news.data.created_utc).subtract("days", 21)._d;
		var fourWeeks = moment(news.data.created_utc).subtract("days", 28)._d;
		for (var i = 0; i >= news.length + 1; i++) {
			if(news[i].data.created_utc >= oneWeek){
				angular.element(".firstWeek").html(news[i].data.title);
			}
		};

	}
  });


// var oneWeek = moment(news.data.created_utc).subtract("days", 7);
// var twoWeeks = moment(news.data.created_utc).subtract("days", 14);
// var threeWeeks = moment(news.data.created_utc).subtract("days", 21);
// var fourWeeks = moment(news.data.created_utc).subtract("days", 28);
