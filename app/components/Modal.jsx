const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;