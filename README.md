# Jupyter-multi-languages

Jupyter Notebook extension to Show/Hide elements in Markdown by Language.

![demo](https://raw.githubusercontent.com/yacchin1205/nbextension_i18n/master/demo.gif)

Usually we write a Notebook in both Japanese and English,
because Japanese descriptions are necessary for communication between team members and also English ones are for publishing on GitHub.

Such a Notebook is not always easy-to-read, so we would like to filter markdown blocks by language...!

# How to install

## Install the python package

This package has't prepared for PyPI yet, please clone this repository and install by yourself.

```
$ pip install git+https://github.com/yacchin1205/nbextension_i18n.git
```

## Install and Enable this extension


```
$ jupyter nbextension install --py nbextension_i18n
$ jupyter nbextension enable --py nbextension_i18n
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

https://github.com/yacchin1205/nbextension_i18n/blob/master/nbextension_i18n/static/main.js#L5
```js
  var LANGUAGES = ['ja', 'en'];
```

If you would like to describe in [Klingon](https://en.wikipedia.org/wiki/Klingon_language) (defined as `tlh` in ISO 639-2, awesome!)..., you should edit it like below:

```js
  var LANGUAGES = ['ja', 'en', 'tlh'];
```
