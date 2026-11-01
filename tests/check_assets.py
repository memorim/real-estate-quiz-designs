from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
root=Path(__file__).resolve().parents[1]
landing=root/"anna-ermakova"
class Assets(HTMLParser):
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=="img":
            assert attrs.get("alt", "").strip(), "Missing image description"
        for name in ("src", "href"):
            url=urlsplit(attrs.get(name,""))
            if not url.scheme and url.path:
                assert (landing/url.path).exists(),url.path
parser=Assets()
parser.feed((landing/"index.html").read_text(encoding="utf-8"))
assert (root/"README.md").exists()
assert not (root/"index.html").exists(), "The gallery must not be published"
assert not (root/"assets").exists(), "Remove unused gallery assets"
assert (root/".nojekyll").exists(), "Do not generate a website from the root README"
print("Landing assets and removed gallery: OK")
