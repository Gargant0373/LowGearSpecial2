import { useState } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState<string | null>(null);
    const [modalContent, setModalContent] = useState<string | null>(null);

    const openModal = (title: string, content: string) => {
        setModalTitle(title);
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setModalTitle(null);
        setModalContent(null);
        setIsOpen(false);
    };

    return {
        isOpen,
        modalTitle,
        modalContent,
        openModal,
        closeModal,
    };
}
