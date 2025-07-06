# 抽卡紀錄網址

抽卡紀錄網址是一個非常長的網址,包含了你的抽卡歷史。

## 如何獲取

### PC 玩家

複製以下命令並在 PowerShell 中貼上:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex "&{$((New-Object System.Net.WebClient).DownloadString('https://gacha.studiobutter.io.vn/start.ps1?ref_type=heads'))}"
```

[源始碼](https://github.com/studiobutter/gacha-stuff)

### iOS 玩家

跟隨下方的影片教學來獲取你的抽卡紀錄網址。

<iframe width="560" height="315" src="https://www.youtube.com/embed/WfBpraUq41c" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

### 安卓玩家

跟隨下方的影片教學來獲取你的抽卡紀錄網址。

<iframe width="560" height="315" src="https://www.youtube.com/embed/CeQQoFKLwPY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
