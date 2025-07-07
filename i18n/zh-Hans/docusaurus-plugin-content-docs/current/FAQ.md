# 常见问题

## 有些东西无法正常运作，怎么办？

如果 Hoyo Buddy 出现问题，你可以在 [Discord 服务器](https://link.seria.moe/hb-dc) 标记 @seria_ati 或 [直接私信](https://discord.com/users/410036441129943050) 开发者以获取帮助。

## 使用 Hoyo Buddy 是否安全？

请参阅 [账号安全](./Account-Security.md) 页面以了解详情。

## 我应该选择哪种登录方式？

| 登录方式 | 手机登录 | 电脑登录 | 主机登录 | 自动与手动兑换礼包码 | 备注 |
|---|---|---|---|---|---|
| 电子邮箱与密码登录 | ✅ | ✅ | ✅[*](./Before-Start.md) | ✅ | 较为简单 |
| DevTools | ❌ | ✅ | ❌ | ❌ | ... |

:::note

「电子邮箱与密码登录」指的是 **Hoyoverse 账号的** 电子邮箱与密码，而非 Google、Apple 等账号。

:::

更多信息：

- [使用 Hoyo Buddy 是否安全？](./Account-Security.md)
- [电子邮箱与密码登录方式如何运作？](./Account-Security.md#电子邮箱和密码登录方式如何运作)
- [为什么兑换码功能仅限使用电子邮箱与密码登录的用户？](#为什么兑换码功能仅限使用电子邮箱和密码登录的用户)

## 为什么部分文字仍显示为英文，即使我已选择其他语言？

这是因为你看到的文字翻译尚未完成。目前 Hoyo Buddy 的翻译由一小组志愿者负责，他们也有自己的生活。如果你希望加快翻译进度，欢迎加入翻译团队！有兴趣的话，请参阅 [贡献指南](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) 以获取更多信息。

## 我的数据是如何被使用的？

你的数据不会与第三方共享，更多详情请参阅 [隐私政策](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md) 页面。

## Hoyo Buddy 是开源的吗？

是的，Hoyo Buddy 是开源的。你可以在 [GitHub](https://github.com/seriaati/hoyo-buddy/) 上查看源代码。请在使用时遵守 [授权条款](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE)。

### 我可以自行搭建 Hoyo Buddy 吗？

虽然具备技术能力即可自行搭建 Hoyo Buddy，但开发者不会为自行搭建提供帮助。另外，出于版权原因，Hoyo Buddy 使用的资源已被锁定在私人仓库中，这意味着你自行搭建的版本将无法使用图片生成功能（除了 `/profile` 的第三方卡片模板）。

## 为什么按钮或选项无法点击？

为了节省资源，UI 元件（例如按钮）在 10 分钟后会过期。当元件过期时，它们将会被禁用以避免混淆。

## 尝试使用电子邮箱和密码方法添加账户时出现「请求过多」错误

请参考[这个页面](./too-many-requests.md)以获得更多信息。

## 为什么兑换码功能仅限使用电子邮箱和密码登录的用户？

Hoyoverse使用一种特殊的Cookie，名为`cookie_token`，用于兑换码操作，但它的有效期非常短。`cookie_token`仅在兑换码功能中使用，这就是为什么其他功能仍然正常运行的原因。当用户使用电子邮箱和密码登录时，会收到一个特殊的Cookie，名为`stoken`，可以用来刷新`cookie_token`，因此该功能仅限于此类登录方式的用户。

## 为什么登录后看不到我的游戏账户？

### 电子邮箱和密码方法

请确保你使用的登录账密与游戏中使用的相同。

- [我使用第三方登录方式（Google、Facebook等）](./Before-Start.md#我使用第三方服务登录)
- [我是主机玩家](./Before-Start.md#我是主机玩家)

### 开发者工具方法

请确保你在HoYoLAB使用的登录账密与你在游戏中使用的相同。例如，如果你在原神中使用Google账户[a@gmail.com](mailto:a@gmail.com)登录，那么请使用该Google账户[a@gmail.com](mailto:a@gmail.com)登录HoYoLAB。

如果你看到重复的Cookie条目，请尝试使用隐私模式（无痕模式）窗口进行登录。

## 为什么会出现「该申请未受响应」错误？

大多数情况下，这是由于机器人重启（以应用代码更新）引起的，你只需重新输入指令即可。然而，如果该错误持续发生，这意味着可能存在问题，你应该在[Discord服务器](https://link.seria.moe/hb-dc)中报告。

## 在将账户添加到 Hoyo Buddy 后, 我的游戏账户被黑客窃取

请参考[这个页面](./account-hacked.md)以获得更多信息。
