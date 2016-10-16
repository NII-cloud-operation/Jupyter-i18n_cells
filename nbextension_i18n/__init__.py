def _jupyter_server_extension_paths():
    return [{
        "module": "nbextension_i18n"
    }]

# Jupyter Extension points
def _jupyter_nbextension_paths():
    return [dict(
        section="notebook",
        src="static",
        dest="nbextension_i18n",
        require="nbextension_i18n/main")]

def load_jupyter_server_extension(nbapp):
    nbapp.log.info("i18n nbextension enabled!")
