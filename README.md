bootstrap file uploader
=======================

Simple custom file uploader input using default [twitter bootstrap](http://getbootstrap.com/2.3.2/) styles.

## Quick Start

Choose the file input that you want to apply a fashion bootstrap style.

    $('input[type="file"]').fileUploader();

And your file input will turn into:

    <div class='bootstrap-file-uploader row-fluid'>
        <input type='text' class='uploader-input span8'></input>
        <button class='btn span4'>Upload</button>
    </div>

## Options

There are few options that you can attach to your file uploader, they're listed below with their respective default values and examples. And they're all for customization purposes and not required.

# buttonLabel

The string that will appear on your upload button. Default is "Upload".
    
    $('input[type="file"]').fileUploader({
        buttonLabel: 'Upload'
    });

# buttonClass

The class or group of classes that will be attached to your upload button, can be defined as `"className"` or `"class1 class2 class3 (...)"`. Default is none.

    $('input[type="file"]').fileUploader({
        buttonClass: 'success'
    });

# hasTextInput

A boolean option that will determine if your uploader will have an text input field that will display the selected path/filename or just the upload button. Default is `true`. **Ignored if a _template is defined. **

    $('input[type="file"]').fileUploader({
        hasTextInput: false
    });

# elementToAttachFileName

A DOM element selector that will receive the path/filename every time the user selects a file to upload. Useful if you have to attach the filename in somewhere else in your app. Default is none.

    $('input[type="file"]').fileUploader({
        elementToAttachFileName: '#container .selector-example'
    });

# _template

An underscore.js template selector to render the uploader button/input. Really useful if you need some complex DOM structure in your uploader that is not provided by the plugin default generated DOM elements. Default is none.

Requires [underscore.js](http://underscorejs.org/) library. 

*To access options like buttonLabel and buttonClass inside your template, if you have to read the object `data` that is attached when rendering the `_template` provided. More informations in the section below.*

    $('input[type="file"]').fileUploader({
        _template: '#tpl-uploader'
    });

# _data

The additional data that will be attached to the `data` object inside of the rendered `_template`. By default the `data` object already have `buttonLabel` and `buttonClass` attributes provided on the plugin constructor. And it will extend any other valid JSON parameters passed by you in the `_data` field.

Requires [underscore.js](http://underscorejs.org/) library and will be ignored if `_template` is not defined.

    $('input[type="file"]').fileUploader({
        _template: '#tpl-uploader',
        _data: {
            foo: 'bar',
            baz: [1, 2, 3] 
        }
    });

## About

Developed by [William Dias](http://twitter.com/diaswrd).

Software under MIT license. Any feedback, bug reports or pull requests are very welcome.
