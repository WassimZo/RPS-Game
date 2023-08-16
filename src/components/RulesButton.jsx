import { useState } from "react";
import Rules from "./Rules";
import { createPortal } from "react-dom";

export default function RulesButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="border border-slate-50 text-lg tracking-widest bg-transparent text-slate-50 px-10 py-1 mt-auto mb-8 rounded-lg hover:bg-slate-300"
        onClick={() => setShowModal(!showModal)}
      >
        RULES
      </button>
      {showModal &&
        createPortal(
          <Rules
            onClose={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </>
  );
}
