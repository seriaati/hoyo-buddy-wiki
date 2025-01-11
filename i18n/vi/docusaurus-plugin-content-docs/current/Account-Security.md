# Bảo Mật Tài Khoản

## Miễn trừ

Việc bạn muốn cung cấp Cookie của bạn là do quyết định của **BẠN**. Mặc dù nhiều tính năng do bot cung cấp phụ thuộc vào cookie HoYoLAB của người dùng để hoạt động, Hoyo Buddy chưa bao giờ bắt người dùng cung cấp cookie của họ khi họ không muốn. Lập trình viên đã triển khai các biện pháp bảo mật mạnh mẽ để ngăn chặn việc rò rỉ Cookie của bạn. Trong trường hợp dữ liệu bị rò rỉ, trách nhiệm tối cao của lập trình viên là thông báo kịp thời cho người dùng về tình hình và khuyến cáo họ nên thay đổi mật khẩu. Tóm lại, vui lòng sử dụng công cụ này theo quyết định và rủi ro của riêng bạn!

## Giới thiệu

Phần này giải thích cách dữ liệu tài khoản của bạn được sử dụng và lưu trữ. Hãy nhớ rằng Hoyo Buddy là mã nguồn mở và bạn có thể tự xác nhận quy trình xử lý tài khoản bằng cách đọc mã nguồn.

### Cookies là gì?

Cookie 🍪 là những phần dữ liệu nhỏ mà các trang web lưu trữ trên máy tính hoặc thiết bị của bạn khi bạn truy cập vào trang web đó. Chúng không phải là phần mềm, không thể mang vi-rút và không phải là phần mềm gián điệp. Thay vào đó, chúng giống như một ghi chú mà một trang web để lại cho trình duyệt của bạn để ghi nhớ một số thông tin nhất định về bạn hoặc lượt truy cập của bạn.

Hãy tưởng tượng bạn bước vào một cửa hàng và người bán hàng đưa cho bạn một nhãn dán. Nhãn dán này có thể có thông tin như những mặt hàng bạn đã xem, bạn ở trong cửa hàng bao lâu hoặc thậm chí là sở thích của bạn. Sau đó, khi bạn quay lại cửa hàng, người bán hàng sẽ xem nhãn dán của bạn và có thể tùy chỉnh trải nghiệm của bạn dựa trên thông tin trên đó.

Tương tự như vậy, khi bạn truy cập trang web HoYoLAB, nó sẽ cung cấp cho trình duyệt của bạn một "cookie". Cookie này chứa thông tin đăng nhập của bạn, cho phép trang web xác định rằng bạn là người truy cập trang web.

### Ok vậy, Hoyo Buddy sử dụng Cookie của tôi như thế nào?

Hoyo Buddy yêu cầu người dùng cung cấp Cookie của họ. Bằng cách lấy Cookie của bạn, Hoyo Buddy có thể mô phỏng các yêu cầu đến HoYoLAB bằng danh tính của bạn, do đó truy cập thông tin như ghi chú thời gian thực, tổng quan về Spiral Abyss, v.v. Về bản chất, HoYoLAB xác định người yêu cầu dựa trên Cookie và Hoyo Buddy sử dụng Cookie của bạn để thông báo cho HoYoLAB rằng người yêu cầu là bạn, do đó có được quyền truy cập vào thông tin được lưu trữ trong tài khoản của bạn.

### Câu hỏi liên quan về bảo mật tài khoản

#### Bạn có quyền truy cập vào tài khoản của tôi không?

Đối với tài khoản HoYoLAB, có ✅. Tuy nhiên, với tài khoản trò chơi, không ❌

