'use strict';

angular.module('newsApp')
  .controller('MainCtrl', function ($scope, redditNews, $sce, $filter) {
	$scope.searchButton = function(searchTopic) {
		var redditQuery = searchTopic;
		var current = moment(new Date()).unix();
		var oneMonth = moment(new Date()).subtract("days", 30).unix();
		var twoMonths = moment(new Date()).subtract("days", 60).unix();
		var threeMonths = moment(new Date()).subtract("days", 90).unix();
		var fourMonths = moment(new Date()).subtract("days", 120).unix();


		var redditNewsData = redditNews.get({
			query: redditQuery
		});
		console.log("current:", current)
		console.log("oneMonth:", oneMonth)
		$scope.postableNewsData = [];
		$scope.postableNewsData2 = [];
		$scope.postableNewsData3 = [];
		$scope.postableNewsData4 = [];
		$scope.newsData = redditNewsData;
		$scope.newsData.$promise.then(function(data) {
			var newsArray = data.data.children
			$.each(newsArray, function(index, article){
				if(article.data.created > oneMonth){
					$scope.postableNewsData.push(article)	
				} else {
					console.log("story is older, fuck it")
				}
			})

			console.log("postableNewsData: ",$scope.postableNewsData)
		});
		$scope.newsData.$promise.then(function(data) {
			var newsArray = data.data.children
			$.each(newsArray, function(index, article){
				if(article.data.created < oneMonth && article.data.created > twoMonths){
					$scope.postableNewsData2.push(article)	
				} else {
					console.log("story is older, fuck it")
				}
			})

			console.log("postableNewsData2: ",$scope.postableNewsData2)
		});
		$scope.newsData.$promise.then(function(data) {
			var newsArray = data.data.children
			$.each(newsArray, function(index, article){
				if(article.data.created < twoMonths && article.data.created > threeMonths){
					$scope.postableNewsData3.push(article)	
				} else {
					console.log("story is older, fuck it")
				}
			})

			console.log("postableNewsData3: ",$scope.postableNewsData3)
		});
		$scope.newsData.$promise.then(function(data) {
			var newsArray = data.data.children
			$.each(newsArray, function(index, article){
				if(article.data.created < threeMonths && article.data.created > fourMonths){
					$scope.postableNewsData4.push(article)	
				} else {
					console.log("story is older, fuck it")
				}
			})

			console.log("postableNewsData3: ", $scope.postableNewsData4)
		});
	};
	$scope.selectArticle = function(news) {
		$scope.framesrc = $sce.trustAsResourceUrl(news.data.url);
  	}

	
  });
