# Cuentas hackeadas: explicación de por qué Hoyo Buddy no fue el responsable

## ¿Cómo funciona Hoyo Buddy?

Cuando vinculas tu cuenta usando correo y contraseña:

1. Ingresas tu correo y contraseña.
2. El bot encripta ambos valores (haciéndolos ilegibles).
3. Estas credenciales encriptadas se envían a los servidores de Hoyoverse mediante HTTPS (una conexión segura).
4. El servidor de Hoyoverse devuelve cookies (datos de inicio de sesión).
5. Estas cookies se encriptan y se guardan en la base de datos.

## Funciones de Seguridad

- **Protección del servidor**: El servidor utiliza una contraseña que tardaría siglos en ser descifrada. Los registros de inicio de sesión no muestran accesos sospechosos exitosos.

- **Memoria protegida**: Tu correo y contraseña solo se mantienen en la memoria de forma temporal, lo que hace casi imposible que se roben desde un servidor en línea.

- **Fuerte encriptación**: Tus credenciales se encriptan con RSA antes de enviarse a Hoyoverse. Esto genera resultados diferentes cada vez que se envían los datos, haciendo imposible revertir el proceso.

- **Conexiones seguras**: Todas las transferencias de datos se realizan mediante HTTPS, lo que significa que todo está encriptado. Incluso si alguien intercepta la solicitud, no podrá ver lo que contiene.

- **Almacenamiento temporal**: Tu correo y contraseña NO se guardan en la base de datos. Se eliminan una vez que se obtienen las cookies. Solo las cookies encriptadas se almacenan.

- **Seguridad de la base de datos**: La base de datos está protegida con una contraseña que también tardaría siglos en ser descifrada.

- **Uso limitado de cookies**: Las cookies por sí solas no son suficientes para robar tu cuenta. Solo se pueden usar para HoYoLAB, no para el centro de cuentas, donde se hacen cambios reales en tu cuenta.

## Cómo se roban realmente las cuentas

Para robar una cuenta de Hoyoverse, alguien necesita:

1. Tener tu correo y contraseña de Hoyoverse para iniciar sesión en el centro de cuentas (las cookies NO son suficientes).
2. Solicitar el cambio de dirección de correo (requiere verificación desde tu correo original).
3. Acceder a tu correo para obtener el código de verificación
4. Cambiar el correo de tu cuenta por el suyo.
5. Después de eso, controlan tu cuenta, ya que los reseteos de contraseña llegarán a su correo.

## Lo que probablemente ocurrió

1. Tu cuenta de Hoyoverse tenía una contraseña débil, fácil de adivinar o descifrar.
2. Tu cuenta de correo también tenía una contraseña débil (o peor, usaba la misma).
3. Usas un servicio de correo con pocas funciones de seguridad (a diferencia de servicios como Google, que exigen verificaciones adicionales).
4. Tu dispositivo podría estar infectado con malware que robó tu información de inicio de sesión.

## Qué deberías hacer ahora

1. Cambia toda tus contraseñas inmediatamente.
2. Revisa tu cuenta de correo en busca de accesos sospechosos.
3. Usa contraseñas únicas y fuertes para cada servicio.
4. Activa la verificación en dos pasos (2FA) siempre que sea posible.
5. Escanea tus dispositivos en busca de malware.
