'use strict';
angular.module('newsApp')
.factory('redditNews', function($resource) {
	var tagSearch = "http://www.reddit.com/r/news+truenews/search.json?q=:query&limit=100";
	return $resource(tagSearch,
		{
			query: "@query"
	}, 
	{
		get: {method: 'GET'}
	});

});