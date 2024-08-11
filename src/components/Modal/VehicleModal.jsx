import Modal from "react-modal";

import css from "./VehicleModal.module.css";

Modal.setAppElement("#root");

const VehicleModal = () => {
  return <Modal className={css.modal} overlayClassName={css.overlay}></Modal>;
};

export default VehicleModal;
