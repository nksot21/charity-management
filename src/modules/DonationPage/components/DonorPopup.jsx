import React from "react";
import Modal from "../../../globalComponents/Modal/Modal";
import DonorInfo from "../../DonorDetailPage/components/DonorInfo";

function DonorPopup({ onCloseModal, donor }) {
  return (
    <Modal onCloseModal={onCloseModal}>
      <DonorInfo onDonation={true} donor={donor} />
    </Modal>
  );
}

export default DonorPopup;