For HoYoLAB accounts, yes ✅. However, for game accounts, no ❌. Hoyoverse sử dụng các giao thức bảo mật nghiêm ngặt cho tài khoản trò chơi, đảm bảo rằng thông tin đăng nhập trò chơi khác biệt đáng kể so với thông tin đăng nhập trang web thông thường. Do đó, việc sử dụng Cookie để bắt chước các yêu cầu và truy cập vào trò chơi bằng danh tính của bạn là không khả thi. Nói một cách đơn giản, quyền truy cập của tôi bị giới hạn ở thông tin hiển thị trên HoYoLAB; bất kỳ thông tin nào ngoài thông tin đó đều không thể truy cập được.

#### Bạn có thể thay đổi mật khẩu tài khoản của tôi không??

Không, việc thay đổi mật khẩu tài khoản của bạn liên quan đến các lớp bảo mật bổ sung ngoài việc chỉ sử dụng Cookie. Không thể sửa đổi bất kỳ thông tin nhạy cảm nào trên tài khoản của bạn mà không có xác minh bổ sung từ email hoặc 2FA (nếu bạn đã bật).

#### Bạn có thể đăng bài trên HoYoLAB bằng danh tính của tôi không?

Vì tôi có quyền truy cập vào tài khoản HoYoLAB của bạn, về mặt kỹ thuật là được ✅. Tuy nhiên, điều quan trọng cần nhấn mạnh là tôi sẽ không tham gia vào các hoạt động độc hại như spam bài đăng, nói xấu, v.v.

#### Cookie có thời hạn không?

Có ✅, Cookie thường có thời hạn hết hạn, thường được đặt là một năm. Lưu ý rằng việc thay đổi mật khẩu tài khoản của bạn sẽ khiến tất cả các Cookie trước đó ngay lập tức trở nên vô hiệu.

### Cookie của tôi được lưu trữ như thế nào?

Cookie của bạn được lưu trữ an toàn trong cơ sở dữ liệu do [Hetzner](https://www.hetzner.com/) lưu trữ. Để truy cập cơ sở dữ liệu này và lấy được Cookie của bạn, tin tặc sẽ cần phải lấy được cả mật khẩu tài khoản máy chủ của tôi và mật khẩu cơ sở dữ liệu. Một kịch bản như vậy thường liên quan đến vi phạm dữ liệu, mặc dù điều quan trọng cần lưu ý là vi phạm liên quan đến hetzner, một nhà cung cấp dịch vụ lưu trữ máy chủ uy tín và được sử dụng rộng rãi, tương đối hiếm. Tuy nhiên, trong trường hợp vi phạm không mong muốn, tôi sẽ ngay lập tức đưa ra thông báo trên máy chủ Discord, yêu cầu tất cả người dùng thay đổi mật khẩu tài khoản của họ. Hành động này đảm bảo rằng bất kỳ Cookie nào đã lưu trữ trước đó trong cơ sở dữ liệu đều trở nên vô hiệu, do đó bảo vệ quyền riêng tư và bảo mật của bạn.

### Phương pháp đăng nhập bằng email và mật khẩu hoạt động như thế nào?

Trước tiên, điều quan trọng cần nhấn mạnh là phương pháp này không được thiết kế để xâm phạm tính bảo mật tài khoản của bạn. Thay vào đó, nó được triển khai để đơn giản hóa quy trình thiết lập tài khoản trong Hoyo Buddy. Nhiều người dùng gặp khó khăn khi định vị Cookie theo cách thủ công, thúc đẩy việc giới thiệu một giải pháp thay thế dễ dàng hơn. Phương pháp này hoạt động chính xác như đăng nhập qua email và mật khẩu trên HoYoLAB, đôi khi yêu cầu xác minh CAPTCHA vì mục đích bảo mật. Điều quan trọng cần lưu ý là email và mật khẩu của bạn không bao giờ được lưu trữ trong cơ sở dữ liệu. Thay vào đó, chúng được lưu tạm thời trong bộ nhớ và được mã hóa trước khi được truyền đến máy chủ của Hoyoverse. Phương pháp này tăng cường bảo mật bằng cách giảm thiểu việc tiết lộ thông tin đăng nhập nhạy cảm; bạn có thể xác minh quy trình minh bạch này bằng cách kiểm tra mã nguồn.
