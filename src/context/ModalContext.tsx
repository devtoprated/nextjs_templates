"use client";
import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  currentModal: string;
  openModal: (value: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

type props = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<props> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (value: string) => {
    setIsOpen(true);
    setCurrentModal(value)
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, currentModal }}>
      {children}
    </ModalContext.Provider>
  );
};
