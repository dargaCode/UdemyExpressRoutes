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
    },

    jshint: {
      src: ["app.js", "Gruntfile.js"],
      options: {
        reporter: require('jshint-stylish')
      }
    },

    watch: {
      js: {
        files: ['Gruntfile', 'app.js'],
        tasks: ['jshint'],
      },
      css: {
        files: ['public/*.css'],
        tasks: ['csslint','cssmin'],
      },
      html: {
        files: ['public/*.html'],
        tasks: ['htmllint', 'htmlmin'],
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-csslint");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-htmllint");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  // Default task(s).
  grunt.registerTask("all", ["csslint", "cssmin", "htmllint", "htmlmin", "jshint"]);
  grunt.registerTask("default", ["all", "watch"]);

};
