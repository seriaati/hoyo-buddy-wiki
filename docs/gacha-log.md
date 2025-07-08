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

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/WfBpraUq41c" title="YouTube video player" allowfullscreen></iframe>
</div>

### Android players

Follow this video tutorial to get your gacha log URL on Android.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/CeQQoFKLwPY" title="YouTube video player" allowfullscreen></iframe>
</div>

### Xbox Console/Cloud Gaming Players

- Console:

  - Method 1 (Recommended): Once you open the Gacha Log Page, Move the Cursor (L Stick), Press Menu anywhere on the page and choose "Send to Other Devices" to send the Gacha Log Page to your prefered device. On the receiver device, Open the link, Copy the URL and paste it in Hoyo Buddy using `/gacha-log import`.

  - Method 2: Use the Drop function in Microsoft Edge to send and receive URL across devices. You can ask for the Detailed tutorial on enable and use this feature in [our Discord](https://link.seria.moe/hb-dc).

**Note**: Microsoft Edge must be installed on your PC/Mobile device and must be logged into the same Microsoft Account as your Xbox Console

- Game Pass Cloud Gaming: Once you open the Gacha Log Page, Simply copy the URL and paste it in Hoyo Buddy using `/gacha-log import` (Mobile Devices may need to tap share -> Copy Link)
