var genQueryParams = function (query, method, credentials) {
  var params = '';
  for(var pr in query){
      params = params + pr + '=' + query[pr] + '&';
  }
  params = params.substring(0, params.length - 1);
  return params;
}

var genSnapdealUrl = function(query, credentials, method) {
  var url = '';
  if (method === 'idSearch') {
    preUrl = 'http://affiliate-feeds.snapdeal.com/feed/product?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getOrdersReport') {
    preUrl = 'http://affiliate-feeds.snapdeal.com/feed/api/order?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getAppInstReport') {
    preUrl = 'http://affiliate-feeds.snapdeal.com/feed/app_reports?';
    url = preUrl + genQueryParams(query, method, credentials);
  }
  else if (method === 'getProductsFeed') {
    url = query['url'];
  }
  return url;
}

exports.genSnapdealUrl = genSnapdealUrl;
