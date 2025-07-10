# URL del registro del Gacha

La URL del registro del gacha es una dirección muy larga que contiene el historial de tus tiradas de gacha.

## ¿Cómo obtener la URL?

### Jugadores de PC

Copia y pega el siguiente comando en PowerShell:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex "&{$((New-Object System.Net.WebClient).DownloadString('https://gacha.studiobutter.io.vn/start.ps1?ref_type=heads'))}"
```

[Código fuente](https://github.com/studiobutter/gacha-stuff)

### Jugadores de iOS

Sigue este video tutorial para obtener tu URL del registro del gacha en iOS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WfBpraUq41c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

### Jugadores de Android

Sigue este video tutorial para obtener tu URL del registro del gacha en Android.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CeQQoFKLwPY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
