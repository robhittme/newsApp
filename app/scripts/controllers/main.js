'use strict';

angular.module('newsApp')
  .controller('MainCtrl', function ($scope, redditNews, $sce) {
	$scope.searchButton = function(searchTopic) {
		var redditQuery = searchTopic;
		var redditNewsData = redditNews.get({
			query: redditQuery
		});
		$scope.newsData = redditNewsData;
	
	};
	$scope.selectArticle = function(news) {
		$scope.framesrc = $sce.trustAsResourceUrl(news.data.url);
		var current = moment()._d;
		var oneWeek = moment(current).subtract("days", 7)._d;
		if(news.data.created_utc <= current && news.data.created_utc >= oneWeek) {
			alert("working");
		}
  	}
	// $scope.timelineFilter = function(current) {
	// 	$scope.newsData = redditNews.get();
	// 	$scope.current = newsData.data.children.created_utc;
	// 	console.log(current);
	// }
	// $scope.timelineFilter = function(news) {
	// 	var current = moment.unix(news.data.created_utc)._d;
	// 	var oneWeek = moment.unix(news.data.created_utc).subtract("days", 7)._d;
	// 	var twoWeeks = moment.unix(news.data.created_utc).subtract("days", 14)._d;
	// 	var threeWeeks = moment.unix(news.data.created_utc).subtract("days", 21)._d;
	// 	var fourWeeks = moment.unix(news.data.created_utc).subtract("days", 28)._d;
		
	// 	 for(var i = 0; i <= news.data.length; i++) {
		
	// 		if(news.data.created_utc >= oneWeek) {
	// 			console.log(news.data.created_utc)
	// 			angular.element(".firstWeek").html(news.data.title);
	// 		}	
	// 	};
	// }
	// create new data objects with redditNewsData by week
	// $scope.currentWeek = currentWeek
	// $scope.1wk = 
  });
