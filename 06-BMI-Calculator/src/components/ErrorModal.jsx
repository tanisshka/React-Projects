import { createPortal } from "react-dom";
import { forwardRef, useRef, useImperativeHandle } from "react";

const ErrorModal = forwardRef(function ErrorModal(props, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open(message) {
      dialog.current.showModal();
      dialog.current.querySelector("p").textContent = message;
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="error-modal">
      <p></p>
      <button onClick={() => dialog.current.close()}>OK</button>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ErrorModal;
