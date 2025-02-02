# Bảo Mật Tài Khoản

Phần này giải thích cách dữ liệu tài khoản của bạn được sử dụng và lưu trữ. Hãy nhớ rằng Hoyo Buddy là mã nguồn mở và mọi người đều có thể xác nhận quy trình xử lý tài khoản bằng cách đọc mã nguồn.

## Miễn trừ

Việc bạn muốn cung cấp Cookie của bạn là do quyết định của **BẠN**. Mặc dù nhiều tính năng do bot cung cấp phụ thuộc vào cookie HoYoLAB của người dùng để hoạt động, Hoyo Buddy chưa bao giờ bắt người dùng cung cấp cookie của họ khi họ không muốn. Lập trình viên đã triển khai các biện pháp bảo mật mạnh mẽ để ngăn chặn việc rò rỉ Cookie của bạn. Trong trường hợp dữ liệu bị rò rỉ, trách nhiệm tối cao của lập trình viên là thông báo kịp thời cho người dùng về tình hình và khuyến cáo họ nên thay đổi mật khẩu. Tóm lại, vui lòng sử dụng công cụ này theo quyết định và rủi ro của riêng bạn!

## Hoyo Buddy hoạt động như thế nào?

Hoyo Buddy sử dụng cookie HoYoLAB của bạn để truy cập thông tin tài khoản của bạn. Bằng cách lấy cookie của bạn, Hoyo Buddy có thể mô phỏng các yêu cầu gửi đến HoYoLAB bằng danh tính của bạn, do đó truy cập thông tin như ghi chú thời gian thực và nhiều thông tin khác. HoYoLAB xác định người yêu cầu dựa trên cookie và Hoyo Buddy sử dụng cookie của bạn để thông báo cho HoYoLAB rằng người yêu cầu là bạn.

### Cookies là gì?

Cookie 🍪 là những phần dữ liệu nhỏ mà các trang web lưu trữ trên máy tính hoặc thiết bị của bạn khi bạn truy cập vào trang web đó. Chúng không phải là phần mềm, không thể mang vi-rút và không phải là phần mềm gián điệp. Thay vào đó, chúng giống như một ghi chú mà một trang web để lại cho trình duyệt của bạn để ghi nhớ một số thông tin nhất định về bạn hoặc lượt truy cập của bạn.

Hãy tưởng tượng bạn bước vào một cửa hàng và người bán hàng đưa cho bạn một nhãn dán. Nhãn dán này có thể có thông tin như những mặt hàng bạn đã xem, bạn ở trong cửa hàng bao lâu hoặc thậm chí là sở thích của bạn. Sau đó, khi bạn quay lại cửa hàng, người bán hàng sẽ xem nhãn dán của bạn và có thể tùy chỉnh trải nghiệm của bạn dựa trên thông tin trên đó.

Tương tự như vậy, khi bạn truy cập HoYoLAB, nó sẽ cung cấp cho trình duyệt của bạn một "cookie". Cookie này cho phép trang web xác định rằng chính bạn là người đang truy cập trang web.

## Câu hỏi thường gặp

