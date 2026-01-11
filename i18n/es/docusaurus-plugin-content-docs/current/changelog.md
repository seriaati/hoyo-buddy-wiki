# Cambios

## v1.16.15

### Nuevas funciones

- (`/build zzz`) Se añadió un comando para mostrar builds de personajes para ZZZ.
- (`/profile hsr`) Se añadieron datos de la tarjeta de La Dalia.
- (`/mimo`) Se volvió a habilitar el soporte de Mimo Viajero para Genshin Impact.
- (`/mimo`) Se añadió soporte para nuevos tipos de tareas de Mimo Viajero en Genshin Impact.
- Se mejoró la detección de fuentes para manejar mejor árabe y otros scripts no latinos.

### Mejoras

- (`/profile hsr`) Se mejoró el color de la tarjeta de La Dalia.
- Se implementaron actualizaciones sin tiempo de inactividad - el bot ya no se desconectará durante las actualizaciones de código.

### Corrección de errores

- (`/profile genshin`) Se corrigió KeyError al convertir personajes de Genshin Impact desde HoYoLAB.
- (`/gacha-log view`) Se corrigieron los íconos de objetos faltantes para registros de gacha de HSR y ZZZ.
- (`/gacha-log view`) Se corrigieron problemas de interfaz en dispositivos con pantallas pequeñas.
- Se corrigió que los interruptores de alternancia no devolvieran correctamente `False` para opciones deshabilitadas.
- Se corrigieron varios problemas internos de implementación y programación.

## v1.16.14

### Nuevas Funciones

- (`/profile`) Se agregó soporte para nuevos personajes de ZZZ.
- (`/exploration`) Se agregaron nuevas regiones.
- (`/events`) Se agregó soporte para ZZZ.

### Mejoras

- (`/characters`) Ahora los personajes se ordenan por nivel de forma predeterminada.
- (`/characters`) Agregado un brillo sutil según la rareza del personaje en las tarjetas.
- (`/about`) Se usan URLs de protocolo de Discord para los enlaces de usuario.
- Agregados botones de configuración ficticios para guiar a los usuarios a usar `/settings`.

### Correcciones de Errores

- (`/challenge genshin`) Se corrigió el desbordamiento de texto en las tarjetas de Conflagración estigia y Teatro Imaginario.
- (`/challenge genshin theater`) Se corrigió que los Desafíos de Arcana no aparecían cuando el idioma estaba en vietnamita.
- (`/challenge hsr anomaly`) Se corrigió el desbordamiento de texto en el nombre de la temporada.
- (`/settings`) Se corrigió que no se podían seleccionar cuentas para la configuración de Mimo Viajero.
- (`/settings`) Se corrigió que las cuentas de TOT podían acceder a la configuración de recordatorios.
- (`/profile hsr`) Se corrigió las posiciones de los "trace" en las tarjetas de construcción.
- (`/profile hsr`) Se corrigió iconos de estadísticas faltantes para ciertos personajes.
- (`/search`, `/profile zzz`) Se corrigió los personajes faltantes en el autocompletado, como Ellen y Soldier 11.
- (`/settings`) Se corrigió la configuración incorrecta que se cambiaba al hacer clic en los interruptores de notificaciones de canje.
- (`/profile zzz`) Se corrigió la imagen de Rina no estaba centrada en las tarjetas de equipo.
- Cambiado el carácter de enmascarado de UID de '*' a 'x' para evitar problemas con markdown.

## v1.16.13

### Nuevas Funciones

- (`/profile`) Se agregó soporte para nuevos personajes de HSR y ZZZ.
- (`/challenge genshin theater`) Se agregó soporte para los Desafíos de Lunar Arcanum.
- (`/profile hsr`) Se agregaron estadísticas de "cono de luz" para personajes de HoYoLAB/Miyoushe.
- (`/challenge hsr anomaly`) Se agregó soporte para Arbitraje atípico.
- (`/profile genshin`) Se agregó soporte para Manekin y Manekina.
- (`/gacha-log`) Se agregó soporte para Edén Miliastra.
- (`/settings`) Interfaz de comando de configuración completamente renovada.

### Mejoras

- (`/gacha-log view`) Se ha mejorado el rendimiento del visor de registro del gachapon.
- Se ha mejorado el rendimiento del login diario, auto canje y auto Mimo Viajero.
- Se han hecho mejoras generales en el rendimiento del bot.

### Correcciones de Errores

