# Cambios

## v1.16.8

### Nuevas funciones

- (`/challenge zzz shiyu`) Se agregó el tiempo de finalización.
- (`/challenge hsr`) Se ocultaron los registros rápidos.
- (`/challenge hsr`) Se añadió la opción "Mostrar UID".
- (`/gacha-log`) Soporte para banners de colaboración en HSR.
- (`/profile zzz`) Se añadieron los nuevos personajes: Alice y Yuzuha.
- (`/profile zzz`) Se añadió soporte para skins de agentes.
- El bot ya no se desconectará durante las actualizaciones de código.

### Mejoras

- (`/profile hsr`) Se mejoró la posición del texto en la plantilla 2.
- (`/events`) Mejor contraste de colores en el modo claro.
- (`/gacha-log view`) Se actualiza el enlace de la app web al cambiar el tipo de banner.
- (`/search`) La historia de personajes de HSR ahora se muestra de forma más clara.
- Mejora en el rendimiento de generación de imágenes mediante mejor caché.
- Las imágenes ahora se guardan como WebP en lugar de PNG para reducir el tamaño del archivo.

### Corrección de errores

- (`/redeem`) Se corrigió un error que no contaba los códigos en minúsculas como canjeados.
- (`/characters genshin`) Se corrigió la posición del texto.
- (`/characters genshin`) Se corrigieron estilos inconsistentes en imágenes de algunos personajes.
- (`/profile hsr`) Se corrigieron problemas de fuente en los nombres de los conos de luz en la plantilla 2.

## v1.16.7

### Nuevas funciones

- Se añadió soporte para idioma árabe.
- (`/challenge genshin`) Se añadió la generación de tarjetas de Conflagración estigia.
- (`/profile zzz`) Se añadió acrónimo para "Acumulación automática de adrenalina" en la plantilla 4.

### Mejoras

- (`/accounts`) Se muestra una página mientras se cargan las cuentas.
- (`/accounts`) Se actualizó la URL del archivo APK para inicios de sesión en Miyoushe.
- (`/accounts`) Se añadió un campo de entrada para el AAID al agregar cuentas de Miyoushe.
- Generación de imágenes más rápida usando múltiples núcleos del CPU.
- Posiciones de texto más precisas en las imágenes.

### Corrección de errores

- (`/profile zzz`) Se corrigió la posición de la imagen de Yixuan en la plantilla 1.
- (`/profile zzz`) Se corrigió la traducción del atributo PEN en la plantilla 4.
- (`/search`) Se deshabilitó la categoría del Abismo Espiral.
- (`/search`) Se corrigió la falta de opciones de autocompletado para la categoría de discos de impulso.

## v1.16.6

### Nuevas funciones

- (`/profile zzz`) Se añadieron datos de tarjetas de los nuevos personajes de ZZZ 2.0.
- (`/profile zzz`) Se añadió soporte para agentes de Ruptura y el atributo Fuerza Bruta.
- (`/gacha-log import`) Manejo de excepciones con authkey.
- Se añadió aviso descartable por aniversario.

### Mejoras

- (`/profile zzz`) Se eliminaron los espacios en los nombres de agentes de fondo.

### Corrección de errores

- (`/characters genshin`) Soporte para personajes sin elemento.
- (`/challenge genshin theater`) Manejo de IDs de personajes no válidos.

## v1.16.5

### Nuevas Funciones

- (`/profile hsr`) Añadidos los datos de las nuevas tarjetas de personajes de la v3.3.
- (`/profile hsr`) Soporte para personajes del camino Remembrance usando plantillas StarRailCard.
- (`/profile`) Manejo del error de tiempo de espera en la API de Enka Network.
- (`/search`) Habilitada la categoría de contenido no lanzado.

### Corrección de Errores

- (`/redeem`) Eliminado el parámetro 'user' del comando.
- (`/mimo`) Eliminado el desenfoque de UID en los mensajes automáticos de tareas de mimo.
- (`/upload`) Manejo de archivos de imagen demasiado grandes.
- (`/search`) Corregida la fórmula de cálculo incorrecta para estadísticas de personajes y conos de luz.
- (`/accounts`) Corregida la opción de 'siguiente página' que no funcionaba cuando el usuario tenía más de 25 cuentas.

## v1.16.4

### Nuevas Funciones

