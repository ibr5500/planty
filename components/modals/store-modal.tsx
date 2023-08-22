"use client"

import { useStoreModal } from "@/app/hooks/use-store-modal"
import Modal from "../ui/modal"

const StoreModal = () => {
  const handelModal = useStoreModal();

  return (
    <Modal
      title="Create a Store"
      description="Add a new Store"
      isOpen={handelModal.isOpen}
      onClose={handelModal.onClose}
    >
      Future Create Store Form
    </Modal>
  )
}

export default StoreModal
