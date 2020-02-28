## Tarea 4: DevOps (1/2)
##### Esteban David Alvarez Bor - 201313872

La siguiente tarea consiste en aplicar los estandares de versionamiento **SEMVER** a las tareas 2 y 3, creando las ramas basicas master/ develop para un nuevo repositorio, junto con las nuevas ramas y tags. Ademas incorpora la herramienta **GULP** para construccion de artefactos, esto para el caso de javascript.


## SEMVER

Se aplico semantic versioning 2.0.0 para le manejo de tags en el repositorio de versionamiento, aplicando numero de version a las versiones MAJOR(x), MINOR(y) y PATCH(z), de manera incremental.

    1. MAJOR(x): Se incrementa al existir cambios significativos o falta de compatibilidad en el funcionamiento de una version anterior incluso si estos cambios representan cambios menores.
    2. MINOR(y): Se incrementa cuando se introduce una nueva funcionalidad que es compatible con versioens anteriores o por mejora.
    3. PATCH(z): Esta se incrementa unicamente cuando se realizan correcciones de errores compatibles con versiones anteriores.

[Documentacion SEMVER](https://semver.org/)

## GULP

Antes de realizar la construccion, ejecutar comando:
```js
npm install
```

Para poder ejecutar de manera correcta el task de gulp debera instalar de manera global:
```js
npm install gulp-cli -g
```

Se incorporo la herramienta para la construccion de artefactos **GULP**. Esta herramienta nos permite ejecutar tareas "task" personalizadas las cuales construiran el codigo proporcionado. Se realizo una tarea para comprimir todo el codigo de la tarea 4 en un archivo con extension **.zip** para luego ser almacenado en la carpeta __./codigo__

```js
var gulp = require('gulp');
var zip = require('gulp-zip');

/**
 * GULP task comprime el codigo a .zip
 * nombre del archivo code.zip
 * destino del archivo /code
 */
gulp.task('zip_code', function() {
    return gulp.src('./**')
        .pipe(zip('code.zip'))
        .pipe(gulp.dest('./code'));
});
```

Esta tarea llamada **zip_code** requiere del modulo **gulp** y **gulp-zip** para poder generar un archivo comprimirdo con el codigo de la tarea, especificandole la fuente o carpeta del codigo que se desea comprimir __./\*\*__ , el nombre del archivo resultante, **code.zip**, y el destino del archivo. **./code**.

Para ejecutar la tarea de gulp ejecutaremos el comando en la terminal, dentro de la ruta donde se encuentra nuestro codigo y el archivo principal **__gulpfile.js__**
```js
gulp zip_code
```
Podremos visualizar en la terminal el procesamiento de la tarea:
```js
[22:42:56] Using gulpfile ~T4\gulpfile.js
[22:42:56] Starting 'zip_code'...
[22:43:13] Finished 'zip_code' after 17 s
```