import { createContext, useContext, useEffect, useState } from "react";
import main from "../gemini.js";
export const datacontext = createContext();

const UserContext = ({ children }) => {
  let [speaking, setSpeaking] = useState(false);
  let [prompt, setPrompt] = useState("Listenng..");
  let [response, setResponse] = useState(false);
  async function aiResponse(prompt) {
    let text = await main(prompt);
    let newtext =
      text.split("**") ||
      text.split("*") ||
      text.replace("google", "Chirag Zanpadiya") ||
      text.replace("Google", "Chirag Zanpadiya");
    // console.log(text);
    setPrompt(newtext);
    speak(newtext);
    setResponse(true);
    setTimeout(() => {
      setSpeaking(false);
    }, 8000);
  }

  const [voices, setVoices] = useState([]);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const handleVoices = () => {
      const loadedVoices = window.speechSynthesis.getVoices();
      if (loadedVoices.length > 0) {
        setVoices(loadedVoices);
      }
    };

    window.speechSynthesis.addEventListener("voiceschanged", handleVoices);
    handleVoices();

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoices);
    };
  }, []);

  function speak(text) {
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;

    // ✅ Use English male voice for now
    const preferredVoice = voices.find(
      (voice) => voice.name === "Google UK English Male"
    );

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      // Fallback
      utterance.lang = "en-IN";
    }

    window.speechSynthesis.speak(utterance);
  }

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();

      recog.continuous = false;
      recog.lang = "en-IN";
      recog.interimResults = false;
      recog.maxAlternatives = 1;

      recog.onstart = () => {
        console.log("🎙️ Voice recognition started");
      };

      recog.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        // console.log("📥 Recognized:", transcript);
        // You can add further logic like triggering a response
        aiResponse(transcript);
        // setPrompt(transcript);
        takeCommand(transcript.toLowerCase());
      };

      recog.onerror = (err) => {
        // console.error("❌ Voice recognition error:", err);
      };

      setRecognition(recog);
    } else {
      //   console.warn("🧠 Your browser doesn't support SpeechRecognition");
    }
  }, []);

  function takeCommand(command) {
    if (command.includes("open") && command.includes("youtube")) {
      window.open("https://www.youtube.com/", "_blank");
      speak("openning Youtube...");
      setResponse(true);
      setPrompt("openning Youtube...");
      setTimeout(() => {
        setSpeaking(false);
      }, 8000);
    } else if (command.includes("open") && command.includes("google")) {
      window.open("https://www.google.com/", "_blank");
      speak("openning google...");
      setResponse(true);
      setPrompt("openning google...");
      setTimeout(() => {
        setSpeaking(false);
      }, 8000);
    } else if (command.includes("open") && command.includes("instagram")) {
      window.open("https://www.instagram.com/", "_blank");
      speak("openning instagram...");
      setResponse(true);
      setPrompt("openning instagram...");
      setTimeout(() => {
        setSpeaking(false);
      }, 8000);
    } else if (command.includes("open") && command.includes("skills")) {
      window.open("https://psmchiragportfolio.vercel.app/Skill", "_blank");
      speak("openning Chirag Skills...");
      setResponse(true);
      setPrompt("openning Chirag Skills...");
      setTimeout(() => {
        setSpeaking(false);
      }, 8000);
    } else {
      aiResponse(command);
    }
  }

  return (
    <datacontext.Provider
      value={{
        speak,
        recognition,
        speaking,
        setSpeaking,
        prompt,
        setPrompt,
        response,
        setResponse,
      }}
    >
      {children}
    </datacontext.Provider>
  );
};

export default UserContext;
