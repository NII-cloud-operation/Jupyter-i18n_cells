#!/usr/bin/env python

from setuptools import setup

setup(name='nbextension_i18n_cells',
      version='0.1',
      description='i18n_cells extension for Jupyter Notebook',
      packages=['nbextension_i18n_cells'],
      package_dir={'nbextension_i18n_cells': 'nbextension_i18n_cells'},
      package_data={'nbextension_i18n_cells': ['static/*']},
      include_package_data=True
     )
