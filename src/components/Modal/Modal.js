import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal-root");

export function Modal({ children, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [close]
  );

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) setIsOpen(false);
  }, []);

  const handleClose = useCallback((event) => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    if (isOpen) document.addEventListener("onClick", handleClose, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
      document.removeEventListener("onClick", handleClose, false);
    };
  }, [handleEscape, handleClose, isOpen]);

  return createPortal(
    isOpen ? (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title h4">Edit chapter </div>
            <button type="button" className="close" onClick={handleClose}>
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);
