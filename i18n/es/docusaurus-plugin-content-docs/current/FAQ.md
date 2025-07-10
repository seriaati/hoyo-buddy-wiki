<!-- markdownlint-disable MD026 MD040 MD047 -->
# Preguntas Frecuentes

## ¡Algo no está funcionando!

Si tienes algún problema con Hoyo Buddy, puedes mencionar a @seria_ati en el [servidor de Discord](https://link.seria.moe/hb-dc) o [enviarme un mensaje directo](https://discord.com/users/410036441129943050).

## ¿Es seguro usar Hoyo Buddy?

Por favor, lee la página de [Seguridad de la Cuenta](./Account-Security.md).

## ¿Qué método de inicio de sesión debo usar?

| Método | Iniciar sesión en móvil | Iniciar sesión en PC | Iniciar sesión en consola | Canjeo de códigos automático y manual | Notas
|---|---|---|---|---|---
| Correo y contraseña | ✅ | ✅ | ✅[*](./Before-Start.md) | ✅ | Más fácil
| DevTools | ❌ | ✅ | ❌ | ❌ | ...

:::note

Correo y contraseña se refieren a los datos de la **cuenta de Hoyoverse**, no a cuentas de Google, Apple, etc.

:::

Leer más:

- [¿Es seguro Hoyo Buddy?](./Account-Security.md)
- [¿Cómo funciona el método de inicio de sesión con correo y contraseña?](./Account-Security.md#cómo-funciona-el-método-de-inicio-de-sesión-con-correo-y-contraseña)
- [¿Por qué las funciones de canjeo de códigos son exclusivas para usuarios que inician sesión con correo y contraseña?](#por-qué-las-funciones-de-canjeo-de-códigos-son-exclusivas-para-usuarios-que-inician-sesión-con-correo-y-contraseña)

## Algunos textos siguen apareciendo en inglés, aunque seleccioné otro idioma en /settings

Esto ocurre porque la traducción de esos textos aún no está lista. Hoyo Buddy solo cuenta con un pequeño grupo de voluntarios para traducir, y todos tenemos nuestra vida personal. Si quieres ayudar a acelerar este proceso, ¡eres bienvenido a unirte al equipo de traducción! Si te interesa, revisa la [guía de contribución](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) para más información.

## ¿Cómo se utiliza mi información?

Tus datos nunca se comparten con terceros; para más información, por favor lee la [política de privacidad](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md).

## ¿Hoyo Buddy es de código abierto?

Sí, Hoyo Buddy es de código abierto. Puedes encontrar el código fuente en [GitHub](https://github.com/seriaati/hoyo-buddy/), por favor respeta la [licencia](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE) al usar el código.

### ¿Puedo alojar Hoyo Buddy por mi cuenta?

No brindaré asistencia para el autoalojamiento, pero si tienes suficientes conocimientos técnicos, es posible configurar tu propia instancia de Hoyo Buddy. Sin embargo, por motivos de derechos de autor, los recursos que utiliza Hoyo Buddy están en un repositorio privado, lo que significa que las funciones de generación de imágenes no funcionarán en tu instancia (excepto las plantillas de tarjetas de terceros en /profile).

## ¿Por qué los botones/selecciones están deshabilitados?

Para ahorrar recursos, los elementos de la interfaz de usuario expiran después de 10 minutos. Para evitar confusiones, los elementos se deshabilitan cuando expiran.

## Error de "Demasiadas Solicitudes" al agregar cuentas

Consulta [esta página](./too-many-requests.md) para más información.

## ¿Por qué las funciones de canjeo de códigos son exclusivas para usuarios que inician sesión con correo y contraseña?

Hoyoverse utiliza una cookie especial llamada `cookie_token` para el canjeo de códigos, que expira muy rápido. `cookie_token` solo se usa para el canjeo de códigos, por eso otras funciones siguen funcionando. Cuando los usuarios inician sesión con su correo electrónico y contraseña, se recibe una cookie especial llamada `stoken`, que puede usarse para renovar el `cookie_token`, de ahí la exclusividad de la función.

## No veo mis cuentas de juego después de iniciar sesión

### Método de correo y contraseña

Asegúrate de iniciar sesión con las mismas credenciales que usas en el juego.

- [Uso métodos de inicio de sesión de terceros (Google, Facebook, etc.)](./Before-Start.md#iniciar-sesión-con-servicios-de-terceros)
- [Soy jugador de consola](./Before-Start.md#soy-un-jugador-de-consola

### Método DevTools

Asegúrate de iniciar sesión en HoYoLab con las mismas credenciales que usas en el juego. Por ejemplo, si usas una cuenta de Google [a@gmail.com](mailto:a@gmail.com) para iniciar sesión en Genshin Impact, entonces usa esa misma cuenta de Google [a@gmail.com](mailto:a@gmail.com) para iniciar sesión en HoYoLAB.

Si ves entradas duplicadas de Cookies, intenta iniciar sesión en una ventana de incógnito.

## ¿Por qué veo el error "Fallo en la interacción"?

La mayoría de las veces esto ocurre por reinicios del bot (para aplicar actualizaciones de código), solo necesitas volver a escribir el comando. Sin embargo, si esto sigue ocurriendo, significa que algo está roto y deberías reportarlo en el [servidor de Discord](https://link.seria.moe/hb-dc).

## Mi cuenta fue hackeada después de agregarla a Hoyo Buddy

Consulta [esta página](./account-hacked.md) para más información.