- (`/profile genshin`) Soporte para viajero sin elemento.
- Añadidas fuentes en hindi.

### Mejoras

- (`/profile`) Eliminada la caché de datos de personajes.
- Añadidas restricciones a los filtros de registro del Gacha.

### Corrección de Errores

- (`/events`) Corregido el problema de no encontrar anuncios de banners.
- (`/challenge genshin theater`) Corregido que no se mostraban los datos del Imaginarium Theater.
- (`/profile`) Corregidos problemas de compatibilidad con builds de Enka Network.
- (`/mimo`) Corregido que usuarios de Miyoushe pudieran acceder al comando.
- (`/notes`) Ignorar errores de mantenimiento del juego al hacer chequeos de notas en tiempo real.
- (`/lb view`) Eliminada la tabla de logros de Honkai Impact 3rd.
- (`/farm reminder`) Corregido que los nombres de los objetos aparecieran como "...".

## v1.16.3

### Nuevas Funciones

- (`/profile zzz`) Añadidos los datos de las tarjetas de Vivian y Hugo.
- Añadida traducción al portugués (Brasil).
- Añadida traducción al japonés.

### Mejoras

- (`/profile zzz`) Ajustadas las posiciones de imagen de algunos personajes.
- (`/profile zzz`) Mejoradas las capas de imagen para las plantillas de las tarjetas.

### Corrección de Errores

- (`/notes`) Corregido que el notificador del transformador paramétrico no funcionara.
- (`/gacha-log upload`) Corregida la rareza incorrecta de algunos objetos al importar métodos de ZZZ.

## v1.16.2

### Nuevas Funciones

- (`/profile hsr`) Añadidos los datos de tarjetas de Castorice y Anaxa.

### Corrección de Errores

- (`/profile zzz`) Corregida la posición de la imagen de Pulchra en la plantilla de carta 2.
- (`/build genshin`) Corregido que los emojis de posición de artefactos no se mostraran correctamente en apps de usuario.

## v1.16.1

### Nuevas Funciones

