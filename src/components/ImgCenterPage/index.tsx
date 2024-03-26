import LogoCenterPage from "../Icons/LogoCenterPage";
import TextCenterPage from "./TextCenterPage";

export default function ImgCenterPage({ GPT }) {
  return (
    <>
      {!GPT.answer && !GPT.isMobileLandscape ? (
        <div className="flex flex-col justify-center align-middle absolute items-center opacity-30 z-0 w-full mt-40">
          <LogoCenterPage />
          <TextCenterPage />
        </div>
      ) : null}
    </>
  );
}
