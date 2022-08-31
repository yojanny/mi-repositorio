# Node.js inicio

## Cómo inicializar un proyecto que no existe
1. Creamos una carpeta, por ejemplo `miproyecto`
2. Dentro de la carpeta ejecutamos `npm init -y`
```
# En linux / osx (para Windows la carpeta la hacéis desde el VSCode)
mkdir miproyecto
cd miproyecto
npm init -y
```

## Cómo ejecutar este proyecto
La carpeta node_modules NUNCA se sube al repo, es decir, se añade al gitignore.
Para poder instalar las dependencias que tenga este proyecto del `day7` hacemos lo siguiente:
```
# Este comando instalará las dependencias del proyecto
npm install
```
