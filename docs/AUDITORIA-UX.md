# Auditoría UX/UI — App de notas

## 1. Objetivo

Evaluar la aplicación de notas utilizando las cinco heurísticas de Nielsen, las leyes de diseño de interfaces y criterios básicos de accesibilidad. Se busca mejorar la facilidad de uso, la claridad y la prevención de errores.

## 2. Auditoría con las heurísticas de Nielsen

| Heurística | Problema en la versión original | Solución aplicada |
|---|---|---|
| Visibilidad del estado del sistema | No se mostraba un mensaje al agregar una nota. | Se agregaron mensajes de confirmación, error y cancelación. |
| Correspondencia entre el sistema y el mundo real | La interfaz tenía pocos textos que orientaran al usuario. | Se añadieron títulos, instrucciones y ejemplos sencillos. |
| Control y libertad del usuario | No existía una opción para cancelar una eliminación. | Se agregó una confirmación antes de eliminar una nota. |
| Prevención de errores | El campo podía enviarse vacío o con espacios. | Se validó el contenido antes de agregar una nota. |
| Reconocimiento antes que recuerdo | No había una etiqueta visible para identificar el campo. | Se añadió la etiqueta «Nueva nota» y un ejemplo dentro del campo. |

## 3. Leyes de diseño aplicadas

- **Ley de Fitts:** los botones tienen una altura mínima de 48 px para facilitar su selección.
- **Ley de Hick:** se priorizó una interfaz sencilla, con una acción principal clara: «Agregar».
- **Ley de Miller:** se separó el formulario de la lista de pendientes para organizar la información en grupos fáciles de identificar.

## 4. Mejoras de accesibilidad

- Se agregó una etiqueta visible asociada al campo de texto.
- Se mantuvo un encabezado principal `h1`.
- Se incorporó un indicador de foco visible para navegar con el teclado.
- Se mejoraron los colores del texto y los controles.
- Se utilizaron mensajes accesibles con `role="status"` y `aria-live="polite"`.
- Se configuraron botones de al menos 48 px de altura.
- Se adaptó la interfaz a pantallas pequeñas.

## 5. Evidencias

Guardar las capturas en la carpeta `docs/evidencias/`.

- `antes.png`: versión original.
- `despues.png`: versión mejorada.
- `lighthouse-antes.png`: resultado de accesibilidad de la versión original.
- `lighthouse-despues.png`: resultado de accesibilidad de la versión mejorada.

**Resultado de Lighthouse:** completar después de ejecutar las pruebas reales.

- Puntaje inicial: pendiente de medir.
- Puntaje final: pendiente de medir.
- Objetivo: obtener al menos 90 puntos en accesibilidad.

## 6. Conclusión

La nueva versión facilita el uso de la aplicación porque ofrece instrucciones más claras, previene entradas vacías, confirma las eliminaciones y muestra mensajes después de las acciones. También mejora la navegación con teclado y la adaptación a diferentes pantallas. Las capturas y los resultados de Lighthouse permitirán comprobar las mejoras realizadas.