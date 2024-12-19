```md
Segunda Entrega de Backend 3 - Proyecto Final Carrera FullStack 🚀
==================================================================

**AdoptMe**
-----------

Este proyecto forma parte de la segunda entrega del Backend 3 en la carrera FullStack de CoderHouse. El objetivo principal ha sido desarrollar una API robusta para la gestión de adopciones de mascotas, implementando buenas prácticas de desarrollo, pruebas funcionales y despliegue mediante contenedores Docker.

* * * * *

**Perfil y Recursos en DockerHub**
----------------------------------

-   **Perfil DockerHub:**\
    <https://hub.docker.com/u/csluduena>
-   **Imagen del proyecto:**\
    <https://hub.docker.com/repository/docker/csluduena/adoptme/general>

* * * * *

**Creación del Dockerfile**
---------------------------

Se ha desarrollado un Dockerfile optimizado que permite generar una imagen del proyecto de manera reproducible.

### **Características del Dockerfile:**

1.  **Configuración Eficiente:**\
    Se incluyen todos los pasos necesarios para instalar dependencias, copiar los archivos del proyecto y configurar el entorno de ejecución.
2.  **Compatibilidad:**\
    La imagen se ha diseñado para ser ejecutable en cualquier máquina con Docker instalado.
3.  **Build del Proyecto:**\
    La imagen genera el entorno adecuado para que la aplicación funcione correctamente, incluyendo la exposición de los puertos necesarios.

* * * * *

**Subida de la Imagen a DockerHub**
-----------------------------------

La imagen generada se ha subido correctamente a DockerHub y está disponible públicamente.

### **Detalles:**

-   La imagen se encuentra accesible en el siguiente enlace:\
    <https://hub.docker.com/repository/docker/csluduena/adoptme/general>
-   Incluye toda la configuración para iniciar rápidamente un contenedor funcional.

* * * * *

**Desarrollo de Tests Funcionales**
-----------------------------------

Se han desarrollado tests funcionales utilizando `mocha`, `chai` y `supertest` para garantizar el correcto funcionamiento de los endpoints del router `adoption.router.js`.

### **Cobertura de los Tests:**

1.  **GET /api/adoptions:**\
    Verifica que se puedan obtener todas las adopciones correctamente.
2.  **GET /api/adoptions/:aid:**
    -   Casos de éxito: Obtener una adopción específica.
    -   Casos de error: Manejo de adopciones inexistentes.
3.  **POST /api/adoptions/:uid/:pid:**
    -   Casos de éxito: Creación de una nueva adopción.
    -   Casos de error:
        -   Usuario inexistente.
        -   Mascota inexistente.
        -   Mascota ya adoptada.

Los tests verifican de manera efectiva los escenarios principales, incluyendo casos límite y de error.

* * * * *

**Desarrollo del Módulo de Mocking para Generación de Usuarios**
----------------------------------------------------------------

### **Descripción:**

Se implementó un módulo de Mocking que permite generar usuarios de forma dinámica en función de un parámetro numérico.

### **Características del Módulo:**

1.  **Generación de Usuarios Mock:**
    -   Contraseñas encriptadas.
    -   Roles variados (`user`, `admin`).
    -   Arrays de `pets` vacíos.
2.  **Formato MongoDB:**\
    Los usuarios generados cumplen con el esquema definido en el modelo de usuario de MongoDB.

* * * * *

**Ejecución del Proyecto con Docker**
-------------------------------------

### **Cómo Ejecutar la Imagen Docker:**

1.  **Descargar la imagen desde DockerHub:**

    bash

    Copiar código

    `docker pull csluduena/adoptme:latest`

2.  **Crear y ejecutar el contenedor:**

    bash

    Copiar código

    `docker run -d -p 8002:8002 csluduena/adoptme`

3.  **Acceder al Proyecto:**\
    Una vez en ejecución, la aplicación estará disponible en:\
    http://localhost:8002

* * * * *

**Pruebas y Comprobación**
--------------------------

Para ejecutar los tests funcionales:

1.  Instalar las dependencias necesarias:

    bash

    Copiar código

    `npm install`

2.  Ejecutar los tests:

    bash

    Copiar código

    `npm test`

* * * * *

**Conclusión**
--------------

El proyecto cumple con los objetivos propuestos, integrando:

-   Una API funcional y bien estructurada.
-   Pruebas exhaustivas para garantizar la calidad del código.
-   Despliegue eficiente mediante Docker.

Este proyecto representa una sólida entrega final, lista para escalabilidad y mantenimiento en entornos productivos.🌟

```