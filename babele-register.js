Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'coc7-babele-sv',
			lang: 'sv',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/coc7-babele-sv/img/fvtt-anvil-sv.png";
		
	}
});
