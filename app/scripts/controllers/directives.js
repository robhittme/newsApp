angular.module('newsApp.directive') 

	.directive('timelineLeft', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/leftItem.html'
		}
	})
	.directive('timelineRight', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/rightItem.html'
		}
	})
	.directive('navDirective', function(){
		return{
			restrict: 'E',
			templateUrl: 'views/tabs.html'
		}
	});