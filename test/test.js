var affiliate = require('../lib/index');

var client = affiliate.createClient({
  SdAffId: process.env.SD_ID,
  SdAffToken: process.env.SD_TOK,
  responseType: 'json'
});

describe('API requests',function(){
  describe('idSearch',function(){
    it('response should not return an error', function(done){
      client.idSearch({
        id: "627519118529"
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getOrdersReport',function(){
    it('response should not return an error', function(done){
      client.getOrdersReport({
        startDate: '2016-01-01',
        endDate: '2016-04-10',
        status: 'approved'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getAppInstReport',function(){
    it('response should not return an error', function(done){
      client.getAppInstReport({
        startDate: '2015-10-22',
        endDate: '2016-1-04'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
  describe('getProductsFeed',function(){
    it('response should not return an error', function(done){
      client.getProductsFeed({
        url: 'http://affiliate-feeds.snapdeal.com/feed/api/category/v1:1145:666941230454?expiresAt=1461191400001&signature=djrgjmcloefimlyriscl'
      }, function(err, result){
          if(err) throw err;
          done();
      });
    });
  });
});
