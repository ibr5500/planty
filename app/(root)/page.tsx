"use client"

import Modal from "@/components/ui/modal"
import { useStoreModal } from "../hooks/use-store-modal"
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useStoreModal(state => state.onOpen);
  const isOpen = useStoreModal(state => state.isOpen);

  useEffect(() => {
    if (!isOpen) onOpen();
  }, [isOpen, onOpen]);

  return (
    <div className="flex flex-col w-fit justify-center mx-auto my-16">
      Root pg
    </div>
  )
}

export default SetupPage
