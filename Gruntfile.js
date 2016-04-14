//wraper function
module.exports = function(grunt) {
  //project configuration
  grunt.initConfig({
    csslint: {
      src: ["**/*.css"]
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['*.css', '!*.min.css'],
          dest: 'public/build',
          ext: '.min.css'
        }]
      }
    },

    htmllint: {
      src: ["public/index.html"],
      options: {
        force: false,
        "indent-width": 2
      },
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/build/index.min.html': 'public/index.html',
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-csslint");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-htmllint");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");


  // Default task(s).
  grunt.registerTask("all", ["csslint", "cssmin", "htmllint", "htmlmin"]);
  grunt.registerTask("default", "all");

}
