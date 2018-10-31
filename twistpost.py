# twister GET e POST armazenando em uma variavel global
# TODO: bloquear por software acesso a IPs cadastrados - hardcoded
# TODO: colocar uma saida de timestamp para validar update

# sudo apt-get install pip
# sudo pip install twisted[tls]
# twistd -y twistpost.py

#!/usr/bin/env python
from twisted.web.server import Site
from twisted.web.resource import Resource
from twisted.internet import reactor
stored = '{}'
class FormPage(Resource):
    def render_GET(self, request):
        global stored
        return '<html><body><p>{0}</p></body></html>'.format(str(stored))
    def render_POST(self, request):
        global stored
        stored = request.content.getvalue()
        return '<html><body>Cadastrado.</body></html>'
root = Resource()
root.putChild("data", FormPage())
factory = Site(root)
reactor.listenTCP(3030, factory)
reactor.run()
