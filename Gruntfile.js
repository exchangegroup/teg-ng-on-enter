module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'dist/teg-ng-on-enter.js': 'src/teg-ng-on-enter.coffee'
        }
      }
    },
    ngmin: {
      directives: {
        src: ['dist/teg-ng-on-enter.js'],
        dest: 'dist/teg-ng-on-enter.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/teg-ng-on-enter.min.js': ['dist/teg-ng-on-enter.js']
        }
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['coffee', 'ngmin', 'uglify']);
};