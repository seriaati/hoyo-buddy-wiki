# 常見問題解答

## 某些功能無法正常運作

如果 Hoyo Buddy 出現問題，你可以在 [Discord 伺服器](https://link.seria.moe/hb-dc) 中標註 @seria_ati，或者 [直接私訊我](https://discord.com/users/410036441129943050) 以獲得協助。

## Hoyo Buddy 安全嗎？

這取決於你對「安全」的定義。請參閱[帳戶安全頁面](./Account-Security.md)以獲取更多信息。

## 問題：即使我已經通過 /settings 選擇了其他語言，某些文本仍然顯示為英文？

這是因為你看到的文本尚未完成翻譯。Hoyo Buddy 目前只有一個小型志願者團隊負責翻譯，而我們都有自己的生活需要平衡。如果你希望加速翻譯過程，非常歡迎你加入我們的翻譯團隊！如有興趣，請參閱 [貢獻指南](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) 以了解更多信息。

## 我的數據是如何被使用的？

你的數據絕不會與第三方共享。有關更多信息，請閱讀 [隱私政策](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md) 頁面。

## Hoyo Buddy 是開源的嗎？

是的，Hoyo Buddy 是開源的。你可以在 [GitHub](https://github.com/seriaati/hoyo-buddy/) 上查看源代碼。使用代碼時，請遵守 [許可協議](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE)。

### 我可以自行部署 Hoyo Buddy 嗎？

不行，這無法被辦到。

## 為什麼按鈕/選項被禁用了？

為了節省資源，使用者介面（UI）元素在 10 分鐘後會過期。為避免混淆，過期後的 UI 元素將被禁用。

## I have 2 accounts, 1 using Third-party login, other using email. Can I use it?

Third-party login can use [DevTools](./FAQ.md#logging-in-with-devtools) to login but Certain Features will be limited. If you want to use the full feature set, please [Link an email from third-party login account](./Before-Start.md#linking-an-email-from-third-party-login-account), then log in using email/username and password to link to Hoyo Buddy.

## 問題：「使用電子郵件和密碼方法添加帳戶時出現 'Too many requests' 錯誤」

通常這個問題是暫時性的，等待 30 分鐘後再嘗試即可。如果問題仍未解決，你的帳戶可能已被「軟鎖定」，請仔細閱讀以下指南：

1. 首先，請不要重設你的帳戶密碼，這無助於解決問題，反而可能使問題更嚴重。

2. 其次，停止使用電子郵件/用戶名和密碼嘗試登入 HoYoLAB/Hoyo Buddy/遊戲。

**你還能登入你的遊戲（如原神、絕區零等）嗎？**

* **是**：首先，[發送電子郵件給客服](./FAQ#發送電子郵件給客服)。然後嘗試 [DevTools 方法](./FAQ#使用 DevTools 登入) 或 [使用電子郵件而非用戶名登入](./FAQ#使用電子郵件而非用戶名登入)。

* **否**：請參閱[嘗試登入遊戲](./FAQ#嘗試登入遊戲)。

### 使用電子郵件而非用戶名登入

有用戶發現，如果你之前一直使用用戶名登入，改用電子郵件可以繞過錯誤提示。同樣地，如果你之前使用電子郵件登入，請嘗試使用用戶名。

### 使用 DevTools 登入

如果你有 PC/筆記本電腦設備，你可以使用 DevTools 方法登入，按鈕就在電子郵件和密碼方法旁邊。使用此方法，你將無法使用兌換碼相關功能（如自動兌換）。

### 嘗試登入遊戲

你的 Hoyoverse 帳戶是否綁定了任何社交媒體（如 Google、X 等）？

* **是**：使用綁定的社交媒體登入你的遊戲。然後，[發送電子郵件給客服](./FAQ#發送電子郵件給客服)。接著嘗試 [DevTools 方法](./FAQ#使用 DevTools 登入) 或 [使用電子郵件而非用戶名登入](./FAQ#使用電子郵件而非用戶名登入)。

* **否**：請參閱以下內容。

你是否已登入 [Hoyoverse 帳戶中心](https://account.hoyoverse.com/)？

* **是**：將你的帳戶與社交媒體綁定，然後使用它登入你的遊戲。接著，[發送電子郵件給客服](./FAQ#發送電子郵件給客服)。最後嘗試 [DevTools 方法](./FAQ#使用 DevTools 登入) 或 [使用電子郵件而非用戶名登入](./FAQ#使用電子郵件而非用戶名登入)。

* **否**：嘗試[這個方法](./FAQ#使用電子郵件而非用戶名登入)，如果無法解決，[發送電子郵件給客服](./FAQ#發送電子郵件給客服)，然後耐心等待回應。很抱歉，目前你無法訪問你的遊戲帳戶。

### 發送電子郵件給客服

電子郵件地址：[hoyolab@hoyoverse.com](mailto:hoyolab@hoyoverse.com)

範本：

```plaintext
我無法使用我的電子郵件和密碼登入 HoYoLAB，當我嘗試這樣做時，出現了「請求過多，請刷新頁面後重試」的錯誤（如下圖所示）。我已經等待超過 8 小時，錯誤仍然存在。請幫助我解鎖我的帳戶，我將不勝感激。

我的電子郵件是 <你的電子郵件>
（附上一張顯示錯誤的截圖）
```

## 為什麼使用與兌換碼相關的功能時會顯示「Cookie Token Expired」錯誤，但其他功能（如自動每日簽到）卻能正常工作？

簡而言之，Hoyoverse 使用了一個特殊的 Cookie（Cookie Token）處理兌換碼功能，該 Token 的有效期非常短（僅 3 天）。據我所知，Cookie Token 僅在兌換碼功能中使用，因此其他功能不受影響。若要刷新你的 Cookie Token，需要通過 /accounts 重新添加帳戶，這將從 Hoyoverse 獲取一個新的 Cookie Token。然而，該 Cookie Token 仍會在 3 天後過期；為了避免麻煩，你可以通過電子郵件和密碼方法添加帳戶，這樣 Hoyo Buddy 可以通過 Hoyoverse 使用的相同技術自動刷新你的 Cookie Token。

## 為什麼我會看到「交互失敗」錯誤？

大多數情況下，這是由於機器人重新啟動（用於應用代碼更新）所致，你只需重新輸入指令即可解決。然而，如果此問題持續發生，說明系統可能有問題，你應該在 [Discord 伺服器](https://link.seria.moe/hb-dc) 中聯繫開發者。
