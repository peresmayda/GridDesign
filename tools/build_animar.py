# Gera app/animar.html a partir de tools/animar.tpl.html.
# Sempre edite o molde (animar.tpl.html) e rode:  python3 tools/build_animar.py
import json, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
tpl = (root / "tools/animar.tpl.html").read_text()
svg = (root / "tools/sample_scene.svg").read_text()
(root / "app/animar.html").write_text(tpl.replace("{{sample}}", json.dumps(svg)))
print("app/animar.html gerado")
