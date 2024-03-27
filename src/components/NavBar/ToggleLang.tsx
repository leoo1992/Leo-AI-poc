import BRflag from "../Icons/BRflag";
import USAflag from "../Icons/USAflag";

export default function ToggleLang({ GPT }) {

    const handleChangeLang = (selectedLang) => {
        GPT.handleChangeLang(selectedLang);
    }

    return (
        <div className="flex items-stretch">
            <div className="dropdown dropdown-bottom">
                <button
                    tabIndex={0}
                    role="button"
                    className="btn btn-circle animate-pulse border border-black hover:border-gray-300 hover:animate-none"
                >
                    {GPT.lang.recognitionInstance === 'pt-BR' ?
                        (
                            <BRflag />
                        ) : (
                            <USAflag />
                        )}
                </button>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] p-2 m-0 mr-2 shadow-lg hover:shadow-xl bg-base-300 rounded-box w-26 border-2 border-accent"
                >
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="btn btn-sm btn-block btn-ghost justify-center p-1"
                            aria-label="PT"
                            value={GPT.PT}
                            onChange={() => handleChangeLang(GPT.PT)}
                        />
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="theme-dropdown"
                            className="btn btn-sm btn-block btn-ghost justify-center p-1"
                            aria-label="EN"
                            value={GPT.EN}
                            onChange={() => handleChangeLang(GPT.EN)}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

