let nightwatch = require("nightwatch"),
  chai = require("chai"),
  chaiHttp = require("chai-http");
should = chai.should();

describe("Nasdaq business", function() {
  var client = nightwatch.initClient({
    silent: true
  });

  var browser = client.api();

  this.timeout(99999999);

  before(function() {
    browser.perform(function() {
      console.log("beforeAll");
    });
  });

  beforeEach(function(done) {
    browser.perform(function() {
      console.log("beforeEach");
    });

    client.start(done);
  });
  it.skip("should give response info", function(done) {
    chai.request
      .get(
        "http://business.nasdaq.com/webproxy/JSPP/proxy.asmx/Index?callback=angular.callbacks._2m&domain=nasdaq&index=ixic&partner=qnetwork&path=aspx%2FIndexData.ashx"
      )
      .end(function(err, res) {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
  it("Does not show the task list if there are no tasks", function(done) {
    browser
      .url("http://business.nasdaq.com/")
      .waitForElementVisible(".container-fluid", 1000)
      .waitForElementVisible(".navbar-form a", 1000)
      .click(".navbar-form a")
      .pause(1000)
      .setValue(".navbar-form input[type=text]", "nasdaq")
      .pause(1000)
      .waitForElementVisible("#today-activity-block", 1000)
      .pause(1000)
      .click(".input-group-addon")
      .pause(1000)
      .click(".navbar-toggle")
      .pause(1000)
      .assert.cssProperty("#nasdaq-menu", "display", "block")
      .waitForElementVisible(".sidr-class-b-close", 1000)
      .click(".sidr-class-b-close")
      .pause(1000)
      .assert.cssProperty("#nasdaq-menu", "display", "none")
      .pause(1500)
      .assert.containsText(
        "#t-insights-block .t-insights__news h5",
        "TODAY'S INSIGHTS"
      )
      .pause(1000);

    client.start(done);
  });

  it("should show chart drawer", function(done) {
    browser
      .url("http://business.nasdaq.com/")
      .waitForElementVisible(".container-fluid", 1000)
      .click("#today-activity-block .switch")
      .assert.cssProperty(".drawer-module", "display", "block")
      .pause(1000);
    client.start(done);
  });

  afterEach(function() {
    browser.perform(function() {
      console.log("afterEach");
    });
  });

  after(function(done) {
    browser.end(function() {
      console.log("afterAll");
    });

    client.start(done);
  });
});
