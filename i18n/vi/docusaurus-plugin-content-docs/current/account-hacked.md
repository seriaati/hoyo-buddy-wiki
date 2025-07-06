# Phản hồi về việc tài khoản bị can thiệp và tại sao không phải do Hoyo Buddy

## Hoyo Buddy hoạt động như thế nào?

Khi bạn liên kết tài khoản bằng email & mật khẩu:

1. Bạn nhập email & mật khẩu
2. Bot mã hóa cả hai giá trị (làm cho chúng không thể đọc được)
3. Nó gửi các thông tin xác thực được mã hóa này đến máy chủ Hoyoverse thông qua HTTPS (kết nối an toàn)
4. Máy chủ Hoyoverse trả về cookie (dữ liệu đăng nhập)
5. Những cookie này được mã hóa và lưu trữ trong cơ sở dữ liệu

## Tính năng bảo mật

- **Máy chủ Bảo Vệ**: Máy chủ sử dụng mật khẩu mất hàng thế kỷ mới có thể bẻ khóa. Nhật ký đăng nhập không hiển thị bất kỳ lần đăng nhập thành công đáng ngờ nào.

- **Bảo vệ bộ nhớ**: Email và mật khẩu của bạn chỉ được lưu tạm thời trong bộ nhớ, khiến chúng gần như không thể bị đánh cắp từ máy chủ trực tuyến.

- **Mã hóa cao cấp**: Thông tin xác thực của bạn được mã hóa bằng RSA trước khi gửi đến Hoyoverse. Điều này tạo ra các kết quả mã hóa khác nhau mỗi lần, khiến việc đảo ngược trở nên không thể.

- **Kết nối an toàn**: Mọi dữ liệu được truyền qua HTTPS, nghĩa là mọi thứ đều được mã hóa. Ngay cả khi ai đó chặn yêu cầu, họ cũng không thể thấy được những gì bên trong.

- **Không có lưu trữ vĩnh viễn**: Email và mật khẩu của bạn KHÔNG được lưu trữ trong cơ sở dữ liệu. Chúng sẽ bị xóa sau khi nhận được cookie của bạn. Chỉ có cookie được mã hóa mới được lưu trữ.

- **Bảo mật cơ sở dữ liệu**: Cơ sở dữ liệu được bảo vệ bằng mật khẩu mà phải mất hàng thế kỷ mới có thể giải mã được.

- **Sử dụng Cookie có giới hạn**: Chỉ riêng cookie không đủ để đánh cắp tài khoản của bạn. Chúng chỉ có thể được sử dụng cho HoYoLAB, không phải trung tâm tài khoản nơi có thể thực hiện thay đổi cho tài khoản của bạn.

## Tài khoản thực sự bị đánh cắp như thế nào

Để đánh cắp tài khoản Hoyoverse, ai đó cần phải:

1. Có email và mật khẩu Hoyoverse của bạn để đăng nhập vào trung tâm tài khoản (cookie KHÔNG đủ)
2. ​​Yêu cầu thay đổi địa chỉ email của bạn (yêu cầu xác minh từ email gốc của bạn)
3. Truy cập tài khoản email của bạn để lấy mã xác minh
4. Đổi email tài khoản của bạn thành email của họ
5. Sau đó, họ kiểm soát tài khoản của bạn vì việc đặt lại mật khẩu sẽ được chuyển đến email của họ

## Điều gì có thể xảy ra thay vào đó

1. Tài khoản Hoyoverse của bạn có mật khẩu yếu, dễ đoán hoặc bẻ khóa
2. Tài khoản email của bạn cũng có mật khẩu yếu (hoặc tệ hơn, sử dụng cùng một mật khẩu)
3. Bạn đang sử dụng dịch vụ email có tính năng bảo mật hạn chế (không giống như các dịch vụ như Google yêu cầu xác minh bổ sung)
4. Thiết bị của bạn có thể bị nhiễm phần mềm độc hại đánh cắp thông tin đăng nhập của bạn

## Những việc bạn nên làm ngay bây giờ

1. Thay đổi tất cả mật khẩu ngay lập tức
2. Kiểm tra tài khoản email của bạn để xem có hoạt động đăng nhập đáng ngờ nào không
3. Sử dụng mật khẩu mạnh và duy nhất cho các dịch vụ khác nhau
4. Bật xác thực hai yếu tố (2FA) bất cứ khi nào có thể
5. Quét phần mềm độc hại trên thiết bị của bạn