| Câu hỏi | Trả lời | Ghi chú |
|---|---|---|
| Email và mật khẩu của tôi có được lưu trữ không? | ❌ | [Xem mã](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| Bạn có thể đăng nhập vào tài khoản trò chơi của tôi không? | ❌ | Không thể |
| Bạn có thể thay đổi mật khẩu tài khoản của tôi không? | ❌ | Không thể |
| Bạn có thể đánh cắp tài khoản của tôi không? | ❌ | Không thể |
| Bạn có thể bán tài khoản của tôi không? | ❌ | Không thể |
| Tôi có thể bị cấm vì sử dụng Hoyo Buddy không? | ❔ | [Đọc thêm](#tôi-có-thể-bị-cấm-vì-sử-dụng-hoyo-buddy-không) |
| Cookie có hết hạn không? | ✅ | Sau 1 năm |
| Cookie có bị vô hiệu hóa sau khi tôi thay đổi mật khẩu không? | ✅ | Ngay lập tức |
| Bạn có thể đăng bài trên HoYoLAB bằng danh tính của tôi không? | ✅ | [Đọc thêm](#truy-cập-các-tính-năng-cộng-đồng-hoyolab-bằng-cookie) |

### Tôi có thể bị cấm vì sử dụng Hoyo Buddy không?

Câu trả lời ngắn gọn là tôi không biết.

Tôi chưa được người dùng thông báo về bất kỳ lệnh cấm nào do sử dụng Hoyo Buddy. Tuy nhiên, bạn nên lưu ý rằng việc sử dụng bất kỳ công cụ của bên thứ ba nào để truy cập dữ liệu tài khoản của bạn đều vi phạm TOS. Mặc dù nguy cơ bị cấm là thấp, nhưng không phải là không có, tôi không thể đưa ra bất kỳ đảm bảo nào. Nếu bạn lo ngại về khả năng bị cấm, bạn nên tránh sử dụng Hoyo Buddy.

Về mặt kỹ thuật, nếu lệnh cấm thực sự xảy ra, đó sẽ là lệnh cấm đối với HoYoLAB, không phải đối với chính trò chơi. Điều này có nghĩa là bạn vẫn có thể chơi trò chơi, nhưng bạn sẽ không thể truy cập HoYoLAB nữa.

### Truy cập các tính năng cộng đồng HoYoLAB bằng Cookie

Bạn có thể đăng bài, bình luận, trả lời và tham gia chủ đề trên HoYoLAB bằng cookie của mình.

Trong bot, các tính năng cộng đồng chỉ được sử dụng để hoàn thành nhiệm vụ Mimo Du Lịch. Nếu có nhiệm vụ bình luận, bot sẽ bình luận thay mặt bạn rồi xóa nhiệm vụ đó.

Nếu tính năng hoàn thành nhiệm vụ tự động Mimo Du Lịch bị tắt trên tài khoản của bạn, bot sẽ không truy cập bất kỳ tính năng cộng đồng nào.

### Cookie của tôi được lưu trữ như thế nào?

Cookie của bạn được lưu trữ an toàn trong cơ sở dữ liệu do [Hetzner](https://www.hetzner.com/) lưu trữ. Để truy cập cơ sở dữ liệu này và lấy được Cookie của bạn, tin tặc sẽ cần phải lấy được cả mật khẩu tài khoản máy chủ của tôi và mật khẩu cơ sở dữ liệu. Một kịch bản như vậy thường liên quan đến vi phạm dữ liệu, mặc dù điều quan trọng cần lưu ý là vi phạm liên quan đến hetzner, một nhà cung cấp dịch vụ lưu trữ máy chủ uy tín và được sử dụng rộng rãi, tương đối hiếm. Tuy nhiên, trong trường hợp vi phạm không mong muốn, tôi sẽ ngay lập tức đưa ra thông báo trên máy chủ Discord, yêu cầu tất cả người dùng thay đổi mật khẩu tài khoản của họ. Hành động này đảm bảo rằng bất kỳ Cookie nào đã lưu trữ trước đó trong cơ sở dữ liệu đều trở nên vô hiệu, do đó bảo vệ quyền riêng tư và bảo mật của bạn.

### Phương pháp đăng nhập bằng email và mật khẩu hoạt động như thế nào?

:::info

Email và mật khẩu của bạn không bao giờ được lưu trữ.

:::

Trước tiên, điều quan trọng cần nhấn mạnh là phương pháp này không được thiết kế để xâm phạm tính bảo mật tài khoản của bạn. Thay vào đó, nó được triển khai để đơn giản hóa quy trình thiết lập tài khoản trong Hoyo Buddy. Nhiều người dùng gặp khó khăn khi định vị Cookie theo cách thủ công, thúc đẩy việc giới thiệu một giải pháp thay thế dễ dàng hơn. Phương pháp này hoạt động chính xác như đăng nhập qua email và mật khẩu trên HoYoLAB, đôi khi yêu cầu xác minh CAPTCHA vì mục đích bảo mật. Điều quan trọng cần lưu ý là email và mật khẩu của bạn không bao giờ được lưu trữ trong cơ sở dữ liệu. Thay vào đó, chúng được lưu tạm thời trong bộ nhớ và được mã hóa trước khi được truyền đến máy chủ của Hoyoverse. Phương pháp này tăng cường bảo mật bằng cách giảm thiểu việc tiết lộ thông tin đăng nhập nhạy cảm; bạn có thể xác minh quy trình minh bạch này bằng cách kiểm tra mã nguồn.
