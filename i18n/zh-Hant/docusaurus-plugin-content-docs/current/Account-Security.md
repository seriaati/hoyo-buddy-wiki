# 帳號安全

This section explains how your account data is used and stored. Remember that Hoyo Buddy is open-source, and everyone can confirm account processing procedures via reading the source code.

## 免責聲明

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## Hoyo Buddy 是如何運作的？

Hoyo Buddy uses your HoYoLAB cookies to access your account information. By obtaining your cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes and more. Hoyo Buddy 使用你的 HoYoLAB Cookies 來訪問你的帳戶信息。通過獲取你的 Cookies，Hoyo Buddy 可以模擬使用你的身份向 HoYoLAB 發送請求，從而訪問即時筆記等信息。HoYoLAB 根據 Cookies 來識別請求者，而 Hoyo Buddy 則使用你的 Cookies 來告知 HoYoLAB 請求者是你。

## 什麼是 Cookies？

Cookies 🍪 are small pieces of data that websites store on your computer or device when you visit them. They're not programs, they can't carry viruses, and they're not spyware. Instead, they're more like a note that a website leaves for your browser to remember certain things about you or your visit.

Imagine you walk into a shop and the shopkeeper gives you a sticker. This sticker might have information like what items you looked at, how long you stayed in the shop, or even your preferences. Later, when you come back to the shop, the shopkeeper looks at your sticker and can tailor your experience based on the information on it.

同樣地，當你訪問 HoYoLAB 網站時，它會給你的瀏覽器一個「Cookie」，這個 Cookie 包含你的登錄信息，讓網站識別是你在訪問。 This cookie allows the website to identify that it is you accessing the website.

## Cookies 有哪些權限?

| 權限                                                                                                   | 有嗎？ |
| ---------------------------------------------------------------------------------------------------- | --- |
| 登入你的遊戲帳戶                                                                                             | ❌   |
| 變更你的帳戶密碼                                                                                             | ❌   |
| Access sensitive information (email, mobile number, etc.)         | ❌   |
| 在 HoYoLAB 上經由你的身份發表貼文、留言及回覆                                                                          | ✅   |
| Access real-time notes, character stats, and other non-sensitive information in the battle chronicle | ✅   |

## 常見問題

| 問題                    | 回答 | Notes                                                                                       |
| --------------------- | -- | ------------------------------------------------------------------------------------------- |
| 我的電子郵件和密碼被儲存了嗎？       | ❌  | [查看代碼](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| 你能登入我的遊戲帳號嗎？          | ❌  | [不可能](#你能登入我的遊戲帳戶嗎)                                                                         |
| 你能更改我的帳號密碼嗎？          | ❌  | [不可能](#你能更改我的帳戶密碼嗎)                                                                         |
| 你能竊取我的帳號嗎？            | ❌  | [不可能](#你能竊取售賣我的帳戶嗎)                                                                         |
| 你能出售我的帳號嗎？            | ❌  | [不可能](#你能竊取售賣我的帳戶嗎)                                                                         |
| 使用 Hoyo Buddy 會被封號嗎？  | ❔  | [閱讀更多](#使用-hoyo-buddy-會被封號嗎)                                                                |
| Cookies 會過期嗎？         | ✅  | 一年後                                                                                         |
| 更改密碼後 Cookies 會失效嗎？   | ✅  | 立即                                                                                          |
| 你能以我的身份在 HoYoLAB 發文嗎？ | ✅  | [閱讀更多](#使用-cookies-存取-hoyolab-社區功能)                                                         |

### 使用 Hoyo Buddy 會被封號嗎？

簡單的回答是：我不知道。

我從未收到用戶因使用 Hoyo Buddy 而被封號的通知。然而，你應該知道，使用任何第三方工具來訪問你的帳戶資料已經違反了服務條款。雖然被封號的風險很低，但並非零，我無法提供任何保證。如果你擔心可能被封號，你應該避免使用 Hoyo Buddy。 However, you should note that using any third-party tool to access your account data is against the TOS. While the risk of being banned is low, it is not zero, I cannot make any guarantees. If you are concerned about the possibility of being banned, you should avoid using Hoyo Buddy.

從技術上來說，如果真的被封號，是 HoYoLAB 帳號會被封，而不是遊戲本身。這意味著你的遊戲帳號仍然能被正常使用，但你將無法再存取 HoYoLAB。 This means you can still play the game, but you won't be able to access HoYoLAB anymore.

### 使用 Cookies 存取 HoYoLAB 社區功能

使用你的 Cookies 在 HoYoLAB 上發文、評論、回覆和加入話題是可行的。

In the bot, community features are strictly being used for completing Traveling Mimo tasks. If there is a comment task, the bot will make a comment on your behalf then delete it.

如果你的帳號已禁用了自動完成旅行 Mimo 任務功能，機器人將不會使用任何社區功能。

### 我的 Cookies 是如何被儲存的？

Your Cookies are securely stored in a database hosted by [Hetzner](https://www.hetzner.com/). To access this database and obtain your Cookies, a hacker would need to acquire both my server's account password and the database's password. Such a scenario is typically associated with data breaches, although it's important to note that breaches involving Hetzner, a reputable and widely-used server hosting provider, are relatively rare. However, in the unlikely event of a breach, I will immediately issue an announcement in the Discord server, urging all users to change their account passwords. This action ensures that any previously stored Cookies in the database become invalidated, thus safeguarding your privacy and security.

### 電子郵件和密碼登錄方式如何運作？

:::info

你的電子郵件和密碼從未被儲存。

:::

This method isn't designed to compromise your account security, it's made to simplify the account set up process. Many users encounter difficulties locating their Cookies manually, prompting the introduction of an easier alternative. The method functions exactly to logging in via email and password on HoYoLAB, occasionally requiring CAPTCHA verification for security purposes. Your email and password were never stored in the database. They are temporarily held in-memory and encrypted before being sent to Hoyoverse's server. Internally, this method functions the same as the DevTools method, both only saves your Cookies in the database, but some might feel that the DevTools method is safer.

### 你能登入我的遊戲帳戶嗎？

不，我沒辦法。

Cookies don't have enough permissions to login to your game account, username and password login is needed for that. Your username and password were never stored; even if they were, logging in on an unknown device requires email verification, and I don't have access to your email.

### 你能更改我的帳戶密碼嗎？

不，我沒辦法。

Cookies 沒有足夠的權限來變更你的帳戶密碼，需要用戶名和密碼登錄。你的用戶名和密碼從未被儲存；即使有，更改密碼需要電子郵件驗證，我無法存取你的電子郵件。 Your username and password were never stored; even if they were, changing password requires email verification, and I don't have access to your email.

### Can you Steal/Sell my Account?

不，我沒辦法。

竊取或售賣帳戶需要變更帳戶密碼，這是[不可能的](#你能更改我的帳戶密碼嗎)。就算我將你的 Cookies 分享給其他人，他們也無法[登入你的遊戲帳戶](#你能登入我的遊戲帳戶嗎)。 Even if I share your Cookies to others, it's not possible to [login to your game account](#can-you-login-to-my-game-account).
