
module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			common: {
				files: {
					'js/dist/vs.purty.lp02_pc.js': [
						'js/src/jquery/jquery-1.9.1.js',
						'js/src/jquery/jquery.tmpl.min.js',
						'js/src/jquery/ui/jquery.ui.core.js',
						'js/src/jquery/ui/jquery.ui.widget.js',
						'js/src/ga/ga.loader.js',
						'js/src/vs/vs.getPackage.js',
						'js/src/vs/util/vs.util.cutString.js',
						'js/src/vs/util/vs.util.trim.js',
						'js/src/vs/purty/vs.purty.lp02_pc.js'
					],
					'js/dist/vs.purty.lp02_sp.js': [
						'js/src/jquery/jquery-1.9.1.js',
						'js/src/ga/ga.loader.js'
					],
					'js/dist/vs.purty.lp01.js': [
						'js/src/jquery/jquery-1.9.1.js',
						'js/src/ga/ga.loader.js',
						'js/src/vs/purty/vs.purty.lp01.js'
					]
				}
			}
		},
		uglify: {
			common: {
				files: {
					'js/dist/vs.purty.lp02_pc.js': 'js/dist/vs.purty.lp02_pc.js',
					'js/dist/vs.purty.lp02_sp.js': 'js/dist/vs.purty.lp02_sp.js',
					'js/dist/vs.purty.lp01.js': 'js/dist/vs.purty.lp01.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify']);
	grunt.registerTask('dev', ['concat']);

};