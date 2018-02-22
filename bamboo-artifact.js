document.querySelector('body').addEventListener('click', function(e){
	var artifactURL = e.target.href;
	if( artifactURL && artifactURL.indexOf('app_versions.json') !== -1){
		e.preventDefault();
        !e.target.hasAttribute('data-tooltip') && fetch(artifactURL,{credentials: 'include'})
			.then(resp => resp.json())
			.then(function(data){
				var artifactList = [];
            	for(var i in data){ artifactList.push( (i.padEnd(15,' ') + ' : ' + data[i].padEnd(15,' ') ) ) }
				e.target.setAttribute('data-tooltip',artifactList.join('\n'));
			})
	}
});