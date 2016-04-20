# snapdeal-affiliate-client
[![NPM version](https://badge.fury.io/js/snapdeal-affiliate-client.svg)](https://www.npmjs.com/package/snapdeal-affiliate-client) 
[![Build Status](https://travis-ci.org/nigharsh/snapdeal-affiliate-client.svg?branch=master)](https://travis-ci.org/nigharsh/snapdeal-affiliate-client)

[![NPM](https://nodei.co/npm/snapdeal-affiliate-client.png?mini=true)](https://nodei.co/npm/snapdeal-affiliate-client/)

un-official client for [Snapdeal Affiliates API](https://affiliate.snapdeal.com)

## Installation
Install using npm:
```sh
npm install snapdeal-affiliate-client
```

## Usage
Require library
```javascript
var affiliate = require('snapdeal-affiliate-client');
```
Create client
```javascript
var client = affiliate.createClient({
  SdAffId: '(affiliate_id)',
  SdAffToken: '(affiliate_token)',
  responseType: '(json or xml)'
});
```
## Examples
examples based on usage
#### Product Feed
```javascript
client.getProductsFeed({
  url: '(url obtained from Category Feed)'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### Search Query based on Product
```javascript
client.idSearch({
  id: "627519118529"
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### Orders Report
```javascript
client.getOrdersReport({
  startDate: '2015-10-22',
  endDate: '2016-02-04',
  status: 'cancelled'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
#### App Install Report
```javascript
client.getAppInstReport({
  startDate: '2015-10-22',
  endDate: '2016-1-04'
}, function(err, result){
    if(!err){
      console.log(result);
    }else {
      console.log(err);
    }
});
```
