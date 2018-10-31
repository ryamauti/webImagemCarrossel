# Carossel de imagens simples 

Via Javascript, roda a cada 10 segundos por imagem.
Via meta head html5, realiza um refresh a cada 60 segundos
Tem seis imagens cadastradas como image1.jpg a image6.jpg
O css garante que a imagem ocupe a tela inteira (max height).

### Operação:

Basta substituir em voo qualquer uma das imageN.jpg. 
No seu segmento do minuto, a imagem nova aparecerá, graças ao refresh.

### Refresh:

Também é possível fazer refresh por Javascript:
```javascript
// Recarrega a página atual sem usar o cache
document.location.reload(true);
```
com isso pode-se fazer o refresh a cada ciclo, e forçar a exclusão do cache.

### File Upload

Outra forma além do FTP é usar o File API do JS para carregar as imagens no servidor web.

https://www.webcodegeeks.com/html5/html5-file-upload-example/


### HTML: problemas com acentuação ?

É preciso instruir o browser a usar o nosso  character encoding:
```html
<html lang="pt-br">
<head>
    <meta charset="utf-8" />	
```

### Servidor HTTP POST e GET: Twisted

O código twistpost.py pode ser executado em um ambiente que seja visível por ambas as máquinas. 
Ele recebe uma entrada de texto via POST e armazena esta entrada. via GET ele retorna este valor armazenado.
```shell
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://35.231.32.39:3030/data
```
