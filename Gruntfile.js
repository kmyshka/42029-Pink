module.exports = function(grunt) {

require("load-grunt-tasks")(grunt);

  grunt.loadNpmTasks('grunt-lintspaces');
  grunt.registerTask('lint', ['lintspaces']);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Lint Spaces in code
    lintspaces: {
      all: {
        src: [
          '*.html'
        ],
        options: {
          newline: true,
          newlineMaximum: 2,
          trailingspaces: true,
          indentationGuess: true,
          editorconfig: '.editorconfig',
          ignores: [
            'html-comments',
            'js-comments'
          ],
          showTypes: true,
          showCodes: true
        }
      }
    },

    less: {
      style: {
        files: {
          "build/css/style.css": ["source/less/style.less"]
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      style: { src: "build/css/style.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
            report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },


    imagemin: {
      images: {
        options: {
          optimizationLevel: 4
        },
        files: [{
          expand: true,
            src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
          "img/**",
          "js/**",
          "index.html"
          ],
          dest: "build"
        }]
      }
    },

    clean: {
      build: ["build"]
    }

  });

  grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "imagemin",
    "lintspaces"
  ]);

};