- (`/gacha-log upload`) Añadido soporte para importar desde [Starward](https://github.com/Scighost/Starward) para ZZZ.
- (`/redeem`) Añadidas configuraciones de notificaciones.
- (`/accounts`) Añadidas instrucciones para obtener aaid al agregar cuentas de Miyoushe.
- Añadido botón "Ocultar UI" para comandos con muchos botones.

### Mejoras

- (`/search`) Eliminada la categoría de "contenido no lanzado", ver [este mensaje](https://discord.com/channels/1000727526194298910/1042428379120545873/1346411349999357973) para saber por qué.
- (`/characters`) Permitir seleccionar nada en los filtros.
- Mejorado el rendimiento de tareas automáticas.

### Corrección de Errores

Varios arreglos de errores, ver el [changelog completo](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.1) para más detalles.

## v1.16.0

[Para los curiosos](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.0)

### Nuevas Funciones

- (`/profile`) Añadidas vistas previas de plantillas en la configuración de tarjetas.
- (`/profile`) Mostrar disponibilidad de imagen personalizada en el menú de plantillas de tarjetas.
- (`/notes`) Aumentado el límite de poder trazacamino a 300.
- (`/notes`) Añadidos botones para abrir el juego.
- (`/search zzz`) Añadido selector de nivel de habilidad central.
- (`/gacha-log import`) Comparar el UID de los registros importados con el UID de la cuenta destino.
- Configuración automática del idioma del usuario nuevo según el idioma de su cliente de Discord.

### Mejoras

- (`/redeem`) Mejorada la experiencia de usuario al corregir la falta de respuesta al canjear un código ya canjeado.
- (`/gacha-log`) El parámetro de cuenta ahora es obligatorio para evitar confusiones.
- Mostrar mejores mensajes de error para "Permisos faltantes" y "Mensaje bloqueado por AutoMod".
- Textos simplificados en el proceso de configuración de cuentas.

### Corrección de Errores

Varios arreglos y mejoras.

## v1.15.7

### Nuevas Funciones

- (`/web-events`) Añadido nuevo comando para ver eventos web en curso y configurar notificaciones.
- (`/notes`) Añadidos notificaciones de comisión de recompensas y puntos semanales de Ridu para ZZZ.
- (`/about`) Añadido botón de changelog.

### Mejoras

- (`/gacha-log view`) Mejorado el rendimiento de la página de gacha log corrigiendo problemas de caché.
- (`/about`) Eliminados los últimos cambios de git.
- (`/mimo`) Ordenar los objetos de la tienda de Mimo Viajero de más caro a más barato en la compra automática.
- Mejorada la localización para otros idiomas.

### Corrección de Errores

- (`/characters genshin`) Corregido KeyError causado por viajeros sin elemento.
- (`/characters genshin`) Corregido nivel de talento incorrecto para Kamisato Ayaka.
- (`/stats`) Corregido error "Record card not found for ..." para ZZZ.
- (`/build genshin`) Corregido error "No block lists to draw".
- (`/gacha-log view`) Corregido porcentaje incorrecto de 50/50.
- (`/gacha-log view`) Corregido error de validación 422 en la web app.
- (`/gacha-log view`) Manejo de tamaño de entrada inválido.
- (`/gacha-log import`) Manejo de tipos de banner inválidos al importar registros de gacha.
- (`/gacha-log import`) Corregida importación UIGF.
- (`/mimo`) Confirmar estado de finalización de tareas antes de enviar notificaciones.
- (`/mimo`) Añadidos intervalos de espera entre tareas para evitar límites de tasa.
- (`/mimo`) Eliminar etiquetas HTML de los nombres de tareas.
- (`/mimo`) Corregido error después de comprar un objeto.
- (`/profile`) Corregida la mezcla de configuraciones de las tarjetas de diferentes juegos.
- (`/profile genshin`) Corregidos talentos extra en tarjetas de equipo.
- (`/profile genshin`) Corregido error de validación con Mavuika.
- (`/search`) Corregido selector de refinamiento de W-engine que no actualizaba el valor seleccionado.
- (`/notes`) Corregido error de validación para Honkai Impact 3rd.
- (`/challenge zzz assault`) Corregido que los iconos de buff no se mostraran.

## v1.15.6

### Nuevas Funciones

- (`/mimo`) Añadido soporte para el Mimo Viajero de Genshin (evento ya finalizado al momento de escribir esto).
- (`/mimo`) Añadida función de sorteo automático de premios.
- (`/challenge zzz`) Añadido soporte para el modo Deadly Assault.
- (`/profile hsr`) Añadida plantilla 2.
- (`/notes`) Añadida información de comisión de recompensas y puntos semanales de Ridu para ZZZ.

### Mejoras

- (`/check-in`) Reducción de solicitudes duplicadas a la API de check-in.

### Corrección de Errores

- (`/mimo`) Corregido que se enviaran notificaciones cuando no se completaban tareas ni se reclamaban puntos.
- (`/mimo`) Corregido cómo se determinan los objetos valiosos.
- (`/mimo`) Manejo del error -510001.
- (`/mimo`) Corregido que algunos objetos valiosos se contaran como decoraciones en HSR.
- (`/mimo`) Deshabilitado el botón de sorteo cuando se alcanza el límite.
- (`/challenge zzz`) Corregidos iconos de bangboo incorrectos en las tarjetas.
- (`/events`) Corregido progreso incorrecto en el Abismo Espiral.
- (`/gacha-log view`) Corregido número incorrecto de tiradas desde la última rareza.
- Corregida la lógica de creación de carpetas de imágenes estáticas.

## v1.15.5

### Nuevas Funciones

- (`/mimo`) Finalización automática de tareas que requieren comentar en una publicación.
- (`/mimo`) Finalización automática de tareas que requieren seguir un tema.
- (`/mimo`) Añadida función de sorteo.
- (`/mimo`) Añadidas configuraciones de notificaciones.
- (`/profile zzz`) Añadida configuración de imagen para usar artes de Cinema 3 en las tarjetas de builds.
- (`/profile zzz`) Añadidos datos de tarjetas de Harumasa y Miyabi.
- (`/search`) Ocultar la categoría de "contenido no lanzado" en ciertos servidores.

### Mejoras

- (`/mimo`) Mostrar progreso de tareas para ciertas tareas.
- (`/mimo`) Mostrar nombres de tareas completadas en la notificación.
- (`/mimo`) Mejorado el rendimiento de tareas automáticas.
- (`/challenge zzz shiyu`) Actualizado el diseño de las tarjetas.
- (`/challenge zzz shiyu`) Evitar obtener datos de agentes dos veces.
- Mostrar enlace de invitación al servidor de Discord en los pies de los mensajes de error.
- Quitar estado de carga de objetos al ocurrir un error.
- Añadidas etiquetas de encendido/apagado a los botones de alternancia.
- Mejorada la lógica de solicitudes proxy a la API.
- Mejorada la lógica de manejo de errores en tareas automáticas.

### Corrección de Errores

- (`/mimo`) Añadido intervalo de espera después de canjear un código de premio de mimo.
- (`/mimo`) Corregidas tareas faltantes en la lista de tareas.
- (`/mimo`) Corregidas tareas de comentarios que no se completaban.
- (`/mimo`) Corregido que se enviaran notificaciones cuando no se completaban tareas.
- (`/mimo`) Solo mostrar cuentas de HoYoLAB en el autocompletado de cuentas.
- (`/mimo`) Corregido `QuerySetError` en tareas automáticas.
- (`/mimo`) Corregido que los comentarios de publicaciones no se eliminaran.
- (`/mimo`) Manejo de casos donde Traveling Mimo no está disponible para un juego.
- (`/profile zzz`) Corregido que no se añadieran resaltados los substats en la carta.
- (`/profile zzz`) Corregido que los agentes se identificaran como en caché cuando no lo estaban.
- (`/characters zzz`) Corregido conteo total de agentes incorrecto.
- (`/gacha-log upload`) Corregidos problemas con importaciones de zzz.rng.moe.
- (`/redeem`) Corregido que cuentas de Miyoushe aparecieran en el autocompletado.
- (`/build genshin`) Manejo de tasas de uso faltantes para algunos personajes.
- (`/events`) Corregido que futuros warps de HSR no se mostraran como "no disponible aún".
- Adaptado a nuevas claves de ZenlessData.
- Corregidos problemas con la API de Hakushin.
- Captura de excepciones generales en el método `dm_user`.

## v1.15.4

### Nuevas Funciones

- (`/build genshin`) Mostrar información sobre sinergias de personajes.
- (`/mimo`) Añadido nuevo comando para gestionar el Mimo Viajero.

### Mejoras

- (`/build genshin`) Mejorados los diseños de las tarjetas.
- (`/notes`) Usar la API de calendario de eventos para revisar eventos de planar fissure.

### Corrección de Errores

- (`/build genshin`) Corregidos algunos problemas de UI.
- (`/events`) Corregidos problemas que hacían inaccesible el comando.
- (`/gacha-log upload`) Corregido `ValidationError` con datos UIGF.
- (`/gacha-log upload`) Corregido `KeyError` con versiones UIGF anteriores a la 3.0.
- (`/search`) Corregidas opciones duplicadas en autocompletado.

## v1.15.3

El código defectuoso en versiones anteriores causó que algunos usuarios vieran el error de "demasiadas solicitudes" al iniciar sesión, por favor revisa
[este artículo](./too-many-requests.md) para más información.

### Nuevas Funciones

- (`/profile zzz`) Añadido selector para elegir substats a resaltar.
- (`/profile hsr`) Añadidos datos de tarjetas de Fugue y Sunday.

### Mejoras

- (`/redeem`) Enlaces de canje de código ahora se muestran con el código mismo.
- (`/challenge genshin theater`, `/challenge genshin abyss`) Mostrar el elemento del viajero en las tarjetas.
- (`/accounts`) Mostrar mensaje de error personalizado para el error de "demasiadas solicitudes".

### Corrección de Errores

- Corregido que los comandos no se tradujeran a otros idiomas.
- Corregido que los modales que expiraban no se cerraran correctamente.
- Corregida la lógica de reintentos y manejo de errores de la API.
- Corregido `ValueError` en algunos comandos.
- Corregido tiempo de espera de los modales demasiado corto.
- Manejo de `KeyError` en el endpoint de redirección del servidor web.
- (`/profile`) Manejo de `EnkaAPIError` al obtener datos de Enka Network API.
- (`/profile`) Manejo de errores de gateway timeout de Enka Network API.
- (`/profile`) Corregido `BadRequestError` al generar imágenes AI.
- (`/upload`) Corregido `BadRequestError` al subir imágenes.

## v1.15.2 y anteriores

Los changelogs anteriores fueron escritos en el canal #updates de
