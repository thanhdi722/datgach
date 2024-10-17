import React, { useState } from "react";
import Image from "next/image";
import ContentImage from "../../../../public/old/content-01.jpg";
import "./content.scss";

const Content = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="content">
      <div className="container">
        <div className="content-wrap">
          <div
            className={`content-item ${isExpanded ? "expanded" : "collapsed"}`}
          >
            Có nên <span style={{ fontWeight: 600 }}>mua điện thoại cũ</span>{" "}
            nói riêng và hàng công nghệ cũ nói chung hay không là thắc mắc của
            không ít người tiêu dùng. Trên thực tế việc mua hàng công nghệ đã
            qua sử dụng mang đến nhiều lợi ích nhưng cũng không hiếm các rủi ro.
            Để đưa ra quyết định chọn mua máy cũ mời bạn tham khảo qua bài viết
            bên dưới.{" "}
            <q>Vì sao nhiều người chọn mua điện thoại cũ thay vì hàng mới?</q>{" "}
            Lý do đầu tiên chắc hẳn bạn cũng đã mường tượng được trong đầu chính
            là mua máy cũ giá rẻ để tiết kiệm chi phí. Thay vì phải bỏ ra một số
            tiền lớn để mua máy mới, nếu mua hàng cũ thì số tiền ấy sẽ thấp hơn
            khoảng 10 - 50% tùy máy. Dù bỏ ra chi phí thấp hơn nhưng người dùng
            vẫn được trải nghiệm tính năng cao cấp, mức cấu hình mạnh tương
            đương máy mới. Thứ hai một số bạn yêu thích đồ công nghệ và luôn
            muốn trải nghiệm nhiều máy khác nhau nhưng lại có khả năng tài chính
            hạn hẹp, vì thế họ tìm đến đồ công nghệ cũ. Với cách này các bạn ấy
            vừa được thỏa mãn nhu cầu đổi điện thoại, vừa có thể tiết kiệm chi
            phí. Cuối cùng có những dòng máy đã không còn được hãng sản xuất
            mới, nhưng có nhiều bạn lại yêu thích một tính năng hay thiết kế nào
            đó trên máy, vì thế họ tìm đến đồ cũ. Tương tự như thế, nhiều khách
            hàng có sở thích sưu tập những chiếc smartphone cổ, vì thế những
            quán bán đồ cũ hay tiệm cầm đồ là nơi họ chọn mua thiết bị công
            nghệ.{" "}
            <q>Khi mua máy đổi trả, cũ đã qua sử dụng cần quan tâm những gì?</q>{" "}
            Bên cạnh những lợi ích tuyệt vời, việc chọn mua máy cũ cũng tồn tại
            không ít rủi ro như ngoại hình, lỗi phần mềm, máy đã qua sửa
            chữa,.... Do đó để chọn được sản phẩm ưng ý, bạn cần lưu tâm đến
            những điều dưới đây: <q>Nơi mua uy tín</q> Chọn được địa chỉ mua uy
            tín sẽ đảm bảo chất lượng của máy. Theo đó những máy cũ được thu mua
            lại ở những địa điểm này sẽ được kiểm tra kỹ lưỡng trước khi được
            bán lại cho người tiêu dùng. Để chọn được nơi mua uy tín, bạn cần
            tham khảo ý kiến của những khách hàng đã từng mua hàng tại đó. Hoặc
            bạn có thể lên mạng tìm hiểu về mức độ uy tín của địa chỉ đó như thế
            nào, đã từng bị khách hàng đánh giá không tốt hay chưa,...
          </div>
          {isExpanded && (
            <div className="image-wrap">
              <Image
                src={ContentImage}
                alt="content"
                width={1000}
                height={1000}
              />
            </div>
          )}
        </div>

        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <button className="button" onClick={toggleExpand}>
            <span className="button-content">
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
