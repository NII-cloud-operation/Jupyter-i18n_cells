# nbextension_i18n

Jupyter Notebook extension to Show/Hide elements in Markdown by Language.


# How to install

## Install the python package

The package have not been uploaded to PyPI yet, so you should clone this repository and install it using pip.

```
$ pip install git+https://github.com/yacchin1205/nbextension_i18n.git
```

## Install and Enable the extension in the package

You can install and enable the extension using `jupyter nbextension` command.

```
$ jupyter nbextension install --py nbextension_i18n
$ jupyter nbextension enable --py nbextension_i18n
```

After these commands, run `jupyter notebook` command. Then the language-dropdown box will appear in the toolbar.

# How to use

To use this extension, You should set a `lang` attribute to specify language as below.

```
<div lang="en">
English
</div>
<div lang="ja">
日本語
</div>
```

When you choose `lang:ja` from the dropdown, the browser shows only elements which have attribute `lang="ja"`.
