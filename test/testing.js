module.exports = {
  "Does not show the task list if there are no tasks": function(client) {
    client
      .url("http://business.nasdaq.com/")
      .waitForElementVisible(".container-fluid", 1000)
      .waitForElementVisible(".navbar-form a", 1000)
      .click(".navbar-form a")
      .pause(1000)
      .setValue(".navbar-form input[type=text]", "nasdaq")
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
  },
  "exprected results": function(client) {
    client.elements("css selector", ".navbar-nav li", function(result) {
      result.value.map(function(v, k) {
        client.elementIdAttribute(v.ELEMENT, "data-evar47", function(res) {
          // true
          console.log(res.value);
        });
      });
    });
    client.pause(1500);

    client.expect.element(".navbar-nav li: first-child:hover");
    client.pause(1000);
    client.expect.element(".navbar-nav li: first-child").to.have.css("active");
    client.pause(1500);
  }
};
