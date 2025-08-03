# Bảo Mật Tài Khoản

Phần này giải thích cách dữ liệu tài khoản của bạn được sử dụng và lưu trữ. Hãy nhớ rằng Hoyo Buddy là mã nguồn mở và mọi người đều có thể xác nhận quy trình xử lý tài khoản bằng cách đọc mã nguồn.

## Miễn trừ

Việc bạn muốn cung cấp Cookie của bạn là do quyết định của **BẠN**. Mặc dù nhiều tính năng do bot cung cấp phụ thuộc vào cookie HoYoLAB của người dùng để hoạt động, Hoyo Buddy chưa bao giờ bắt người dùng cung cấp cookie của họ khi họ không muốn. Lập trình viên đã triển khai các biện pháp bảo mật mạnh mẽ để ngăn chặn việc rò rỉ Cookie của bạn. Trong trường hợp dữ liệu bị rò rỉ, trách nhiệm tối cao của lập trình viên là thông báo kịp thời cho người dùng về tình hình và khuyến cáo họ nên thay đổi mật khẩu. Tóm lại, vui lòng sử dụng công cụ này theo quyết định và rủi ro của riêng bạn!

## Hoyo Buddy hoạt động như thế nào?

HoYoLAB xác định người yêu cầu dựa trên cookie, và Hoyo Buddy sử dụng cookie của bạn để thông báo cho HoYoLAB rằng người yêu cầu chính là bạn. Bằng cách thu thập cookie của bạn, Hoyo Buddy có thể mô phỏng các yêu cầu gửi đến HoYoLAB bằng danh tính của bạn, từ đó truy cập thông tin như ghi chú thời gian thực và nhiều thông tin khác.

## Cookie có những quyền truy cập gì?

| Quyền | Có/Không |
|---|---|
| Đăng nhập vào tài khoản trò chơi | ❌ |
| Đổi mật khẩu tài khoản | ❌ |
| Truy cập vào thông tin cá nhân (email, số điện thoại, v.v.) | ❌ |
| Tạo bài đăng/bình luận/trả lời bình luận trên HoYoLAB bằng danh tính của bạn | ✅ |
| Truy cập ghi chú thời gian thực, thống kê dữ liệu nhân vật, và thông tin không nhạy cảm khác trong chiến tích | ✅ |

## Tính năng bảo mật

- **Máy chủ Bảo Vệ**: Máy chủ sử dụng mật khẩu mất hàng thế kỷ mới có thể bẻ khóa. Nhật ký đăng nhập không hiển thị bất kỳ lần đăng nhập thành công đáng ngờ nào.

- **Bảo vệ bộ nhớ**: Email và mật khẩu của bạn chỉ được lưu tạm thời trong bộ nhớ, khiến chúng gần như không thể bị đánh cắp từ máy chủ trực tuyến.

- **Mã hóa cao cấp**: Thông tin xác thực của bạn được mã hóa bằng RSA trước khi gửi đến Hoyoverse. Điều này tạo ra các kết quả mã hóa khác nhau mỗi lần, khiến việc đảo ngược trở nên không thể.

- **Kết nối an toàn**: Mọi dữ liệu được truyền qua HTTPS, nghĩa là mọi thứ đều được mã hóa. Ngay cả khi ai đó chặn yêu cầu, họ cũng không thể thấy được những gì bên trong.

- **Không có lưu trữ vĩnh viễn**: Email và mật khẩu của bạn KHÔNG được lưu trữ trong cơ sở dữ liệu. Chúng sẽ bị xóa sau khi nhận được cookie của bạn. Chỉ có cookie được mã hóa mới được lưu trữ.

- **Bảo mật cơ sở dữ liệu**: Cơ sở dữ liệu được bảo vệ bằng mật khẩu mà phải mất hàng thế kỷ mới có thể giải mã được.

- **Sử dụng Cookie có giới hạn**: Chỉ riêng cookie không đủ để đánh cắp tài khoản của bạn. Chúng chỉ có thể được sử dụng cho HoYoLAB, không phải trung tâm tài khoản nơi có thể thực hiện thay đổi cho tài khoản của bạn.

## Câu hỏi thường gặp

| Câu hỏi | Trả lời | Ghi chú |
|---|---|---|
| Email và mật khẩu của tôi có được lưu trữ không? | ❌ | [Xem mã](https://github.com/seriaati/hoyo-buddy/blob/main/hoyo_buddy/web_app/pages/finish.py) |
| Bạn có thể đăng nhập vào tài khoản trò chơi của tôi không? | ❌ | [Không thể](#bạn-có-thể-đăng-nhập-vào-tài-khoản-trò-chơi-của-tôi-không) |
| Bạn có thể thay đổi mật khẩu tài khoản của tôi không? | ❌ | [Không thể](#bạn-có-thể-thay-đổi-mật-khẩu-tài-khoản-của-tôi-không) |
| Bạn có thể đánh cắp tài khoản của tôi không? | ❌ | [Không thể](#bạn-có-thể-đánh-cắpbán-tài-khoản-của-tôi-không) |
| Bạn có thể bán tài khoản của tôi không? | ❌ | [Không thể](#bạn-có-thể-đánh-cắpbán-tài-khoản-của-tôi-không) |
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

1. Bạn nhập email và mật khẩu
2. Bot mã hóa hai giá trị (làm cho chúng không đọc được)
3. Bot gửi các thông tin xác thực được mã hóa này đến máy chủ Hoyoverse thông qua HTTPS (kết nối an toàn)
4. Máy chủ Hoyoverse gửi về cookie (dử liệu đăng nhập)
5. Những cookie dó được mã hóa và lưu vào trong cơ sở dử liệu

### Bạn có thể đăng nhập vào tài khoản trò chơi của tôi không?

Không, tôi không thể.

Cookie không có đủ quyền để đăng nhập vào tài khoản trò chơi của bạn, cần phải đăng nhập bằng tên người dùng và mật khẩu. Tên người dùng và mật khẩu của bạn chưa bao giờ được lưu trữ; ngay cả khi chúng được lưu trữ, việc đăng nhập trên một thiết bị không xác định yêu cầu xác minh email, và tôi không có quyền truy cập vào email của bạn.

### Bạn có thể thay đổi mật khẩu tài khoản của tôi không?

Không, tôi không thể.

Cookie không có đủ quyền để thay đổi mật khẩu tài khoản của bạn, cần phải đăng nhập bằng tên người dùng và mật khẩu. Tên người dùng và mật khẩu của bạn chưa bao giờ được lưu trữ; ngay cả khi chúng được lưu trữ, việc thay đổi mật khẩu yêu cầu xác minh email, và tôi không có quyền truy cập vào email của bạn.

### Bạn có thể đánh cắp/bán tài khoản của tôi không?

Không, tôi không thể.

Đánh cắp hoặc bán tài khoản của bạn yêu cầu thay đổi mật khẩu của bạn, điều này [không thể thực hiện được](#bạn-có-thể-thay-đổi-mật-khẩu-tài-khoản-của-tôi-không). Ngay cả khi tôi chia sẻ Cookie của bạn cho người khác, cũng không thể [đăng nhập vào tài khoản trò chơi của bạn](#bạn-có-thể-đăng-nhập-vào-tài-khoản-trò-chơi-của-tôi-không).
