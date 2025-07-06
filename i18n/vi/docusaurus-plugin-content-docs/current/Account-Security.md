# Bảo Mật Tài Khoản

This section explains how your account data is used and stored. Remember that Hoyo Buddy is open-source, and everyone can confirm account processing procedures via reading the source code.

## Miễn trừ

It is entirely **YOUR** decision whether to provide your Cookies or not. While many features offered by the bot depend on the user's HoYoLAB cookies for functionality, Hoyo Buddy has never coerced users into providing their cookies against their will. The developer has implemented robust security measures to prevent the leakage of your Cookies. In the event of a data breach, the developer's utmost responsibility is to promptly inform users about the situation and strongly advise them to change their passwords. In summary, please use this tool at your own discretion and risk!

## Hoyo Buddy hoạt động như thế nào?

Hoyo Buddy uses your HoYoLAB cookies to access your account information. By obtaining your cookies, Hoyo Buddy can simulate requests to HoYoLAB using your identity, thereby accessing information such as real-time notes and more. HoYoLAB identifies the requester based on cookies, and Hoyo Buddy utilizes your cookies to inform HoYoLAB that the requester is you.

## Cookies là gì?

Cookies 🍪 are small pieces of data that websites store on your computer or device when you visit them. They're not programs, they can't carry viruses, and they're not spyware. Instead, they're more like a note that a website leaves for your browser to remember certain things about you or your visit.

Imagine you walk into a shop and the shopkeeper gives you a sticker. This sticker might have information like what items you looked at, how long you stayed in the shop, or even your preferences. Later, when you come back to the shop, the shopkeeper looks at your sticker and can tailor your experience based on the information on it.

Similarly, when you visit HoYoLAB, it gives your browser a "cookie." This cookie allows the website to identify that it is you accessing the website.

## Cookie có những quyền truy cập gì?

| Quyền                                                                                                          | Có/Không |
| -------------------------------------------------------------------------------------------------------------- | -------- |
| Đăng nhập vào tài khoản trò chơi                                                                               | ❌        |
| Đổi mật khẩu tài khoản                                                                                         | ❌        |
| Truy cập vào thông tin cá nhân (email, số điện thoại, v.v.) | ❌        |
| Tạo bài đăng/bình luận/trả lời bình luận trên HoYoLAB bằng danh tính của bạn                                   | ✅        |
| Truy cập ghi chú thời gian thực, thống kê dữ liệu nhân vật, và thông tin không nhạy cảm khác trong chiến tích  | ✅        |

## Câu hỏi thường gặp

| Câu hỏi                                                        | Trả lời | Ghi chú                                                                                       |
| -------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| Email và mật khẩu của tôi có được lưu trữ không?               | ❌       | [Xem mã](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| Bạn có thể đăng nhập vào tài khoản trò chơi của tôi không?     | ❌       | [Không thể](#bạn-có-thể-đăng-nhập-vào-tài-khoản-trò-chơi-của-tôi-không)                       |
| Bạn có thể thay đổi mật khẩu tài khoản của tôi không?          | ❌       | [Không thể](#bạn-có-thể-thay-đổi-mật-khẩu-tài-khoản-của-tôi-không)                            |
| Bạn có thể đánh cắp tài khoản của tôi không?                   | ❌       | [Không thể](#bạn-có-thể-đánh-cắpbán-tài-khoản-của-tôi-không)                                  |
| Bạn có thể bán tài khoản của tôi không?                        | ❌       | [Không thể](#bạn-có-thể-đánh-cắpbán-tài-khoản-của-tôi-không)                                  |
| Tôi có thể bị cấm vì sử dụng Hoyo Buddy không?                 | ❔       | [Đọc thêm](#tôi-có-thể-bị-cấm-vì-sử-dụng-hoyo-buddy-không)                                    |
| Cookie có hết hạn không?                                       | ✅       | Sau 1 năm                                                                                     |
| Cookie có bị vô hiệu hóa sau khi tôi thay đổi mật khẩu không?  | ✅       | Ngay lập tức                                                                                  |
| Bạn có thể đăng bài trên HoYoLAB bằng danh tính của tôi không? | ✅       | [Đọc thêm](#truy-cập-các-tính-năng-cộng-đồng-hoyolab-bằng-cookie)                             |

### Tôi có thể bị cấm vì sử dụng Hoyo Buddy không?

Câu trả lời ngắn gọn là tôi không biết.

I haven't been notified from my users of any bans resulting from the use of Hoyo Buddy. However, you should note that using any third-party tool to access your account data is against the TOS. While the risk of being banned is low, it is not zero, I cannot make any guarantees. If you are concerned about the possibility of being banned, you should avoid using Hoyo Buddy.

Technically, if a ban actually happens, it will be a ban from HoYoLAB, not from the game itself. This means you can still play the game, but you won't be able to access HoYoLAB anymore.

### Truy cập các tính năng cộng đồng HoYoLAB bằng Cookie

Bạn có thể đăng bài, bình luận, trả lời và tham gia chủ đề trên HoYoLAB bằng cookie của mình.

In the bot, community features are strictly being used for completing Traveling Mimo tasks. If there is a comment task, the bot will make a comment on your behalf then delete it.

Nếu tính năng hoàn thành nhiệm vụ tự động Mimo Du Lịch bị tắt trên tài khoản của bạn, bot sẽ không truy cập bất kỳ tính năng cộng đồng nào.

### Cookie của tôi được lưu trữ như thế nào?

Your Cookies are securely stored in a database hosted by [Hetzner](https://www.hetzner.com/). To access this database and obtain your Cookies, a hacker would need to acquire both my server's account password and the database's password. Such a scenario is typically associated with data breaches, although it's important to note that breaches involving Hetzner, a reputable and widely-used server hosting provider, are relatively rare. However, in the unlikely event of a breach, I will immediately issue an announcement in the Discord server, urging all users to change their account passwords. This action ensures that any previously stored Cookies in the database become invalidated, thus safeguarding your privacy and security.

### Phương pháp đăng nhập bằng email và mật khẩu hoạt động như thế nào?

:::info

Email và mật khẩu của bạn không bao giờ được lưu trữ.

:::

This method isn't designed to compromise your account security, it's made to simplify the account set up process. Many users encounter difficulties locating their Cookies manually, prompting the introduction of an easier alternative. The method functions exactly to logging in via email and password on HoYoLAB, occasionally requiring CAPTCHA verification for security purposes. Your email and password were never stored in the database. They are temporarily held in-memory and encrypted before being sent to Hoyoverse's server. Internally, this method functions the same as the DevTools method, both only saves your Cookies in the database, but some might feel that the DevTools method is safer.

### Bạn có thể đăng nhập vào tài khoản trò chơi của tôi không?

Không, tôi không thể.

Cookies don't have enough permissions to login to your game account, username and password login is needed for that. Your username and password were never stored; even if they were, logging in on an unknown device requires email verification, and I don't have access to your email.

### Bạn có thể thay đổi mật khẩu tài khoản của tôi không?

Không, tôi không thể.

Cookies don't have enough permissions to change your account's password, username and password login is needed for that. Your username and password were never stored; even if they were, changing password requires email verification, and I don't have access to your email.

### Bạn có thể đánh cắp/bán tài khoản của tôi không?

Không, tôi không thể.

Stealing or selling your account requires changing your password, which is [not possible](#can-you-change-my-accounts-password). Even if I share your Cookies to others, it's not possible to [login to your game account](#can-you-login-to-my-game-account).
