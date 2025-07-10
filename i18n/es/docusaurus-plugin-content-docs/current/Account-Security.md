# Seguridad de la Cuenta

En esta sección se explica cómo se utiliza y almacena la información de tu cuenta. Recuerda que Hoyo Buddy es de código abierto, y cualquier persona puede verificar cómo se procesan los datos simplemente revisando el código fuente.

## Disclaimer

Proporcionar tus cookies es una decisión **TOTALMENTE TUYA**. Si bien muchas funciones del bot dependen de las cookies de HoYoLAB del usuario para funcionar correctamente, Hoyo Buddy nunca obliga a los usuarios a proporcionarlas en contra de su voluntad. El desarrollador ha implementado medidas de seguridad sólidas para evitar cualquier filtración de tus cookies. En caso de una brecha de datos, la principal responsabilidad del desarrollador será informar de inmediato a los usuarios sobre la situación y recomendar fuertemente cambiar sus contraseñas. En resumen: usa esta herramienta bajo tu propia responsabilidad y criterio.

## ¿Cómo funciona Hoyo Buddy?

Hoyo Buddy utiliza tus cookies de HoYoLAB para acceder a la información de tu cuenta. Al obtener tus cookies, Hoyo Buddy puede simular solicitudes hacia HoYoLAB usando tu identidad, lo que le permite acceder a datos como notas en tiempo real y mas.

## ¿Qué son las Cookies?

Las cookies 🍪 son pequeños fragmentos de datos que los sitios webs almacenan en tu computadora o dispositivo cuando los visitas. No son programas, no pueden contener virus ni son archivos espía. Más bien, funcionan como una nota que el sitio web le deja a tu navegador para recordar ciertos detalles sobre ti o tu visita

Imagina que entras en una tienda y el vendedor te da una calcomanía. Esa calcomanía podría tener información como los productos que miraste, cuánto tiempo estuviste o tus preferencias. Luego, cuando volvés a la tienda, el vendedor mira tu calcomanía y puede personalizar tu experiencia según la información que contiene.

De la misma forma, cuando visitas HoYoLAB, este le da una "cookie" a tu navegador. Esa cookie le permite al sitio web identificar que eres tu quien está accediendo.

## ¿Qué permisos tienen las Cookies?

| Permiso | ¿Lo permite? |
|---|---|
| Iniciar sesión en tu cuenta | ❌ |
| Cambiar la contraseña de tu cuenta | ❌ |
| Acceder a información sensible (correo, número de teléfono, etc.) | ❌ |
| Publicar/comentar/responder en HoYoLAB con tu identidad | ✅ |
| Acceder a notas en tiempo real, estadísticas de personajes y otra información no sensible del cronograma de batalla | ✅ |

## Preguntas Frecuentes (FAQ)

