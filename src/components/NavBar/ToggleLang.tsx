import { useState } from "react";
import BRflag from "../Icons/BRflag";
import USAflag from "../Icons/USAflag";

export default function ToggleLang({ GPT }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const change = (language) => { GPT.handleChangeLang(language); setDropdownOpen(false); };
  return (
    <div className="tooltip tooltip-primary tooltip-bottom" data-tip={GPT.lang.langTooltip}>
      <div className="dropdown dropdown-end">
        <button type="button" className="btn btn-circle btn-ghost border border-base-300" aria-label={GPT.lang.langTooltip} onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span className="w-8 h-8">{GPT.lang.recognitionInstance === "pt-BR" ? <BRflag /> : <USAflag />}</span>
        </button>
        {dropdownOpen && (
          <ul className="dropdown-content z-[50] mt-2 p-2 shadow-xl bg-base-200 rounded-box w-44 border border-base-300">
            <li><button type="button" className="btn btn-sm btn-ghost btn-block justify-start gap-2" onClick={() => change(GPT.PT)}><span className="w-7 h-7"><BRflag /></span> Português</button></li>
            <li><button type="button" className="btn btn-sm btn-ghost btn-block justify-start gap-2" onClick={() => change(GPT.EN)}><span className="w-7 h-7"><USAflag /></span> English</button></li>
          </ul>
        )}
      </div>
    </div>
  );
}
