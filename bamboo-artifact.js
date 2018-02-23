function refreshTooltip() {
  var target = document.querySelector('a[href$=app_versions\\.json]');
  var artifactURL = target && target.href;
  target && !target.hasAttribute('data-tooltip') && fetch(artifactURL,{credentials: 'include'})
    .then(resp => resp.json())
    .then(function(data){
      var artifactList = [];
      for(var i in data){ artifactList.push( ( i.padEnd(15,' ') + ' : ' + data[i].padEnd(15,' ') ) ) }
      target.setAttribute('data-tooltip',artifactList.join('\n'));
    });
}

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
var tabs = document.querySelector('.aui-tabs.horizontal-tabs.aui-tabs-disabled');

var observer = new MutationObserver(function (mutations) {
  for (var mutationIdx in mutations) {
    var mutation = mutations[mutationIdx];
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      if (!tabs.classList.contains('loading')) {
        refreshTooltip();
      }
    }
  }
})

observer.observe(tabs, { attributes: true });
refreshTooltip();