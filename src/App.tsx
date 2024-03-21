import AvatarChat from "./components/Icons/AvatarChat";
import SendIcon from "./components/Icons/SendIcon";
import ImgCenterPage from "./components/ImgCenterPage";
import NavBar from "./components/NavBar";
import "./styles/Globals/App.css";
import { config } from 'dotenv';
config();

function App() {

  console.log('LEO_GPT_KEY:', config);

  return (
    <div className="pt-3 px-3 pb-5 h-screen flex flex-col justify-between">
      <NavBar />
      <ImgCenterPage />
      <div className="flex justify-end align-bottom items-end content-end w-12/12 h-4/6 chat chat-end">
        <div className="chat-bubble shadow-lg hover:shadow-xl mr-2 text-accent">
          You underestimate my power!
        </div>
        <div className="chat-image avatar border-2 border-primary rounded-full p-2 bg-accent text-black shadow-lg hover:shadow-xl">
          <div className="animate-pulse">
            <AvatarChat />
          </div>
        </div>
      </div>
      <div
        className="App flex justify-center align-middle items-center 
        w-full flex-col gap-5 z-0 self-center content-center"
      >
        <label
          className="input input-bordered flex items-center justify-center self-center 
       content-center gap-2 w-full lg:w-8/12 mb-2 shadow-lg hover:shadow-xl glass text-accent"
        >
          <input type="text" className="grow" placeholder="Pergunte algo..." />
          <button className="btn btn-square btn-secondary btn-sm shadow-lg hover:shadow-xl font-extrabold">
            <div className="animate-bounce mt-1">
              <SendIcon />
            </div>
          </button>
        </label>
      </div>
    </div>
  );
}

export default App;
