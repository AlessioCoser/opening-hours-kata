var chai = require('chai');
var expect = chai.expect;
var shop = require("./opening_hours");

const WEDNESDAY = '2016-05-11T12:22:11.824Z';
const THURSDAY = '2016-05-12T12:22:11.824Z';

describe('Is open on', function() {
  it('Shop is open on wednesday', function() {
    expect(shop.isOpenOn(WEDNESDAY)).to.eql(true);
  });
  it('Shop is not open on thursday', function() {
    expect(shop.isOpenOn(THURSDAY)).to.eql(false);
  });
  it('Shop is not open on thursday until 7:59', function() {
    expect(shop.isOpenOn(THURSDAY)).to.eql(false);
  });
  it('Shop is not open on thursday from 16:01', function() {
    expect(shop.isOpenOn(THURSDAY)).to.eql(false);
  });
});
