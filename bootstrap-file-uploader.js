/* ========================================================================
 * Bootstrap Custom File Uploader Input v0.0.1
 * https://github.com/diaswrd/bootstrap-file-uploader
 * ========================================================================
 * Copyright (c) 2013 William Dias
 *
 * Licensed under the MIT License (MIT);
 * https://github.com/diaswrd/bootstrap-file-uploader/blob/master/LICENSE
 * ======================================================================== */

(function($) {

    "use strict";
    
    //- Public class definition
    var FileUploader = function(element, options) {
        var defaults = {
            buttonLabel: 'Upload',
            buttonClass: '',
            hasTextInput: true,
            elementToAttachFileName: null
        };

        this.$input = $(element);
        this.options = $.extend({}, defaults, options);

        this.build();
    };

    FileUploader.prototype = {
        
        build: function () {
            this.$input.hide();

            this.$el = $(this.getMarkup());

            this.$input.after(this.$el);

            this.$el.find('input').css({
                float: 'left'
            })

            this.$el.on('click', 'input, .btn', $.proxy(this.click, this));
        },

        click: function (ev) {
            ev.preventDefault();

            this.$input.click();

            var elInput = this.$el.find('input');

            this.$input.on('change', function() {
                var file = $(this).val();
                elInput.val(file);
            });
        },

        getMarkup: function () {
            var markup = "<div class='bootstrap-file-uploader row-fluid'>";

            if (this.options.hasTextInput) {
                markup += "<input type='text' class='uploader-input span8'></input>";
            }

            markup +=   "<button class='btn "+ this.options.buttonClass +" span4'>";
            markup +=       this.options.buttonLabel;
            markup +=   "</button>";
            markup += "</div>";

            return markup;
        }

    };

    //- Plugin definition
    $.fn.fileUploader = function (options) {
        return this.each(function() { 
            var uploader = new FileUploader(this, options);
        });
    };

    $.fn.fileUploader.Constructor = FileUploader;

})(window.jQuery);