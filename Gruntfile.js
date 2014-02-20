module.exports = function(grunt) {
  grunt.initConfig({
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['coffee']);
};