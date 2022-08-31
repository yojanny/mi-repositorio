## Protocolo http
https://developer.mozilla.org/es/docs/Web/HTTP/Overview#flujo_de_http

## Servidores web
Un servidor web siempre va a estar en una IP/Host y en un puerto escuchando las peticiones del usuario.

El puerto debe ser mayor o igual a 1024 puesto que los puertos inferiores (hasta el 1023 incluído) están reservados por el Sistema Operativo.

En una misma máquina (host / ip) y en un mismo puerto (8000 por ejemplo) SÓLO puede haber un servidor funcionando.

Cuando en una máquina linux / osx tenemos el puerto ocupado (porque ya hay otro servidor) e intentamos arrancar nuestro servidor en Node.js, obtendremos un error del Sistema Operativo como este:
```
myfirstserver git:(main) ✗ node index  
node:events:498
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use 127.0.0.1:8000
    at Server.setupListenHandle [as _listen2] (node:net:1330:16)
    at listenInCluster (node:net:1378:12)
    at GetAddrInfoReqWrap.doListen [as callback] (node:net:1516:7)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:73:8)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1357:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '127.0.0.1',
  port: 8000
}
```
Donde la parte interesante sería:
```
code: 'EADDRINUSE',
  errno: -48,
```
Cómo lo arreglamos?
* O bien cambiando de puerto
* O matando el proceso que tiene el puerto ocupado, cómo?
```
# Buscamos el Process ID (PID) del proceso que tiene el puerto en uso
sudo lsof -i :8000

# Salida
myfirstserver git:(main) ✗ sudo lsof -i :8000
Password:
COMMAND  PID      USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    2168 jose.mato   28u  IPv4 0x298f7d55edb628ab      0t0  TCP localhost:irdmi (LISTEN)
```
Vemos que el proceso que tiene el puerto abierto es el 2168 (PID), por lo que tenemos que enviarle una señal al proceso para matarlo.
```
kill -9 2168
```

