/**
* PrizeCoupon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  identity: "PrizeCoupon",
  attributes: {
      appUser: {model: 'AppUser'},
      advertisement: {model: 'advertisement'},
      redeemLocation: {type: 'string'},
      prize: {type: 'string'},
      coupon_expiredDate: {type: 'date'}
  }
};

