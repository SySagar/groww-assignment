import React, { useEffect } from "react";
import style from "./address.module.css";
import Modal from "../Standard/Modal/Modal";
import { useState } from "react";
import { useAddressStore } from "@/app/store/useAddressStore";
import { RectangleSkeleton } from "../Standard/Skeleton/Skeleton";
import { address1, address2, address3 } from "@/app/lib/constants";
import { useLoadingStore } from "@/app/store/loadingStore";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, setAddress } = useAddressStore();
  const [selected, setSelected] = React.useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    setAddress(address3);
  }, []);

  const handleAddressChange = (e) => {
    const addressValue = e.target.id;
    setSelected(addressValue);
    setAddress(addressValue);
    closeModal();
  };

  return (
    <div className={style.container}>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className={style.deliveryLocation}>Custom Delivery Location</p>
        <div
          className={style.locationOptions}
          onClick={handleAddressChange}
          id={address1}
        >
          <input
            className={style.radioInput}
            type="radio"
            value={address1}
            name="addressOption"
            checked={
              selected === address1 || (!selected && address === address1)
            }
          />
          <p id={address1} className={style.addressName}>
            {address1}
          </p>
        </div>
        <div
          className={style.locationOptions}
          onClick={handleAddressChange}
          id={address2}
        >
          <input
            className={style.radioInput}
            type="radio"
            value={address2}
            name="addressOption"
            checked={
              selected === address2 || (!selected && address === address2)
            }
          />
          <p id={address2} className={style.addressName}>
            {address2}
          </p>
        </div>
        <div
          className={style.locationOptions}
          onClick={handleAddressChange}
          id={address3}
        >
          <input
            className={style.radioInput}
            type="radio"
            value={address3}
            name="addressOption"
            checked={
              selected === address3 || (!selected && address === address3)
            }
          />
          <p id={address3} className={style.addressName}>
            {address3}
          </p>
        </div>
      </Modal>
      <div className={style.addressBody}>
        <div className={style.info}>
          <p className={style.main}>Deliver to: Soumya Sagar Samal</p>
          <p className={style.sub}>
            {address ? address : "Select delivery location"}
          </p>
        </div>

        <button onClick={openModal} className={style.button}>
          change
        </button>
      </div>
    </div>
  );
}
