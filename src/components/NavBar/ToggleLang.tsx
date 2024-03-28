import { useState } from "react";
import BRflag from "../Icons/BRflag";
import USAflag from "../Icons/USAflag";

export default function ToggleLang({ GPT }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleChangeLang = (selectedLang) => {
        GPT.handleChangeLang(selectedLang);
        setDropdownOpen(false);
    }

    return (
        <div id='lang-dropdown-3' className="tooltip tooltip-primary tooltip-bottom" data-tip={GPT.lang.langTooltip}>
            <div id='lang-dropdown-2' className="flex mr-1 justify-center align-middle content-center items-center self-center">
                <div id='lang-dropdown-1' className="dropdown dropdown-bottom flex justify-center align-middle content-center items-center self-center">
                    <button
                        id="lang-dropdown"
                        tabIndex={0}
                        role="button"
                        className="btn btn-circle animate-pulse border border-black hover:border-gray-300 hover:animate-none"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        {GPT.lang.recognitionInstance === 'pt-BR' ?
                            (
                                <BRflag />
                            ) : (
                                <USAflag />
                            )}
                    </button>
                    {dropdownOpen && (
                        <ul
                            id="lang-dropdown0"
                            tabIndex={0}
                            className="dropdown-content z-[1] p-2 m-0 mr-2 shadow-lg hover:shadow-xl bg-base-300 rounded-box w-26 border-2 border-accent"
                        >
                            <li>
                                <button
                                    name="lang-dropdown1"
                                    className="btn btn-sm btn-primary btn-ghost justify-center p-1"
                                    aria-label="PT"
                                    onClick={() => handleChangeLang(GPT.PT)}
                                >PT</button>
                            </li>
                            <li>
                                <button
                                    name="lang-dropdown2"
                                    className="btn btn-sm btn-primary btn-ghost justify-center p-1"
                                    aria-label="EN"
                                    onClick={() => handleChangeLang(GPT.EN)}
                                >EN</button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

