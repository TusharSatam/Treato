import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./modal.module.css";
import Modal from "./modal";
import { closeModal } from "../../redux/slices/modal";
import Filter from "./Filter/Filter";
import RescheduleAppointment from "./AppointmentModals/RescheduleAppointment/RescheduleAppointment";
import { cross } from "../../assets/images/icons";
import CancelAppointment from "./AppointmentModals/CancelAppointment/CancelAppointment";
import WriteReview from "./AppointmentModals/WriteReview/WriteReview";

const ModalManager = () => {
  const dispatch = useDispatch();
  const { activeModal, closable } = useSelector((state) => state.modal);

  function handleClose() {
    dispatch(closeModal());
  }

  useEffect(() => {
    if (activeModal !== null) document.body.style.overflow = "hidden";
    else
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 500);
  }, [activeModal]);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleBgClick = (event) => {
    // event.preventDefault()
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <Modal open={Boolean(activeModal)} onClose={() => handleClose(true)}>
      <div className={`${styles["modal-wrapper"]} `}>
        <main>
          {activeModal === "filter" && <Filter />}
          {activeModal === "RescheduleAppointment" && <RescheduleAppointment />}
          {activeModal === "CancelAppointment" && <CancelAppointment/>}
          {activeModal === "WriteReview" && <WriteReview/>}


          {/* Modal Close Icon */}
          {closable && (
            <img
              src={cross}
              alt="close"
              className={styles["modal-close-icon"]}
              onClick={handleClose}
            />
          )}
        </main>
      </div>
    </Modal>
  );
};

export default ModalManager;
