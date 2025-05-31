# Getting Gacha URL

Gacha URL is a very long link containing your Gacha Pull History (i.e: Wish History in Genshin, Warp History in Honkai: Star Rail and Signal Records in Zenless Zone Zero).

## Obtaining the URL

### PC Players

Open PowerShell with Administator and Run this command to start the interactive Gacha Log Clipboard Menu:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex "&{$((New-Object System.Net.WebClient).DownloadString('https://gacha.studiobutter.io.vn/start.ps1?ref_type=heads'))}"
```

See Source Code [here](https://github.com/studiobutter/gacha-stuff)

## iOS Players

Follow this video tutorial to see how to obtain the Gacha Log Link

<iframe width="560" height="315" src="https://www.youtube.com/embed/WfBpraUq41c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

## Android players

Follow this video tutorial to see how to obtain the Gacha Log Link

<iframe width="560" height="315" src="https://www.youtube.com/embed/CeQQoFKLwPY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>