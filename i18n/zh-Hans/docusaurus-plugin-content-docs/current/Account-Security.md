# 账号安全

This section explains how your account data is used and stored. 本部分说明你的账号数据如何被使用及存储。请记住，Hoyo Buddy 是开源的，任何人都可以自行查阅源代码以确认账号处理流程。

## 免责声明

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## Hoyo Buddy 是如何运作的？

Hoyo Buddy uses your HoYoLAB cookies to access your account information. By obtaining your cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes and more. Hoyo Buddy 使用你的 HoYoLAB Cookies 来访问你的账户信息。通过获取你的 Cookies，Hoyo Buddy 可以模拟使用你的身份向 HoYoLAB 发送请求，从而访问实时便笺等信息。HoYoLAB 根据 Cookies 来识别请求者，而 Hoyo Buddy 则使用你的 Cookies 来告知 HoYoLAB 请求者是你。

## 什么是 Cookies？

Cookies 🍪 是网站在你访问时存储于电脑或设备上的一小段数据。它们不是程序，无法携带病毒，也不是间谍软件。更像是网站留给你浏览器的一张便条，记录一些关于你或你访问的信息。 They're not programs, they can't carry viruses, and they're not spyware. Instead, they're more like a note that a website leaves for your browser to remember certain things about you or your visit.

想象一下，你走进一家商店，店员给了你一张贴纸。贴纸可能记录了你看过哪些商品、在店内逗留的时间，甚至是你的偏好。当你再次来到这家商店时，店员通过贴纸上的信息为你提供量身定制的服务。 This sticker might have information like what items you looked at, how long you stayed in the shop, or even your preferences. Later, when you come back to the shop, the shopkeeper looks at your sticker and can tailor your experience based on the information on it.

同样地，当你访问 HoYoLAB 网站时，它会给你的浏览器一个「Cookie」，这个 Cookie 包含你的登录信息，让网站识别是你在访问。 This cookie allows the website to identify that it is you accessing the website.

## Cookies 有哪些权限?

| 权限                           | 有吗？ |
| ---------------------------- | --- |
| 登录你的游戏账户                     | ❌   |
| 变更你的账户密码                     | ❌   |
| 访问敏感信息（例如电子邮箱、手机号码等）         | ❌   |
| 在 HoYoLAB 上经由你的身份发表帖子、留言及回复  | ✅   |
| 访问实时便笺、角色数据及其他来自「战绩」页面的非敏感信息 | ✅   |

## 常见问题

