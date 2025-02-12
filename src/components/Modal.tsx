import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    width: 95%;
    max-width: 700px;
    text-align: left;
    max-height: 80vh;
    overflow-y: auto;

    h2 {
        margin-bottom: 15px;
        color: var(--strong-red);
    }

    p {
        line-height: 1.6;
    }

    button {
        margin-top: 20px;
        padding: 12px 24px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
            background-color: #0056b3;
        }
    }

    a {
        color: var(--strong-red);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
            color: #0000FF;
        }
    }
`;

export function Modal({
    isOpen,
    title,
    content,
    onClose,
}: {
    isOpen: boolean;
    title: string | null;
    content: string | null;
    onClose: () => void;
}) {
    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content || "" }}></div>
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalOverlay>
    );
}
