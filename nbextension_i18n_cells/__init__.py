def _jupyter_server_extension_paths():
    return [{
        "module": "nbextension_i18n_cells"
    }]

# Jupyter Extension points
def _jupyter_nbextension_paths():
    return [dict(
        section="notebook",
        src="static",
        dest="nbextension_i18n_cells",
        require="nbextension_i18n_cells/main")]

def load_jupyter_server_extension(nbapp):
    nbapp.log.info("i18n_cells nbextension enabled!")
