var request = require('request'),
utils = require('./utils');

var runSDQuery = function (credentials, method) {
  return function (query, cb) {
    var url = utils.genSnapdealUrl(query, credentials, method);
    if (typeof cb === 'function') {
      request.get({
        'url' : url,
        'headers' : {
          'Snapdeal-Affiliate-Id' : credentials.SdAffId,
          'Snapdeal-Token-Id' : credentials.SdAffToken,
          'Accept' : credentials.responseType === 'xml' ? 'application/xml' : 'application/json'
        }
      }, function(err, response, body){
        if (err) {
          cb(err);
        }
        else if (!response) {
          cb("No response recieved (check internet connection)");
        }
        else if (response.statusCode == 400) {
          cb("Error: Bad request. Invalid input parameters");
        }
        else if (response.statusCode == 401) {
          cb("Error: Unauthorized. API Token or Affiliate Tracking ID invalid");
        }
        else if (response.statusCode == 403) {
          cb("Error: Forbidden. Tampered URL");
        }
        else if (response.statusCode == 404) {
          cb("Error: Not found");
        }
        else if (response.statusCode == 410) {
          cb("Error: URL expired");
        }
        else if (response.statusCode == 500) {
          cb("Error: Internal server error");
        }
        else if (response.statusCode == 503) {
          cb("Error: Service unavailable");
        }
        else if (response.statusCode == 599) {
          cb("Error: Connection timed out");
        }
        else if (response.statusCode == 200){
          cb(null, body);
        }else{
          cb(response);
        }
      });
    }
  }
}


var createClient = function (credentials) {
  return {
    idSearch: runSDQuery(credentials,'idSearch'),
    getOrdersReport: runSDQuery(credentials,'getOrdersReport'),
    getAppInstReport: runSDQuery(credentials,'getAppInstReport'),
    getProductsFeed: runSDQuery(credentials,'getProductsFeed')
  };
};

exports.createClient = createClient;
