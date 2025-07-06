# 关于账户被黑及为何不是因为 Hoyo Buddy 的回应

## Hoyo Buddy 的运作方式

当你使用电子邮箱和密码链接账户时：

1. 你输入电子邮箱和密码
2. 机器人会对这两个值进行加密（使其不可读）
3. 它通过 HTTPS（安全连接）将这些加密的凭证发送到 Hoyoverse 服务器
4. Hoyoverse 服务器返回 cookies（登录数据）
5. 这些 cookies 被加密并存储在数据库中

## 安全特性

- **服务器保护**：服务器使用的密码需要数百年才能破解。登录日志显示没有可疑的成功登录。 Login logs show no suspicious successful logins.

- **内存保护**：你的电子邮箱和密码只暂时保存在内存中，这使得从在线服务器窃取几乎是不可能的。

- **强加密**：你的凭证在发送到 Hoyoverse 前使用 RSA 加密。这每次都会产生不同的加密结果，使得反向破解是不可能的。 This creates different encryption results each time, making it impossible to reverse.

- **安全连接**：所有数据传输都通过 HTTPS 进行，这意味着所有内容都被加密。即使有人截取请求，他们也无法看到其中的内容。 Even if someone intercepts the request, they can't see what's inside.

- **无永久存储**：你的电子邮箱和密码不会存储在数据库中。获取 cookies 后它们会被删除。只有加密的 cookies 被存储。 They are deleted after getting your cookies. Only the encrypted cookies are stored.

- **数据库安全**：数据库受到密码保护，这个密码需要数百年才能破解。

- **有限的 Cookie 使用**：单独的 cookies 不足以窃取你的账户。它们只能用于 HoYoLAB，不能用于可以更改账户的账户中心。 They can only be used for HoYoLAB, not the account center where changes to your account can be made.

## 账户实际如何被窃取

要窃取 Hoyoverse 账户，黑客需要：

1. 拥有你的 Hoyoverse 电子邮箱和密码来登录账户中心（cookies 是不够的）
2. 请求更改你的电子邮箱地址（这需要通过你原始电子邮箱的验证）
3. 访问你的电子邮箱账户以获取验证码
4. 将你的账户电子邮箱更改为他们自己的
5. 在此之后，他们控制了你的账户，因为密码重置会发送到他们的电子邮箱

## 可能发生的情况

1. 你的 Hoyoverse 账户使用了容易猜测或破解的弱安全性密码
2. 你的电子邮箱账户也使用了安全性弱的密码（或更糟的是，使用了相同的密码）
3. 你使用的电子邮箱服务安全功能有限（不像 Google 这样需要额外验证的服务）
4. 你的设备可能感染了恶意软件，窃取了你的登录信息

## 现在你应该做什么

1. 立即更改所有密码
2. 检查你的电子邮箱账户是否有可疑登录活动
3. 为不同的服务使用独特强的密码
4. 尽可能启用两步验证（2FA）
5. 扫描你的设备是否有恶意软件