| Pregunta | Respuesta | Notas |
|---|---|---|
| ¿Se guardan mi correo y contraseña? | ❌ | [Ver código](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| ¿Pueden iniciar sesión en mi cuenta del juego? | ❌ | [No es posible](#Pueden-iniciar-sesión-en-mi-cuenta-del-juego) |
| ¿Pueden cambiar la contraseña de mi cuenta? | ❌ | [No es posible](#Pueden-cambiar-la-contraseña-de-mi-cuenta) |
| ¿Pueden robar mi cuenta? | ❌ | [No es posible](#pueden-robarvender-mi-cuenta) |
| ¿Pueden vender mi cuenta? | ❌ | [No es posible](#pueden-robarvender-mi-cuenta) |
| ¿Pueden banearme por usar Hoyo Buddy? | ❔ | [Leer más](#Pueden-banearme-por-usar-Hoyo-Buddy) |
| ¿Las cookies expiran? | ✅ | Después de 1 año|
| ¿Las cookies se invalidan si cambio mi contraseña? | ✅ | Inmediatamente |
| ¿Pueden publicar en HoYoLAB con mi identidad? | ✅ | [Leer más](#accessing-hoyolab-community-features-with-cookies) |

### ¿Pueden banearme por usar Hoyo Buddy?

La respuesta corta es: no lo sé

Hasta ahora, ningún usuario me ha informado que haya sido baneado por usar Hoyo Buddy. Sin embargo, debes tener en cuenta que usar herramientas de terceros para acceder a los datos de tu cuenta va en contra de los Términos de Servicio (TOS). Aunque el riesgo de ser baneado es bajo, no es cero, y no puedo garantizarte nada. Si te preocupa la posibilidad de ser baenado, lo más recomendable es no usar Hoyo Buddy

Técnicamente, si llegara a ocurrir un baneo, sería en HoYoLAB, no en el juego. Esto significa que podrías seguir jugando normalmente, pero ya no tendrías acceso a HoYoLAB.

### Acceso a las funciones de comunidad de HoYoLAB con cookies

Es posible realizar publicaciones, comentarios, respuestas y unirse a temas en HoYoLAB utilizando tu cookies.

En el bot, las funciones de la comunidad se utilizan exclusivamente para completar tareas de evento Mimo Viajero. Si hay una tarea que requiere hacer un comentario, el bot lo publicará en tu nombre y luego lo eliminará automáticamente.

Si la opción de autocompletar tareas de Mimo Viajero está desactivada en tu cuenta, el boy no accede a ninguna función de comunidad

### ¿Cómo se almacenan mis Cookies?

Tus cookies se almacenan de forma segura en una base de datos alojada por [Hetzner](https://www.hetzner.com/). Para que un atacante acceda a tus cookies, necesitará obtener tanto la contraseña de la cuenta del servidor como la contraseña de la base de datos. Este tipo de situaciones están relacionadas con filtraciones de datos, pero es importante destacar que Hetzner es un proveedor de alojamiento confiable y ampliamente utilizado, y este tipo de incidentes son muy poco comunes. Sin embargo, en el caso poco probable de una filtración, se hará un anuncio inmediato en el servidor de Discord, instando a todos los usuarios a cambiar sus contraseñas. Esto hará que las cookies almacenadas en la bse de datos queden invalidadas, protegiendo así tu privacidad y seguridad.

### ¿Cómo funciona el método de inicio de sesión con correo y contraseña?

:::info

Tu correo y contraseña nunca fueron almacenados.

:::

Este método no está diseñado para comprometer la seguridad de tu cuenta, sino para facilitar el proceso de configuración. Muchos usuarios  tienen dificultades para encontrar sus cookies de forma manual, por eso introdujimos esta alternativa más simple. Funcionando de forma muy similar al inicio de sesión de HoYoLAB con correo y contraseña, en ocasiones puede requerir verificación CAPTCHA solo por razones de seguridad. Tu correo y contraseña nunca se guardan en la base de datos. Solo se mantienen temporalmente en la memoria, encriptados, antes de ser enviados al servidor de Hoyoverse, eliminándolos apenas recibimos las cookies.Este método funciona igual que el método vía DeVTools: solo se guardan las cookies en la base de datos. Algunas personas pueden considerar el método DevTools más seguro, pero técnicamente el resultado es el mismo

### ¿Pueden iniciar sesión en mi cuenta del juego?

No, no puedo.

Las cookies no tienen los permisos suficientes para iniciar sesión en tu cuenta del juego; para eso se necesita iniciar sesión con el usuario y contraseña. Tu usuario y contraseña nunca fueron almacenados; y aunque lo fueran, iniciar sesión desde un dispositivo desconocido requiere verificación por correo, y no tengo acceso a tu correo electrónico.

### ¿Pueden cambiar la contraseña de mi cuenta?

No, no puedo.

Las cookies no permiten cambiar la contraseña de tu cuenta; eso requiere iniciar sesión con usuario y contraseña. Tu usuario y contraseña nunca fueron almacenados; y aunque lo fueran, iniciar sesión desde un dispositivo desconocido requiere verificación por correo, y no tengo acceso a tu correo electrónico.

### ¿Pueden robar/vender mi cuenta?

No, no puedo.

Robar o vender tu cuenta requiere cambiar la contraseña, lo cual es [imposible](#Pueden-cambiar-la-contraseña-de-mi-cuenta). Incluso si alguien más tuviera acceso a tus cookies, no es posible [iniciar sesión en tu cuenta del juego](#pueden-iniciar-sesión-en-mi-cuenta-del-juego) con ellas.
