module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss'],
        sourceMap: true
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
        }        
      }
    },

    cssmin: {
        Dist: {
          files: {
            'css/app.min.css': ['css/app.css']
          }
        }
    },

    uglify: {
    dist: {
      files: {
        'js/app.min.js': ['!js/gruntfile.js','js/app.js', 'js/menu.js', 'js/slider.js']
      }
    }
  },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['cssroutine']
      },

      js: {
        files: 'js/**/*.js',
        tasks: ['jsroutine']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('cssroutine', ['sass', 'cssmin']);
  grunt.registerTask('jsroutine', ['uglify']);
  grunt.registerTask('default', ['cssroutine', 'jsroutine', 'watch']);

}