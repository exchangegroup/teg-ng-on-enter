module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

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
    },
    watch: {
      coffee: {
        files: ['src/{,*/}*.coffee'],
        tasks: ['build']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html',
          'app/scripts/*.js',
          'dist/<%= pkg.name %>.min.js'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            'dist',
            'app'
          ]
        }
      }
    }
  });

  grunt.registerTask('build', ['coffee', 'ngmin', 'uglify']);

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('serve', ['build', 'connect:livereload', 'watch']);

  grunt.registerTask('default', ['test', 'build']);
};