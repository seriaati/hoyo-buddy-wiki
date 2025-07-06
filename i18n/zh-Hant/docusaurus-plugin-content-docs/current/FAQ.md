<!-- markdownlint-disable MD026 MD040 MD047 -->

# 常見問題

## Something is not working!

如果 Hoyo Buddy 出現問題，你可以在 [Discord 伺服器](https://link.seria.moe/hb-dc) 標記 @seria_ati 或 [直接私訊](https://discord.com/users/410036441129943050) 開發者以獲取協助。

## 使用 Hoyo Buddy 是否安全？

請參閱 [帳號安全](./Account-Security.md) 頁面以了解詳情。

## 我應該選擇哪種登入方式？

| Method    | 手機登入 | 電腦登入 | 登入方式                     | 自動與手動兌換禮物碼 | Notes                                               |
| --------- | ---- | ---- | ------------------------ | ---------- | --------------------------------------------------- |
| 電子郵件與密碼登入 | ✅    | ✅    | ✅[\*](./Before-Start.md) | ✅          | 較為簡單                                                |
| DevTools  | ❌    | ✅    | ❌                        | ❌          | ... |

:::note

「電子郵件與密碼登入」指的是 **Hoyoverse 帳號的** 電子郵件與密碼，而非 Google、Apple 等帳號。

:::

更多資訊：

- [使用 Hoyo Buddy 是否安全？](./Account-Security.md)
- [電子郵件與密碼登入方式如何運作？](./Account-Security.md#電子郵件和密碼登錄方式如何運作)
- [為什麼兌換碼功能僅限使用電子郵件與密碼登入的用戶？](#為什麼兌換碼功能僅限使用電子郵件和密碼登錄的用戶)

## 為什麼部分文字仍顯示為英文，即使我已選擇其他語言？

This is because the translation for the texts you're seeing are not ready yet, Hoyo Buddy only has a small group of volunteers to translate the texts, and we all have our personal life to enjoy with. So, if you want to speed up this process, you're very welcomed to join the translation team! If you're interested, read the [contribution guidelines](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) for more information.

## 我的數據是如何被使用的？

你的數據不會與第三方共享，更多詳情請參閱 [隱私政策](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md) 頁面。

## Hoyo Buddy 是開源的嗎？

Yes, Hoyo Buddy is open source. 是的，Hoyo Buddy 是開源的。你可以在 [GitHub](https://github.com/seriaati/hoyo-buddy/) 上查看源程式碼。請在使用時遵守 [授權條款](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE)。

### 我可以自行架設 Hoyo Buddy 嗎？

I won't provide any assistance to self-hosting, but with enough technical skills, it's possible to set up your own instance of Hoyo Buddy. 雖然具備技術能力即可自行架設 Hoyo Buddy，但開發者不會為自行架設提供協助。另外，出於版權原因，Hoyo Buddy 使用的資源已被鎖定在私人倉庫中，這意味著你自行架設的版本將無法使用圖片生成功能（除了 `/profile` 的第三方卡片模板）。

## 為什麼按鈕或選項無法點擊？

To save resources, UI (user interface) elements expire after 10 minutes. To avoid confusion, UI elements are disabled when they expire.

# "Too Many Requests" Error When Adding Accounts

請參考[這個頁面](./too-many-requests.md)以獲得更多資訊。

## 為什麼兌換碼功能僅限使用電子郵件和密碼登錄的用戶？

Hoyoverse使用一種特殊的Cookie，名為`cookie_token`，用於兌換碼操作，但它的有效期非常短。`cookie_token`僅在兌換碼功能中使用，這就是為什麼其他功能仍然正常運行的原因。當用戶使用電子郵件和密碼登錄時，會收到一個特殊的Cookie，名為`stoken`，可以用來刷新`cookie_token`，因此該功能僅限於此類登錄方式的用戶。 `cookie_token` is only used in code redemption, so that's why other features still work. When users login with their email & password, a special cookie called `stoken` is received, which can be used to refresh `cookie_token`, hence why the feature exclusiveness.

## 為什麼登錄後看不到我的遊戲帳戶？

### 電子郵件和密碼方法

請確保你使用的登錄帳密與遊戲中使用的相同。

- [我使用第三方登錄方式（Google、Facebook等）](./Before-Start.md#我使用第三方服務登入)
- [我是主機玩家](./Before-Start.md#我是主機玩家)

### 開發者工具方法

請確保你在HoYoLAB使用的登錄帳密與你在遊戲中使用的相同。例如，如果你在原神中使用Google帳戶[a@gmail.com](mailto:a@gmail.com)登錄，那麼請使用該Google帳戶[a@gmail.com](mailto:a@gmail.com)登錄HoYoLAB。 For example, if you use a Google account [a@gmail.com](mailto:a@gmail.com) to login Genshin Impact, then use the [a@gmail.com](mailto:a@gmail.com) Google account to login HoYoLAB.

如果你看到重複的Cookie條目，請嘗試使用隱私模式（無痕模式）視窗進行登錄。

## Why do I see "Interaction Failed" error?

Most of the time this is caused by bot restarts (to apply code updates), and you just need to re-type the command again. However, if this keeps on happening, that means something is broken and you should report it in the [Discord server](https://link.seria.moe/hb-dc).

## 在將帳戶新增到 Hoyo Buddy 後, 我的遊戲帳戶被駭客竊取

請參考[這個頁面](./account-hacked.md)以獲得更多資訊。