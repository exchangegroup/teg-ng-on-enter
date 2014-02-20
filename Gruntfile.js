module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      compile: {
        files: {
          'path/to/result.js': 'path/to/source.coffee', // 1:1 compile
          'path/to/another.js': ['path/to/sources/*.coffee', 'path/to/more/*.coffee'] // compile and concat into single file
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['coffee']);
};