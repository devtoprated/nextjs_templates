import React from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal } from '@/context/ModalContext';

type props = {
  children: React.ReactNode;
  modalId: string;
}

const GlobalModal: React.FC<props> = ({ children, modalId }) => {
  const { isOpen, closeModal, currentModal } = useModal();

  if (!isOpen) return null;
  return (
    <>
      {modalId === currentModal ? <Dialog open={isOpen} onOpenChange={closeModal} >
        <DialogContent>
          {children}
        </DialogContent>
      </Dialog> : null}
    </>
  )
}

export default GlobalModal