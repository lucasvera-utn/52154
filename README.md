

# 👤 Creador

- **Nombre:** Lucas Vera Romero  
- **Legajo:** 52154  
- **Tema:** 25914_17 

---
## Analizador Sintáctico con ANTLR y Node.js
## 📘 Descripción

Este proyecto es un analizador sintáctico para un lenguaje de programación simple, creado con **ANTLR** y **Node.js**.

El archivo `vuelo.g4` define un lenguaje estructurado orientado a la programación básica con soporte para:

- Declaración de variables
- Expresiones aritméticas
- Impresión en pantalla
- Manejo de errores mediante bloques `try-catch` personalizados

---

## ✅ Paso Por Paso


### 1️⃣ Clonar el Repositorio

Ejecuta el siguiente comando en la consola:

```
git clone https://github.com/lucasvera-utn/52154.git
```

### 2️⃣ Abrir el proyecto en VS
Una vez clonado el repositorio, abre el proyecto en Visual Studio Code con:
```
cd 52154
```
luego
```
code .
```
### 3️⃣ Probar el proyecto
`Opción 1`: Presiona F5 estando en `vuelo.g4` para ejecutar el código en VS Code. Esto generará el árbol de derivación.

`Opción 2`: Usando la Consola abre la terminal situandote en el archivo y ejecuta el siguiente comando:
```
node index.js
```
Esto generará el arbol de derivación, la tabla de tokens y lexemas, hará un análisis léxico y sintáctico, mostrara el resultado del programa y también generarás la tradución al lenguaje JavaScript del archivo `input.txt`.

#### ⚠️ Archivos importantes
`vuelo.g4`: este archivo muestra la gramatica del ANTLR para el analizador

`input.txt`: El archivo de entrada donde podrás colocar los códigos de prueba. Hay ejemplos de entradas funcionales y no funcionales que puedes utilizar.


