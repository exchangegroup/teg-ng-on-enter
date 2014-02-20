module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'teg-ng-on-enter.js': 'src/teg-ng-on-enter.coffee'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'teg-ng-on-enter.min.js': ['teg-ng-on-enter.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['coffee', 'uglify']);
};