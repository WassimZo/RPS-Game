import rulesImage from "../assets/image-rules-bonus.svg";
import closeIcon from "../assets/icon-close.svg";

export default function Rules({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-slate-900/60 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-20 flex flex-col items-center justify-between bg-slate-200 text-slate-900 rounded p-6 h-full w-full"
      >
        <h1 className="font-bold text-5xl tracking-wide mt-20">RULES</h1>
        <img src={rulesImage} alt="rules" className="" />
        <button className="border-none bg-transparent mb-10" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </div>
  );
}
