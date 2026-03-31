# Microservicio - Evaluación DevOps 1

## 1. Estrategia de Ramificación (Branching Strategy)
Para este proyecto hemos seleccionado **GitFlow** como modelo de ramificación. 

**Justificación:** GitFlow es ideal para este entorno colaborativo porque nos permite separar claramente el código estable en producción (`main`) del código en integración y pruebas (`develop`). Al utilizar ramas `feature/`, aislamos el desarrollo de nuevas características sin inestabilizar el proyecto principal. Además, las ramas `hotfix/` nos dan una vía rápida y segura para parchear errores críticos directamente en producción. Esta estructura facilita el trabajo en paralelo de nuestro equipo, evita conflictos graves de código y se alinea perfectamente con los estándares de Integración y Entrega Continua (CI/CD).

## 2. Convenciones y Buenas Prácticas del Equipo

### Nomenclatura de Ramas (Branch Naming)
* **`main`**: Código estable, testeado y listo para producción.
* **`develop`**: Rama de integración principal. Todo el desarrollo nuevo llega aquí primero.
* **`feature/nombre-de-la-tarea`**: Para nuevas funcionalidades (ej. `feature/agregar-login`).
* **`hotfix/descripcion-del-error`**: Para correcciones urgentes en producción (ej. `hotfix/error-500-api`).

### Mensajes de Commit (Conventional Commits)
Utilizamos un estándar para mantener la trazabilidad del proyecto:
* **feat:** Nueva característica (ej. `feat: crear endpoint de usuarios`).
* **fix:** Corrección de un bug (ej. `fix: resolver caída del servidor`).
* **docs:** Cambios en la documentación (ej. `docs: actualizar README`).
* **chore:** Tareas de mantenimiento o configuración (ej. `chore: configurar package.json`).

### Flujos de Merge/Estrategia de Revisión
1. Todo cambio debe desarrollarse en una rama derivada (`feature/` o `hotfix/`).
2. Está estrictamente prohibido hacer *push* directo a `main` o `develop`.
3. Se debe abrir un **Pull Request (PR)** hacia la rama de destino (`develop` para features, `main` y `develop` para hotfixes).
4. El Pull Request debe ser revisado por el otro miembro del equipo antes de aprobar el *merge*.

---
*Nota sobre uso de IA: Para la generación del código base del microservicio dummy nos apoyamos en la herramienta de IA Gemini, validando y adaptando posteriormente la información a los requerimientos de nuestro proyecto.*