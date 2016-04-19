//wraper function
module.exports = function(grunt) {
  //project configuration
  grunt.initConfig({
    csslint: {
      src: ["public/*.css"]
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: "public",
          src: ["*.css", "!*.min.css"],
          dest: "public/build",
          ext: ".min.css"
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "public/build/index.min.html": "public/index.html",
        }
      }
    },

    watch: {
      css: {
        files: ["public/*.css"],
        tasks: ["cssmin"],
      },
      html: {
        files: ["public/*.html"],
        tasks: ["htmlmin"],
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");


  // Default task(s).
  grunt.registerTask("all", ["cssmin", "htmlmin"]);
  grunt.registerTask("default", ["all"]);

};
