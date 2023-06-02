import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import DonorInfo from "../../DonorDetailPage/components/DonorInfo";

function DonorPopup({ onCloseModal, donorId }) {
  const donor = {
    id: 10,
    name: "Nguyễn Quỳnh Châu",
    phone: "0234093284",
    birthday: "2003-06-01T05:53:56.642Z",
    photo: "",
    email: "chaubui@gmail.com",
    address: "Quy nhon, Binh dinh",
    score: 0,
    joinDate: "2023-06-01T05:53:56.642Z",
    slogan:
      "Tôi là Thái Thuỳ Linh, người đã lao vào tâm dịch ngày 19/07/2021 khi Sài Gòn bắt đầu chạm mốc 2.000 ca F0 một ngày. Tôi tình nguyện làm thuê với mức lương 0đ cho đồng bào khó khăn, trong chiến dịch tình nguyện Người Việt thương nhau ✊❤️",
    username: "@quynhdethuong298",
    password: null,
  };

  // Get donor font database based on donor ID

  return (
    <Modal onCloseModal={onCloseModal}>
      <DonorInfo onDonation={true} donor={donor} />
    </Modal>
  );
}

export default DonorPopup;
