import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import DonorInfo from "../../DonorDetailPage/components/DonorInfo";

function DonorPopup({ onCloseModal }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      <DonorInfo onDonation={true} />
    </Modal>
  );
}

export default DonorPopup;
