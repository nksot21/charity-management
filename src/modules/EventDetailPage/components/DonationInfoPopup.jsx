import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";

function DonationInfoPopup({ name, eventType, onCloseModal, onAccept }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={24} textAlign={"center"}>
          Thông tin tài khoản aSheep Charity
        </Typography>
        <Stack marginTop={2} spacing={1}>
          <Typography>
            Lời đầu tiên, chúng tôi xin gửi{" "}
            <span style={{ color: "#43aa8b", fontWeight: "bold" }}>
              lời cảm ơn chân thành
            </span>{" "}
            đến {name}
          </Typography>
          <Typography>
            Với lòng hướng về sự tốt đẹp và sự hỗ trợ từ bạn, chúng tôi rất biết
            ơn và trân trọng mọi khoản đóng góp mà bạn đã gửi đến. Sự ủng hộ của
            bạn không chỉ mang ý nghĩa vô cùng quý báu đối với chúng tôi, mà còn
            góp phần tạo nên sự thay đổi tích cực trong cộng đồng của chúng ta.
          </Typography>
          {eventType === "money" && (
            <>
              <Typography>
                Để giúp quy trình chuyển tiền của bạn thuận lợi, dưới đây là
                thông tin về tài khoản ngân hàng của chúng tôi:
              </Typography>
              <Stack
                paddingX={2}
                borderLeft={"3px solid "}
                paddingY={1}
                spacing={1}
              >
                <Typography>
                  Tên ngân hàng:{" "}
                  <span style={{ fontWeight: "bold" }}>VIETCOMBANK (VCB)</span>
                </Typography>
                <Typography>
                  Số tài khoản:{" "}
                  <span style={{ fontWeight: "bold" }}>1029777601</span>
                </Typography>
                <Typography>
                  Tên chủ tài khoản:{" "}
                  <span style={{ fontWeight: "bold" }}>LÊ VĂN THIỆN</span>
                </Typography>
              </Stack>
            </>
          )}

          {eventType === "item" && (
            <>
              <Typography>
                Để giúp quy trình chuyển hàng hóa của bạn thuận lợi, dưới đây là
                thông tin về địa điểm kho nhận quà của chúng tôi:
              </Typography>
              <Stack
                paddingX={2}
                borderLeft={"3px solid "}
                paddingY={1}
                spacing={1}
              >
                <Typography>
                  Địa chỉ:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Số 112 Nguyễn Thị Minh Khai, phường Bình Định, thị xã An
                    Nhơn, tỉnh Bình Định
                  </span>
                </Typography>
                <Typography>
                  Giờ hoạt động:{" "}
                  <span style={{ fontWeight: "bold" }}>6h-22h</span>
                </Typography>
              </Stack>
            </>
          )}

          <Typography>
            Vui lòng sử dụng thông tin trên để thực hiện chuyển khoản đến tài
            khoản của chúng tôi. Để tiện việc xác nhận, hãy ghi rõ tên của bạn
            trong phần nội dung chuyển khoản
          </Typography>
          <Typography>
            Chúng tôi cam kết sử dụng mọi đóng góp một cách minh bạch và hiệu
            quả, để đảm bảo rằng sự hỗ trợ của bạn sẽ được sử dụng để mang lại
            tác động tích cực cho những người cần giúp đỡ.
          </Typography>
          <Typography>
            Nếu bạn có bất kỳ câu hỏi hoặc cần thêm thông tin, xin vui lòng liên
            hệ với chúng tôi qua email: asheepcharity109@gmail.com hoặc số điện
            thoại: 0343130769. Chúng tôi sẽ rất hân hạnh hỗ trợ bạn.
          </Typography>
        </Stack>
        <Stack spacing={1} marginTop={2}>
          <Typography fontSize={13} fontStyle={"italic"} textAlign={"center"}>
            {eventType === "money"
              ? 'Bắng cách nhấn "Tiếp tục" bạn vui lòng cung cấp thông tin tài khoản ngân hàng của bạn và số tiền bạn muốn chuyển'
              : 'Bắng cách nhấn "Tiếp tục" bạn vui lòng cung cấp số lượng vật phẩm mà muốn chuyển'}
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            <Button variant="outlined" onClick={() => onCloseModal()}>
              Hủy
            </Button>
            <Button variant="contained" onClick={() => onAccept()}>
              Tiếp tục
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default DonationInfoPopup;
