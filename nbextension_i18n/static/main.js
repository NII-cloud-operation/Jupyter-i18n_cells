
define(["require", "jquery", "base/js/namespace"], function (require, $, IPython) {
  "use strict";

  var LANGUAGES = ['ja', 'en'];

  var switch_lang = function () {
    var lang = $('#lang_list').val();
    console.log('Switch lang: ' + lang);
    if(lang.length == 0) {
        $('#notebook_panel').removeClass('nbex-i18n-default');
        LANGUAGES.forEach(function(l) {
                $('#notebook_panel').removeClass('nbex-i18n-' + l);
            });
    }else{
        $('#notebook_panel').addClass('nbex-i18n-default');
        LANGUAGES.forEach(function(l) {
                if(lang == l) {
                    $('#notebook_panel').addClass('nbex-i18n-' + l);
                }else{
                    $('#notebook_panel').removeClass('nbex-i18n-' + l);
                }
            });
    }
  };
  
  var lang_button = function () {
    if (!IPython.toolbar) {
      $([IPython.events]).on("app_initialized.NotebookApp", lang_button);
      return;
    }
    if ($("#lang_button").length === 0) {
      IPython.toolbar.add_buttons_group([
        {
          'label'   : 'Switch Language',
          'icon'    : 'fa-list',
          'id'      : 'lang_button'
        },
      ]);
      $('#lang_button').parent('.btn-group').append($('<select id="lang_list" class="form-control select-xs"></select>'));
      $('#lang_button').hide();
      $('#lang_list').append($('<option value="">ALL</option>'));
      LANGUAGES.forEach(function(lang) {
              $('#lang_list').append($('<option value="' + lang + '">'
                                       + lang + '</option>'));
          });

      $('#lang_list').change(switch_lang);
    }
  };
  
  var load_css = function () {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = require.toUrl("./main.css");
    document.getElementsByTagName("head")[0].appendChild(link);
  };
  
  var load_ipython_extension = function () {
    load_css();
    lang_button();
  };

  return {
    load_ipython_extension : load_ipython_extension,
    switch_lang : switch_lang
  };

});
