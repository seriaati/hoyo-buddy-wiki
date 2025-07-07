<!-- markdownlint-disable MD026 MD040 MD047 -->
# Những Câu Hỏi Thường Gặp

## Có gì đó không ổn!1!1!!

Nếu có vấn đề gì với Hoyo Buddy, bạn có thể tag @seria_ati trên [máy chủ Discord](https://link.seria.moe/hb-dc) hoặc [nhắn tin trực tiếp](https://discord.com/users/410036441129943050) cho tôi về vấn đề đó.

## Hoyo Buddy có an toàn khi sử dụng không?

Tùy thuộc vào ý bạn khi nói đến "an toàn", vui lòng đọc trang bảo mật tài khoản để biết thêm thông tin.

## Tôi nên sử dụng phương thức đăng nhập nào?

| Phương thức | Đăng nhập bằng thiết bị di động | Đăng nhập bằng PC | Đăng nhập bằng máy chơi game | Đổi mã tự động & thủ công | Ghi chú
|---|---|---|---|---|---
| Email & mật khẩu | ✅ | ✅ | ✅[*](./Before-Start.md) | ✅ | Dễ hơn
| DevTools | ❌ | ✅ | ❌ | ❌ | ...

:::note

Email & mật khẩu đề cập đến email và mật khẩu của **tài khoản Hoyoverse**, không phải tài khoản Google, Apple, v.v.

:::

Đọc thêm:

- [Hoyo Buddy có an toàn không?](./Account-Security.md)
- [Phương pháp đăng nhập bằng email và mật khẩu hoạt động như thế nào?](./Account-Security.md#phương-pháp-đăng-nhập-bằng-email-và-mật-khẩu-hoạt-động-như-thế-nào)
- [Tại sao tính năng đổi mã chỉ dành riêng cho người dùng đã đăng nhập bằng email và mật khẩu?](#tại-sao-tính-năng-đổi-mã-chỉ-dành-riêng-cho-người-dùng-đăng-nhập-bằng-email-và-mật-khẩu)

## Một số văn bản vẫn được hiển thị là tiếng Anh, mặc dù tôi đã chọn ngôn ngữ khác thông qua /settings

Nguyên nhân là do bản dịch cho các văn bản bạn đang xem vẫn chưa sẵn sàng, Hoyo Buddy chỉ có một nhóm nhỏ tình nguyện viên để dịch các văn bản và tất cả chúng ta đều có cuộc sống riêng để tận hưởng. Vì vậy, nếu bạn muốn đẩy nhanh quá trình này, bạn rất được hoan nghênh tham gia nhóm dịch viên! Nếu bạn quan tâm, hãy đọc [hướng dẫn đóng góp](https://github.com/seriaati/hoyo-buddy/blob/main/CONTRIBUTING.md) để biết thêm thông tin.

## Dữ liệu của tôi được sử dụng như thế nào?

Dữ liệu của bạn sẽ không bao giờ được chia sẻ với bên thứ ba; để biết thêm thông tin, vui lòng đọc trang [chính sách bảo mật](https://github.com/seriaati/hoyo-buddy/blob/main/PRIVACY.md).

## Hoyo Buddy có phải là phần mềm mã nguồn mở không?

Có, Hoyo Buddy là mã nguồn mở. Bạn có thể tìm mã nguồn trên [GitHub](https://github.com/seriaati/hoyo-buddy/), vui lòng tuân thủ [giấy phép](https://github.com/seriaati/hoyo-buddy/blob/main/LICENSE) khi sử dụng mã.

### Tôi có thể tự-host Hoyo Buddy không?

Tôi sẽ không cung cấp bất kỳ hỗ trợ nào cho việc tự host, nhưng với đủ kỹ năng kỹ thuật, bạn có thể thiết lập phiên bản Hoyo Buddy của riêng mình. Tuy nhiên, vì lý do bản quyền, tôi đã khóa các tài sản mà Hoyo Buddy sử dụng trong kho lưu trữ riêng, điều này có nghĩa là tất cả các tính năng tạo hình ảnh trên phiên bản của bạn sẽ không hoạt động (trừ các mẫu thẻ của bên thứ 3 trong /profile).

## Tại sao các nút/lựa chọn bị vô hiệu hóa?

Để tiết kiệm tài nguyên, các thành phần UI (giao diện người dùng) sẽ hết hạn sau 10 phút. Để tránh nhầm lẫn, các thành phần UI sẽ bị vô hiệu hóa khi chúng hết hạn.

## Lỗi "Quá nhiều yêu cầu" khi thêm tài khoản

Xem [trang này](./too-many-requests.md) để biết thêm thông tin.

## Tại sao tính năng đổi mã chỉ dành riêng cho người dùng đăng nhập bằng email và mật khẩu?

Hoyoverse sử dụng một cookie đặc biệt gọi là `cookie_token` để đổi mã hết hạn rất nhanh. `cookie_token` chỉ được sử dụng để đổi mã, do đó các tính năng khác vẫn hoạt động. Khi người dùng đăng nhập bằng email và mật khẩu của họ, một cookie đặc biệt gọi là `stoken` sẽ được nhận, có thể được sử dụng để làm mới `cookie_token`, do đó tính năng này có tính độc quyền.

## Tôi không thấy tài khoản trò chơi của mình sau khi đăng nhập

### Phương pháp email và mật khẩu

Đảm bảo bạn đã đăng nhập bằng cùng thông tin đăng nhập mà bạn đã sử dụng trong trò chơi.

- [Tôi sử dụng phương pháp đăng nhập của bên thứ 3 (Google, Facebook, v.v.)](./Before-Start.md#tôi-dăng-nhập-bằng-dịch-vụ-bên-thứ-ba)
- [Tôi là người chơi console](./Before-Start.md#tôi-chới-trên-máy-chơi-game-playstation-và-xbox)

### Phương pháp DevTools

Đảm bảo bạn đã đăng nhập bằng cùng thông tin đăng nhập mà bạn đã sử dụng trong trò chơi trên HoYoLAB. Ví dụ: nếu bạn sử dụng tài khoản Google [a@gmail.com](mailto:a@gmail.com) để đăng nhập Genshin Impact, thì hãy sử dụng tài khoản Google [a@gmail.com](mailto:a@gmail.com) để đăng nhập HoYoLAB.

Nếu bạn thấy mục Cookie trùng lặp, hãy thử sử dụng cửa sổ ẩn danh để đăng nhập.

## Tại sao tôi thấy lỗi "interaction failed"?

Hầu hết thời gian lỗi này là do bot khởi động lại (để áp dụng bản cập nhật mã) và bạn chỉ cần nhập lại lệnh. Tuy nhiên, nếu lỗi này tiếp tục xảy ra, điều đó có nghĩa là có lỗi và bạn nên thông báo cho nhà phát triển trong [máy chủ Discord](https://link.seria.moe/hb-dc).

## Tài khoản của tôi bị can thiệp (hacked) sau khi thêm vào Hoyo Buddy

Xem [trang này](./account-hacked.md) để biết thêm thông tin.