  var _elqQ = _elqQ || [];
  _elqQ.push(['elqSetSiteId', '1981692173']);
  _elqQ.push(['elqTrackPageView']);
  _elqQ.push(['elqSetSiteId', '609404931']);
  _elqQ.push(['elqTrackPageView']);
  _elqQ.push(['elqSetSiteId', '453941583']);
  _elqQ.push(['elqTrackPageView']);
  
  var s = [];
  s.t = function() {
    return false;
  }

  function async_load() {
    s = document.createElement('script'); 
    s.type = 'text/javascript'; s.async = true;
    s.src = 'js/nasdaq/elqCfg.min.js';
    var x = document.getElementsByTagName('script')[0]; 
    x.parentNode.insertBefore(s, x);
  }

  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', async_load, false);
  } else if (window.attachEvent) {
    window.attachEvent('onload', async_load);
  }
