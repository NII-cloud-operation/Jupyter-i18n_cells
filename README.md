# Jupyter-i18n_cells
Jupyter Notebook extension to manage multilingal-notebooks, which cells hold multilingal contents divided by div/span tags as follows;

```
<p lang="en">
English
</p>
<p lang="ja">
日本語
</p>
```

This extension select language to be displayed;

![demo](https://raw.githubusercontent.com/NII-cloud-operation/Jupyter-i18n_cells/master/demo.gif)

Notebooks are powerful tools for communication, thus the muitilingal capability is inevitable but (Standard) Jupyter Notebook lacks the capacity.

In order to create multilingal-notebook, we write markdowns in several languages using div(span) tags with the lang attribute.
With this extension, for communication among team members in Japan, they can read the markdowns mainly with Japanese descriptions, though we show English ones for an exhibition.

Notebookはコミュニケーションのための強力なツールであるため、多言語化は不可欠ですが、(標準的な)Jupyter Notebookは多言語化の仕組みを備えていません。

多言語化したNotebookを実現するため、lang属性付きのdiv(span)要素で複数言語の説明を記述するようにしています。
このExtensionにより、日本のチームメンバー同士のコミュニケーションでは日本語で説明を読むことができ、一方展示会などでは英語の説明を示すことができるようになります。


# How to install

## Install the python package

This package has't prepared for PyPI yet, please clone this repository and install by yourself.

```
$ pip install git+https://github.com/NII-cloud-operation/Jupyter-i18n_cells.git
```

## Install and Enable this extension


```
$ jupyter nbextension install --py nbextension_i18n_cells
$ jupyter nbextension enable --py nbextension_i18n_cells
```

Once installed and enabled a language-dropdown box will appear in the toolbar.

# How to use

To use this extension, You should set a `lang` attribute to specify language in a markdown cell as below.

```
<p lang="en">
English
</p>
<p lang="ja">
日本語
</p>
```

You can also apply `lang` attribute to inline elements.

```
1. <span lang="en">English</span> <span lang="ja">日本語</span>
```

When you choose `lang:ja` from the dropdown, the browser shows only elements which have attribute `lang="ja"`.

# Add your languages to the dropdown

By default, the choosable languages are only `en` and `ja`.

To add your (favorite) languages, you can modify `LANGUAGES` variable in `main.js`. 

https://github.com/NII-cloud-operation/Jupyter-i18n_cells/blob/master/nbextension_i18n_cells/static/main.js#L5
```js
  var LANGUAGES = ['ja', 'en'];
```

If you would like to describe in [Klingon](https://en.wikipedia.org/wiki/Klingon_language) (defined as `tlh` in ISO 639-2, awesome!)..., you should edit it like below:

```js
  var LANGUAGES = ['ja', 'en', 'tlh'];
```
