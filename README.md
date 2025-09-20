1. Giới thiệu đề tài

Đề tài xây dựng một ứng dụng web quản lý nhà cung cấp và sản phẩm nhằm hỗ trợ doanh nghiệp trong việc lưu trữ, quản lý và khai thác thông tin.
Ứng dụng được phát triển qua 3 giai đoạn (Part 1 → Part 3):

Part 1: Xây dựng CRUD cho nhà cung cấp và sản phẩm.

Part 2: Bổ sung chức năng đăng ký, đăng nhập, session/cookie để quản lý người dùng.

Part 3: Cải tiến giao diện người dùng, đồng bộ màu sắc giữa login/register, bổ sung bảo mật và tối ưu trải nghiệm.

2. Mục tiêu

Vận dụng kiến thức Node.js, Express, MongoDB để xây dựng ứng dụng quản lý dữ liệu thực tế.

Áp dụng mô hình MVC trong phát triển phần mềm.

Thực hành quản lý session, xác thực người dùng, phân quyền cơ bản.

Hoàn thiện project theo hướng chuyên nghiệp (GitHub, báo cáo, UI/UX).

3. Công nghệ sử dụng

Ngôn ngữ: JavaScript (Node.js)

Backend Framework: Express.js

Database: MongoDB (Mongoose ODM)

Template Engine: EJS

Frontend: Bootstrap 5

Xác thực & Session: express-session, connect-mongo

Quản lý phiên bản: Git, GitHub

4. Kiến trúc hệ thống

Ứng dụng phát triển theo mô hình MVC (Model – View – Controller):

Model: Định nghĩa schema (Supplier, Product, User).

View: Sử dụng EJS + Bootstrap, giao diện đơn giản, đồng bộ màu sắc.

Controller: Xử lý logic, kết nối Model và render View.

5. Các chức năng chính
🔹 Part 1 – Quản lý Nhà cung cấp & Sản phẩm

Thêm mới, chỉnh sửa, xóa, xem danh sách Nhà cung cấp.

Thêm mới, chỉnh sửa, xóa, liên kết với Sản phẩm.

🔹 Part 2 – Quản lý Người dùng

Đăng ký tài khoản.

Đăng nhập / Đăng xuất.

Lưu phiên bằng session + cookie.

Kiểm soát giao diện dựa theo trạng thái đăng nhập.

🔹 Part 3 – Cải tiến & Hoàn thiện

Giao diện login/register đồng bộ màu sắc, trực quan hơn.

Thêm thông báo lỗi/ thành công khi đăng nhập/đăng ký.

Tối ưu session và middleware res.locals.user để luôn có biến user cho mọi view.

Cải thiện UX tổng thể.
