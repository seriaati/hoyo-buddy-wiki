<!-- markdownlint-disable MD026 MD040 MD047 -->

# Những Câu Hỏi Thường Gặp

## Có gì đó không ổn!1!1!!

Nếu có vấn đề gì với Hoyo Buddy, bạn có thể tag @seria_ati trên [máy chủ Discord](https://link.seria.moe/hb-dc) hoặc [nhắn tin trực tiếp](https://discord.com/users/410036441129943050) cho tôi về vấn đề đó.

## Hoyo Buddy có an toàn khi sử dụng không?

Tùy thuộc vào ý bạn khi nói đến "an toàn", vui lòng đọc trang bảo mật tài khoản để biết thêm thông tin.

## Tôi nên sử dụng phương thức đăng nhập nào?

| Phương thức                          | Đăng nhập bằng thiết bị di động | Đăng nhập bằng PC | Đăng nhập bằng máy chơi game | Đổi mã tự động & thủ công | Ghi chú                                             |
| ------------------------------------ | ------------------------------- | ----------------- | ---------------------------- | --------------------------------------------- | --------------------------------------------------- |
| Email & mật khẩu | ✅                               | ✅                 | ✅[\*](./Before-Start.md)     | ✅                                             | Dễ hơn                                              |
| DevTools                             | ❌                               | ✅                 | ❌                            | ❌                                             | ... |

:::note

Email & mật khẩu đề cập đến email và mật khẩu của **tài khoản Hoyoverse**, không phải tài khoản Google, Apple, v.v.

:::

Đọc thêm:

- [Hoyo Buddy có an toàn không?](./Account-Security.md)
- [Phương pháp đăng nhập bằng email và mật khẩu hoạt động như thế nào?](./Account-Security.md#phương-pháp-đăng-nhập-bằng-email-và-mật-khẩu-hoạt-động-như-thế-nào)
- [Tại sao tính năng đổi mã chỉ dành riêng cho người dùng đã đăng nhập bằng email và mật khẩu?](#tại-sao-tính-năng-đổi-mã-chỉ-dành-riêng-cho-người-dùng-đăng-nhập-bằng-email-và-mật-khẩu)

## Một số văn bản vẫn được hiển thị là tiếng Anh, mặc dù tôi đã chọn ngôn ngữ khác thông qua /settings

This is because the translation for the texts you're seeing are not ready yet, Hoyo Buddy only has a small group of volunteers to translate the texts, and we all have our personal life to enjoy with. So, if you want to speed up this process, you're very welcomed to join the translation team! If you're interested, read the [contribution guidelines](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) for more information.

## Dữ liệu của tôi được sử dụng như thế nào?

Dữ liệu của bạn sẽ không bao giờ được chia sẻ với bên thứ ba; để biết thêm thông tin, vui lòng đọc trang [chính sách bảo mật](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md).

## Hoyo Buddy có phải là phần mềm mã nguồn mở không?

Yes, Hoyo Buddy is open source. You can find the source code on [GitHub](https://github.com/seriaati/hoyo-buddy/) , please comply with the [license](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE) when using the code.

### Tôi có thể tự-host Hoyo Buddy không?

I won't provide any assistance to self-hosting, but with enough technical skills, it's possible to set up your own instance of Hoyo Buddy. However, due to copyright purposes, I have locked the assets that Hoyo Buddy uses in a private repository, this means that all image generation features on your instance will not work (except the 3rd party card templates in /profile).

## Tại sao các nút/lựa chọn bị vô hiệu hóa?

To save resources, UI (user interface) elements expire after 10 minutes. To avoid confusion, UI elements are disabled when they expire.

# Lỗi "Quá nhiều yêu cầu" khi thêm tài khoản

Xem [trang này](./too-many-requests.md) để biết thêm thông tin.

## Tại sao tính năng đổi mã chỉ dành riêng cho người dùng đăng nhập bằng email và mật khẩu?

Hoyoverse uses a special cookie called `cookie_token` for code redemption that expires very quickly. `cookie_token` is only used in code redemption, so that's why other features still work. When users login with their email & password, a special cookie called `stoken` is received, which can be used to refresh `cookie_token`, hence why the feature exclusiveness.

## Tôi không thấy tài khoản trò chơi của mình sau khi đăng nhập

### Phương pháp email và mật khẩu

Đảm bảo bạn đã đăng nhập bằng cùng thông tin đăng nhập mà bạn đã sử dụng trong trò chơi.

- [Tôi sử dụng phương pháp đăng nhập của bên thứ 3 (Google, Facebook, v.v.)](./Before-Start.md#tôi-dăng-nhập-bằng-dịch-vụ-bên-thứ-ba)
- [Tôi là người chơi console](./Before-Start.md#tôi-chới-trên-máy-chơi-game-playstation-và-xbox)

### Phương pháp DevTools

Make sure you're logged in with the same credentials you used in-game on HoYoLAB. For example, if you use a Google account [a@gmail.com](mailto:a@gmail.com) to login Genshin Impact, then use the [a@gmail.com](mailto:a@gmail.com) Google account to login HoYoLAB.

Nếu bạn thấy mục Cookie trùng lặp, hãy thử sử dụng cửa sổ ẩn danh để đăng nhập.

## Tại sao tôi thấy lỗi "interaction failed"?

Most of the time this is caused by bot restarts (to apply code updates), and you just need to re-type the command again. However, if this keeps on happening, that means something is broken and you should report it in the [Discord server](https://link.seria.moe/hb-dc).

## Tài khoản của tôi bị can thiệp (hacked) sau khi thêm vào Hoyo Buddy

Xem [trang này](./account-hacked.md) để biết thêm thông tin.