
# Seguridad de la Cuenta

Esta sección explica cómo se utiliza y almacena la información de tu cuenta. Recuerda que Hoyo Buddy es de código abierto, y cualquiera puede confirmar cómo se procesan los datos simplemente revisando el código fuente.

## Aviso Legal

Proporcionar tus cookies es una decisión **TOTALMENTE TUYA**. Aunque muchas funciones del bot dependen de las cookies de HoYoLAB del usuario, Hoyo Buddy nunca obliga a los usuarios a proporcionarlas. El desarrollador ha implementado medidas de seguridad sólidas para evitar filtraciones de tus cookies. En caso de una brecha, su responsabilidad será informarte inmediatamente y recomendar el cambio de contraseña. En resumen: ¡usa esta herramienta bajo tu propio riesgo y criterio!

## ¿Cómo funciona Hoyo Buddy?

HoYoLAB identifica a los usuarios mediante cookies, y Hoyo Buddy las utiliza para simular solicitudes a HoYoLAB como si fueras tú. Así puede acceder a información como las notas en tiempo real, estadísticas de personajes, y más.

## ¿Qué permisos tienen las Cookies?

| Permiso | ¿Lo permite? |
|--------|--------------|
| Iniciar sesión en tu cuenta del juego | ❌ |
| Cambiar la contraseña de tu cuenta | ❌ |
| Acceder a información sensible (correo, teléfono, etc.) | ❌ |
| Publicar/comentar/responder en HoYoLAB con tu identidad | ✅ |
| Ver estadísticas y datos no sensibles del Battle Chronicle | ✅ |

## Funciones de Seguridad

- **Protección del servidor**: El servidor está protegido por una contraseña extremadamente difícil de descifrar.

- **Protección en memoria**: Tu correo y contraseña solo se mantienen temporalmente en memoria, haciendo casi imposible que se roben.

- **Encriptación fuerte**: Tus credenciales se encriptan con RSA antes de enviarse. Cada envío genera resultados distintos.

- **Conexión segura (HTTPS)**: Toda transferencia se realiza mediante HTTPS. Incluso si alguien intercepta la solicitud, no podrá ver su contenido.

- **Sin almacenamiento permanente**: Tu correo y contraseña **NO** se guardan en la base de datos. Solo se almacenan cookies encriptadas.

- **Seguridad de la base de datos**: La base de datos está protegida con una contraseña muy fuerte.

- **Uso limitado de cookies**: Las cookies no permiten cambios críticos; solo sirven para interactuar con HoYoLAB.

## Preguntas Frecuentes (FAQ)

| Pregunta | Respuesta | Notas |
|---------|----------|-------|
| ¿Se almacenan mi correo y contraseña? | ❌ | [Ver código](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| ¿Pueden iniciar sesión en mi cuenta del juego? | ❌ | [Ver más](#pueden-iniciar-sesión-en-mi-cuenta-del-juego) |
| ¿Pueden cambiar mi contraseña? | ❌ | [Ver más](#pueden-cambiar-la-contraseña-de-mi-cuenta) |
| ¿Pueden robar o vender mi cuenta? | ❌ | [Ver más](#pueden-robarvender-mi-cuenta) |
| ¿Pueden banearme por usar Hoyo Buddy? | ❔ | [Ver más](#pueden-banearme-por-usar-hoyo-buddy) |
| ¿Las cookies expiran? | ✅ | Después de 1 año |
| ¿Se invalidan las cookies al cambiar mi contraseña? | ✅ | Inmediatamente |
| ¿Pueden publicar con mi identidad? | ✅ | [Ver más](#acceso-a-las-funciones-de-comunidad-de-hoyolab-con-cookies) |

### ¿Pueden banearme por usar Hoyo Buddy?

No lo sé.

Ningún usuario ha reportado un baneo hasta ahora. Pero usar herramientas de terceros va en contra de los TOS. El riesgo es bajo, pero existe. Si no te sientes cómodo, no uses Hoyo Buddy. En todo caso, el baneo sería solo en HoYoLAB, no en el juego.

### Acceso a las funciones de comunidad de HoYoLAB con cookies

Es posible publicar, comentar, responder y unirse a temas en HoYoLAB con tus cookies. El bot solo utiliza esto para completar tareas de Mimo Viajero. Si la opción de autocompletar está desactivada, no se accede a funciones de comunidad.

### ¿Cómo se almacenan mis Cookies?

Tus cookies están guardadas en una base de datos alojada por [Hetzner](https://www.hetzner.com/), una empresa confiable. Para acceder a ellas, un atacante necesitaría tanto la contraseña del servidor como la de la base de datos. En caso de una filtración, se notificará en Discord y se recomendará cambiar contraseñas para invalidar las cookies.

### ¿Cómo funciona el inicio de sesión con correo y contraseña?

1. Ingresas tu correo y contraseña.
2. El bot los encripta.
3. Envía estos datos a los servidores de Hoyoverse vía HTTPS.
4. Recibe las cookies como respuesta.
5. Las cookies se encriptan y se almacenan en la base de datos.

:::info
Tu correo y contraseña nunca se almacenan permanentemente.
:::

### ¿Pueden iniciar sesión en mi cuenta del juego?

No.

Las cookies no tienen permisos suficientes. Además, aunque se tuviera usuario y contraseña (que no se guardan), igual se necesitaría verificación por correo.

### ¿Pueden cambiar la contraseña de mi cuenta?

No.

Las cookies no permiten cambiar la contraseña. Para eso se necesita el inicio de sesión con verificación de correo.

### ¿Pueden robar/vender mi cuenta?

No.

Cambiar la contraseña es [imposible](#pueden-cambiar-la-contraseña-de-mi-cuenta) sin acceso a tu correo. Incluso si alguien tuviera tus cookies, no podrían [iniciar sesión en tu cuenta del juego](#pueden-iniciar-sesión-en-mi-cuenta-del-juego).
