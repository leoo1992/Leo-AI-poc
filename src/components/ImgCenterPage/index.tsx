import LogoCenterPage from "../Icons/LogoCenterPage";

export default function index() {
  return (
    <div className="pl-5 flex flex-col justify-center align-middle absolute items-center opacity-30 z-0 w-11/12 mt-40">
      <div className="rounded-full border-2 border-gray-500 p-2 animate-pulse hover:animate-spin shadow-xl">
        <LogoCenterPage />
      </div>
      <h1 className="text-center text-xl font-extrabold pt-5 animate-pulse">
        Como posso te ajudar ? 
      </h1>
    </div>
  );
}
