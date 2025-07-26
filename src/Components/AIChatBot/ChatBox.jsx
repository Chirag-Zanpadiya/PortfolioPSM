import { useContext } from "react";
import ai from "/assets/new.jpg";
import { FaMicrophone } from "react-icons/fa6";
import { datacontext } from "../../context/UserContext";
import speakimg from "/assets/speak.gif";
import aivoice from "/assets/aiVoice.gif";

const ChatBox = () => {
  let {
    recognition,
    speaking,
    setSpeaking,
    prompt,
    response,
    setPrompt,
    setResponse,
  } = useContext(datacontext);
  // speak("hanji toh mera nam chirag hai aapki kya help kara sakata hu")
  return (
    <>
      <div className="fullscreen-container h-[100vh]">
        <img src={ai} alt="" id="shifra" />
        <span className="spantext">
          I&apos;m Chirag Zanpadiya Your Virtual Assisant
        </span>
        {!speaking ? (
          <button
            className="text-2xl w-[180px] h-[40px] flex items-center justify-center gap-[20px] rounded-2xl bg-[rgb(79 ,224,234)] shadow-[2px_2px_100px_rgb(79,224,234)] cursor-pointer"
            onClick={() => {
              setPrompt("Listening...");
              setSpeaking(true);
              setResponse(false);
              recognition.start();
            }}
          >
            Click Here <FaMicrophone />
          </button>
        ) : (
          <div className="flex items-center justify-center flex-col">
            <p className="text-white px-14 text-center">{prompt}</p>
            {!response ? (
              <img
                src={speakimg}
                className="w-[220px] h-[220px]"
                alt="speakimg"
              />
            ) : (
              <img
                src={aivoice}
                className="w-[220px] h-[220px]"
                alt="aivoice"
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBox;
