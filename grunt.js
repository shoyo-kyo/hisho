(function() {

	var DIRS = {
			dest: "../dist/",
			src: "../src/"
		};

	module.exports = function(grunt) {

		// Project configuration.
		grunt.initConfig({
			concat:  {
				'dist/sk.argentSaison.mainProcess.js' : [
					'src/jquery/jquery-1.7.min.js',
					'src/jquery/jquery.tmpl.min.js',
					'src/jquery/ui/jquery.ui.core.js',
					'src/jquery/ui/jquery.ui.widget.js',
					'src/sk/common/widget/sk.widget.itemScroll.js',
					'src/sk/common/widget/sk.widget.productImageGet.js',
					'src/sk/common/plugin/sk.plugin.socialBtn.js',
					'src/ga/ga.loader.js',
					'src/ga/ga.clickLog.js',
					'src/sk/sk.getPackage.js',
					'src/sk/argentSaison/sk.argentSaison.mainProcess.js'
				],
				
				'dist/sk.argentSaison.layout.js' : [
					'src/sk/common/plugin/sk.plugin.listDelete.js',
					'src/sk/argentSaison/sk.argentSaison.layout.js'
				],
				
				'dist/sk.argentSaison.top.js' : [
					'src/sk/argentSaison/sk.argentSaison.top.mainVisualAnimate.js',
					'src/sk/argentSaison/sk.argentSaison.top.mainVisualFeature.js',
					'src/sk/argentSaison/sk.argentSaison.top.js'
				],
				
				'dist/sk.argentSaison.detail.js' : [
					'src/sk/common/plugin/sk.plugin.getProductData.js',
					'src/sk/argentSaison/common/sk.argentSaison.colorIcon.js',
					'src/sk/argentSaison/sk.argentSaison.detail.js'
				],
				
				'dist/sk.argentSaison.list.js' : [
					'src/sk/common/plugin/sk.plugin.getProductData.js',
					'src/sk/argentSaison/common/sk.argentSaison..gNaviActive.js',
					'src/sk/argentSaison//sk.argentSaison.list.js'
				]
			},
			min: {
				'dist/sk.argentSaison.mainProcess_min.js': [ 'dist/sk.argentSaison.mainProcess.js' ],
				'dist/sk.argentSaison.layout_min.js': [ 'dist/sk.argentSaison.layout.js' ],
				'dist/sk.argentSaison.top_min.js': [ 'dist/sk.argentSaison.top.js' ],
				'dist/sk.argentSaison.detail_min.js': [ 'dist/sk.argentSaison.detail.js' ],
				'dist/sk.argentSaison.list_min.js': [ 'dist/sk.argentSaison.list.js' ]
			}
		});

		// Default task.
		grunt.registerTask('default', 'concat min');

	};

})();