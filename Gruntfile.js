module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      compile: {
        files: {
          'teg-ng-on-enter.js': 'src/teg-ng-on-enter.coffee'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['coffee']);
};