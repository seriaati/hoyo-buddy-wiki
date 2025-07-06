# 關於帳戶被駭及為何不是因為 Hoyo Buddy 的回應

## Hoyo Buddy 的運作方式

當你使用電子郵件和密碼連結帳戶時：

1. 你輸入電子郵件和密碼
2. The bot encrypts both values (making them unreadable)
3. 它通過 HTTPS（安全連接）將這些加密的憑證發送到 Hoyoverse 伺服器
4. Hoyoverse 伺服器返回 cookies（登入數據）
5. 這些 cookies 被加密並存儲在數據庫中

## 安全特性

- **伺服器保護**：伺服器使用的密碼需要數百年才能破解。登入日誌顯示沒有可疑的成功登入。 Login logs show no suspicious successful logins.

- **記憶體保護**：你的電子郵件和密碼只暫時保存在記憶體中，這使得從線上伺服器竊取幾乎是不可能的。

- **強加密**：你的憑證在發送到 Hoyoverse 前使用 RSA 加密。這每次都會產生不同的加密結果，使得反向破解是不可能的。 This creates different encryption results each time, making it impossible to reverse.

- **安全連接**：所有數據傳輸都通過 HTTPS 進行，這意味著所有內容都被加密。即使有人截取請求，他們也無法看到其中的內容。 Even if someone intercepts the request, they can't see what's inside.

- **No Permanent Storage**: Your email & password are NOT stored in the database. They are deleted after getting your cookies. Only the encrypted cookies are stored.

- **數據庫安全**：數據庫受到密碼保護，這個密碼需要數百年才能破解。

- **有限的 Cookie 使用**：單獨的 cookies 不足以竊取你的帳戶。它們只能用於 HoYoLAB，不能用於可以更改帳戶的帳戶中心。 They can only be used for HoYoLAB, not the account center where changes to your account can be made.

## How Accounts Actually Get Stolen

要竊取 Hoyoverse 帳戶，駭客需要：

1. 擁有你的 Hoyoverse 電子郵件和密碼來登入帳戶中心（cookies 是不夠的）
2. 請求更改你的電子郵件地址（這需要通過你原始電子郵件的驗證）
3. 訪問你的電子郵件帳戶以獲取驗證碼
4. 將你的帳戶電子郵件更改為他們自己的
5. 在此之後，他們控制了你的帳戶，因為密碼重置會發送到他們的電子郵件

## 可能發生的情況

1. 你的 Hoyoverse 帳戶使用了容易猜測或破解的弱安全性密碼
2. 你的電子郵件帳戶也使用了安全性弱的密碼（或更糟的是，使用了相同的密碼）
3. 你使用的電子郵件服務安全功能有限（不像 Google 這樣需要額外驗證的服務）
4. 你的設備可能感染了惡意軟件，竊取了你的登入信息

## 現在你應該做什麼

1. 立即更改所有密碼
2. 檢查你的電子郵件帳戶是否有可疑登入活動
3. 為不同的服務使用獨特且安全性強的密碼
4. Enable two-factor authentication (2FA) wherever possible
5. 掃描你的設備是否有惡意軟件