| 问题                    | 回答 | 备注                                                                                          |
| --------------------- | -- | ------------------------------------------------------------------------------------------- |
| 我的电子邮箱和密码被存储了吗？       | ❌  | [查看代码](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| 你能登录我的游戏账号吗？          | ❌  | [不可能](#你能登录我的游戏账户吗)                                                                         |
| 你能更改我的账号密码吗？          | ❌  | [不可能](#你能更改我的账户密码吗)                                                                         |
| 你能窃取我的账号吗？            | ❌  | [不可能](#你能窃取出售我的账户吗)                                                                         |
| 你能出售我的账号吗？            | ❌  | [不可能](#你能窃取出售我的账户吗)                                                                         |
| 使用 Hoyo Buddy 会被封号吗？  | ❔  | [阅读更多](#使用-hoyo-buddy-会被封号吗)                                                                |
| Cookies 会过期吗？         | ✅  | 一年后                                                                                         |
| 更改密码后 Cookies 会失效吗？   | ✅  | 立即                                                                                          |
| 你能以我的身份在 HoYoLAB 发帖吗？ | ✅  | [阅读更多](#使用-cookies-访问-hoyolab-社区功能)                                                         |

### 使用 Hoyo Buddy 会被封号吗？

简单的回答是：我不知道。

我从未收到用户因使用 Hoyo Buddy 而被封号的通知。然而，你应该知道，使用任何第三方工具来访问你的账户数据已经违反了服务条款。虽然被封号的风险很低，但并非零，我无法提供任何保证。如果你担心可能被封号，你应该避免使用 Hoyo Buddy。 However, you should note that using any third-party tool to access your account data is against the TOS. While the risk of being banned is low, it is not zero, I cannot make any guarantees. If you are concerned about the possibility of being banned, you should avoid using Hoyo Buddy.

从技术上来说，如果真的被封号，是 HoYoLAB 账号会被封，而不是游戏本身。这意味着你的游戏账号仍然能被正常使用，但你将无法再访问 HoYoLAB。 This means you can still play the game, but you won't be able to access HoYoLAB anymore.

### 使用 Cookies 访问 HoYoLAB 社区功能

使用你的 Cookies 在 HoYoLAB 上发帖、评论、回复和加入话题是可行的。

In the bot, community features are strictly being used for completing Traveling Mimo tasks. If there is a comment task, the bot will make a comment on your behalf then delete it.

如果你的账号已禁用了自动完成旅行 Mimo 任务功能，机器人将不会使用任何社区功能。

### 我的 Cookies 是如何被存储的？

你的 Cookies 被安全地存储在 [Hetzner](https://www.hetzner.com/) 提供的数据库中。若想获取这些 Cookies，黑客需同时获得我服务器的账号密码及数据库的密码。此类场景通常与数据泄露相关，但值得注意的是，Hetzner 作为一个知名且广泛使用的服务器托管供应商，其数据泄露情况相对罕见。然而，在极少数可能发生泄露的情况下，我会立即在 Discord 服务器中发布公告，敦促所有用户更改账号密码。这样可确保数据库中所有先前存储的 Cookies 均失效，从而保护你的隐私与安全。 To access this database and obtain your Cookies, a hacker would need to acquire both my server's account password and the database's password. Such a scenario is typically associated with data breaches, although it's important to note that breaches involving Hetzner, a reputable and widely-used server hosting provider, are relatively rare. However, in the unlikely event of a breach, I will immediately issue an announcement in the Discord server, urging all users to change their account passwords. This action ensures that any previously stored Cookies in the database become invalidated, thus safeguarding your privacy and security.

### 电子邮箱和密码登录方式如何运作？

:::info

你的电子邮箱和密码从未被存储。

:::

This method isn't designed to compromise your account security, it's made to simplify the account set up process. Many users encounter difficulties locating their Cookies manually, prompting the introduction of an easier alternative. The method functions exactly to logging in via email and password on HoYoLAB, occasionally requiring CAPTCHA verification for security purposes. Your email and password were never stored in the database. They are temporarily held in-memory and encrypted before being sent to Hoyoverse's server. Internally, this method functions the same as the DevTools method, both only saves your Cookies in the database, but some might feel that the DevTools method is safer.

### 你能登录我的游戏账户吗？

不，我没办法。

Cookies don't have enough permissions to login to your game account, username and password login is needed for that. Cookies 没有足够的权限来变更你的账户密码，需要用户名和密码登录。你的用户名和密码从未被存储；即使有，在一台未知的设备上登录需要电子邮箱验证，我无法访问你的电子邮箱。

### 你能更改我的账户密码吗？

不，我没办法。

Cookies 没有足够的权限来变更你的账户密码，需要用户名和密码登录。你的用户名和密码从未被存储；即使有，更改密码需要电子邮箱验证，我无法访问你的电子邮箱。 Your username and password were never stored; even if they were, changing password requires email verification, and I don't have access to your email.

### 你能窃取/出售我的账户吗？

不，我没办法。

窃取或出售账户需要变更账户密码，这是[不可能的](#你能更改我的账户密码吗)。就算我将你的 Cookies 分享给其他人，他们也无法[登录你的游戏账户](#你能登录我的游戏账户吗)。 Even if I share your Cookies to others, it's not possible to [login to your game account](#can-you-login-to-my-game-account).
