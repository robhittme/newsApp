'use strict';

angular.module('newsApp')
.factory('redditNews', function($resource) {
	var tagSearch = "http://www.reddit.com/r/politics+news+truenews+worldnews/search.json?q=:query&restrict_sr=on&sort=relevance&t=all&limit=100";
	return $resource(tagSearch,
		{
			query: "@query"
	}, 
	{
		get: {method: 'GET'}
	});

});
