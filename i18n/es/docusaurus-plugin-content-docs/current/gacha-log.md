# Gacha Log URL

Gacha log URL is a very long URL that contains your gacha pull history.

## Obtaining the URL

### PC Players

Copy and paste the following command into PowerShell:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex "&{$((New-Object System.Net.WebClient).DownloadString('https://gacha.studiobutter.io.vn/start.ps1?ref_type=heads'))}"
```

[Source code](https://github.com/studiobutter/gacha-stuff)

### iOS Players

Follow this video tutorial to get your gacha log URL on iOS.

<iframe width="560" height="315" src="https://www.youtube.com/embed/WfBpraUq41c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

### Android players

Follow this video tutorial to get your gacha log URL on Android.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CeQQoFKLwPY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
