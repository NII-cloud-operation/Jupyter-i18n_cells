#!/usr/bin/env python

from setuptools import setup

setup(name='nbextension_i18n',
      version='0.1',
      description='i18n switcher extension for Jupyter Notebook',
      packages=['nbextension_i18n'],
      package_dir={'nbextension_i18n': 'nbextension_i18n'},
      package_data={'nbextension_i18n': ['static/*']},
      include_package_data=True
     )
