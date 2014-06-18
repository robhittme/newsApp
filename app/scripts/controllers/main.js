'use strict';

angular.module('newsApp')
  .controller('MainCtrl', function ($scope, redditNews, $sce, $filter) {
	$scope.searchButton = function(searchTopic) {
		var redditQuery = searchTopic;
		var current = moment(new Date()).unix();
		var oneWeek = moment(new Date()).subtract("days", 30).unix();
		var redditNewsData = redditNews.get({
			query: redditQuery
		});
		console.log("current:", current)
		console.log("oneWeek:", oneWeek)
		$scope.postableNewsData = []
		$scope.newsData = redditNewsData;
		// $scope.newsData.$promise.then(function(data) {
		// 	var newsArray = data.data.children
		// 	console.log("news array is:", newsArray)
		// 	$.each(newsArray, function(index, article){
		// 		console.log(article.data.created)
		// 	})

			
		// });

		$scope.newsData.$promise.then(function(data) {
			var newsArray = data.data.children
			$.each(newsArray, function(index, article){
				if(article.data.created > oneWeek){
					$scope.postableNewsData.push(article)	
				} else {
					console.log("story is older, fuck it")
				}
			})

			console.log("postableNewsData: ",$scope.postableNewsData)
		});



		// $scope.$watch('redditNewsData', function(oldVal, newVal) {
		// 	setTimeout(function() {
		// 		var len = $scope.redditNewsData.data.children.length;
		// 		var arr = $scope.redditNewsData.data.children.created_utc;
		// 	for (var i = 0; i <= len; i++) {
		// 		if(arr[i] <= current && arr[i] >= oneWeek) {
		// 			console.log(arr[i].data[i].created);
		// 			console.log("we are in")
		// 		// } else {
		// 		// 	console.log("it did not work");
		// 		}	
				
		// 	};

		// 	console.log($scope.thisWeek);

		// 	}, 1000)	
			

				
			
		// });

	
	};
	$scope.selectArticle = function(news) {
		$scope.framesrc = $sce.trustAsResourceUrl(news.data.url);
		var current = moment()._d;
		var oneWeek = moment(current).subtract("days", 7)._d;

  	}
	$scope.thisWeek = [];
  	$scope.timelineFilter = function(time) {
  	
  		var current = moment()._d;
		var oneWeek = moment(current).subtract("days", 7)._d;
  		var arr = time.data.created_utc;
  		console.log(arr)
  		if(arr <= oneWeek) {
  			$scope.thisWeek.push(arr);
  			// for (var i = 0; i >= $scope.thisWeek.length - 1; i++) {
  			// 	var dateWeek = moment($scope.thisWeek[i])._d;
  			// 	return dateWeek;
  			// 	console.log(dateWeek)
  			// };
  			// console.log($scope.thisWeek)
  		} else {
  			return "not working";
  		};
  	}
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
