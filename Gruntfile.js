module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({
		jshint: {
			files: ['Gruntfile.js', 'app/**/*.js'],
			options: {
				globals: {
					module: true
				}
			}
		},

		less: {
			dev:{
				files: [{
					cwd: 'src/styles/less/',
					src: '**/*.less',
					dest: 'src/styles/css',
					ext: '.css',
					expand: true
				}],
				options: {
					compress: true
				}
			}
		}
	});

	grunt.registerTask('version', 'Show version number', function() {
		var pkg = grunt.file.readJSON('package.json');
		grunt.log.writeln(pkg.name + ' version ' + pkg.version);
	});
};