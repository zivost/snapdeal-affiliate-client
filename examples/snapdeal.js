var affiliate = require('../lib/index');

var client = affiliate.createClient({
  SdAffId: process.env.FK_ID,
  SdAffToken: process.env.FK_TOK,
  responseType: 'json'
});

client.idSearch({
  id: "627519118529"
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getOrdersReport({
  startDate: '2015-10-22',
  endDate: '2016-04-04',
  status: 'cancelled'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getAppInstReport({
  startDate: '2015-10-22',
  endDate: '2016-04-01'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});

client.getProductsFeed({
  url: 'http://affiliate-feeds.snapdeal.com/feed/api/category/v1:1145:666941230454?expiresAt=1461191400001&signature=djrgjmcloefimlyriscl'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
