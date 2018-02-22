var target = document.querySelector('a[href$=app_versions\\.json]');
var artifactURL = target.href;
!target.hasAttribute('data-tooltip') && fetch(artifactURL,{credentials: 'include'})
  .then(resp => resp.json())
  .then(function(data){
    var artifactList = [];
    for(var i in data){ artifactList.push( ( i.padEnd(15,' ') + ' : ' + data[i].padEnd(15,' ') ) ) }
    target.setAttribute('data-tooltip',artifactList.join('\n'));
  });
