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

### Xbox Console/Cloud Gaming Players

- Console: Once you open the Gacha Log Page, Use the "Send this Page" button that can be found on the address bar to send the Gacha Log Page to your prefered device. Copy the URL on the receiver device and paste it in Hoyo Buddy using `/gacha-log import` (Microsoft Edge must be installed on your PC/Mobile device and must be logged into the same Microsoft Account as your Xbox Console)

- Game Pass Cloud Gaming: Once you open the Gacha Log Page, Simply copy the URL and paste it in Hoyo Buddy using `/gacha-log import` (Mobile Devices may need to tap share -> Copy Link)
