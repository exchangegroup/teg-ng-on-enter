module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'teg-ng-on-enter.js': 'src/teg-ng-on-enter.coffee'
        }
      }
    },
    ngmin: {
      directives: {
        src: ['teg-ng-on-enter.js'],
        dest: 'teg-ng-on-enter.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'teg-ng-on-enter.min.js': ['teg-ng-on-enter.js']
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