Demasiados para listar aquí, ver el [registro de cambios completo](https://github.com/seriaati/hoyo-buddy/releases/tag/v1.16.13).

## v1.16.12

**Nota:** Esta versión desactiva *Mimo Viajero* para *Genshin Impact* debido a su eliminación de HoYoLAB.  
La función volverá a habilitarse cuando esté disponible nuevamente.

### Nuevas Funciones

- (`/profile`) Se agregó compatibilidad con nuevos personajes de HSR y ZZZ.  
- (`/gacha-log import`) Se utiliza nuestro [script propio](https://github.com/studiobutter/gacha-stuff) para importar registros de gacha.  
- (`/challenge zzz shiyu`) Se reemplazó el tiempo más rápido por el tiempo total de completado.  
- (`/challenge genshin stygian`) Se agregó información sobre debilidades y resistencias de enemigos.  
- Se agregó compatibilidad con la zona Nod-Krai.

### Mejoras

- (`/profile`) Se mejoró el manejo de errores para solicitudes a la API de Enka Network.  
- (`/profile`) Se agregó manejo de errores para solicitudes a la API de builds de Enka Network.  
- (`/profile`) Se agregó manejo de errores para APIs de generación de tarjetas de terceros.  
- (`/accounts`) Se mejoró el manejo de errores de la API OAuth2 de Discord.  
- (`/notes`) Se añadieron descripciones para los diferentes campos en la ventana de configuración de recordatorios.  
- Debido a un bug de Discord, las imágenes en formato WEBP no se pueden copiar, por lo que ahora se envían infografías en formato PNG.

### Corrección de Errores

- (`/gacha-log view`) Se corrigió que los personajes de *Invitación Estelar Personalizado* no se contaban como pérdidas de 50/50.  
- (`/gacha-log view`) Se corrigió la rareza incorrecta para algunos objetos de ZZZ.  
- (`/search`) Se corrigió que algunos personajes no lanzados de ZZZ aparecían en el autocompletado.  
- (`/challenge zzz shiyu`) Se manejan correctamente los casos en que no hay tiempo total de completado.  
- (`/upload`) Se corrigieron problemas al subir imágenes.  
- (`/challenge genshin stygian`) Se corrigió el desbordamiento de texto para algunos enemigos.  
- (`/challenge zzz assault`) Se corrigieron problemas para acceder a íconos de *bangboos* en desafíos anteriores.  
- (`/gacha-log view`) Se maneja correctamente la entrada de tipos de banner inválidos.  
- (`/challenge`) Se corrigieron problemas con el menú desplegable de fases cuando hay más de 25 fases.

## v1.16.11

### Nuevas Funciones

- (`/search`) Se agregó al Trazacaminos de hielo.  
- (`/accounts`) Se añadió identificador de dispositivo para inicios de sesión con correo , lo que permite ver el dispositivo de Hoyo Buddy en el centro de cuentas de Hoyoverse.  

### Corrección de Errores

- (`/profile zzz`) Se actualizó **enka.py** para coincidir con el nuevo formato de la API.  
- (`/profile`) Se corrigió el error que hacía que los resultados de Enka siempre se mostraran en inglés.  
- (`/exploration`) Se corrigió el desbordamiento de texto en el nivel de tribu.  
- Se corrigió el problemas de traducción con la configuración regional **en-GB**.

## v1.16.10

### Nuevas Funciones

- (`/profile hsr`) Soporte para nuevos personajes: Hysilens y Céridra.
- (`/gacha-log upload`) Se mostrará un error cuando la cuenta del juego y el juego importado sean diferentes.

### Mejoras

- (`/gacha-log import`) Mejorado el rendimiento de importación.
- Se almacenará en caché los datos de uso frecuente como configuraciones y ajustes de tarjetas para mejorar el rendimiento.
- Se difuminará 5 dígitos del UID en lugar de 3.

### Corrección de Errores

- (`/profile zzz`) Se corrigió las imágenes faltantes de las skins para las tarjetas del equipo.
- (`/profile zzz`) Se corrigió los datos faltantes para la skin de verano de Alice.
- (`/profile zzz`) Se corrigió un error causado por los datos de las skins.
- (`/profile zzz`) Se corrigió que a veces no se mostraban las configuraciones de Enka Network.
- (`/search`) Se corrigió que el contenido no publicado apareciera en el autocompletado de búsqueda normal.

## v1.16.9

### Nuevas Funciones

- (`/profile zzz`) Se agregó compatibilidad con Enka Network.
- (`/about`) Se añadieron más enlaces al comando.
- Se añadieron los comandos `/changelog`, `/invite` y `/help`.
- Se agregó soporte de documentación en chino simplificado y español.
- Se añadió una [página de estado](https://status.seria.moe/?category=Hoyo%20Buddy) para verificar el estado del bot.

### Mejoras

- (`/settings`) Este comando ahora responde con mensajes efímeros (visibles solo para ti).

### Correcciones de Errores

- (`/accounts`) Se corrigieron problemas de inicio de sesión en cuentas.
- (`/gacha-log manage`) Se corrigió la rareza incorrecta de objetos al exportar desde ZZZ.
- (`/gacha-log view`) Se corrigió el nombre de los objetos que aparecían como "???" en personajes y conos de luz del banner de colaboración de HSR.
- (`/profile genshin`) Se solucionó el problema donde no se mostraba el embed del jugador cuando la fuente de datos era HoYoLAB.

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
