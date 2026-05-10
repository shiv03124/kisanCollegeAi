import { useEffect, useRef, useState } from "react";
import {
  FaCloudSun,
  FaMoneyBillWave,
  FaSeedling,
  FaBug,
  FaPaperPlane,
  FaRobot,
} from "react-icons/fa";

const SYSTEM_PROMPT = `
You are IRRIGO AI — India's first specialized Irrigation Design Intelligence.
Ask only 1-2 questions at a time.
Never calculate before farmer confirms all details.
Start with:
Namaste 🙏 Main aapka irrigation design banane mein help karunga.
`;

const tabs = [
  {
    id: "weather",
    icon: <FaCloudSun className="text-2xl" />,
    label: "Weather",
    questions: [
      "Will it rain in the next 48 hours?",
      "Temperature range this week?",
      "Humidity level today?",
    ],
  },

  {
    id: "market",
    icon: <FaMoneyBillWave className="text-2xl" />,
    label: "Market",
    questions: [
      "Today's onion market price?",
      "Best soybean mandi?",
      "Cotton MSP kya hai?",
    ],
  },

  {
    id: "crop",
    icon: <FaSeedling className="text-2xl" />,
    label: "Crop",
    questions: [
      "Banana Farm",
      "Drip Design Chahiye",
      "Subsidy Jaankari",
    ],
  },

  {
    id: "pest",
    icon: <FaBug className="text-2xl" />,
    label: "Pest",
    questions: [
      "Whiteflies control kaise kare?",
      "Best pesticide for stem borer?",
      "Leaves yellow kyun ho rahe hai?",
    ],
  },
];

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = useState("crop");

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef(null);

  const activeTab = tabs.find((tab) => tab.id === selectedTab);

  // ✅ AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // ✅ AI CALL
  const sendToAI = async (question) => {
    if (!question.trim()) return;

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: question,
      },
    ];

    setMessages(updatedMessages);

    setLoading(true);

    setInputValue("");

    try {
      const response = await fetch(
        "https://kisan-collegeai-backend.vercel.app/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",

            max_tokens: 2048,

            system: SYSTEM_PROMPT,

            messages: updatedMessages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          }),
        }
      );

      const data = await response.json();

      const aiReply =
        data?.content?.[0]?.text ||
        "No response received from AI";

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: aiReply,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Error connecting to AI server.",
        },
      ]);
    }

    setLoading(false);
  };

  // ✅ SEND INPUT
  const handleSend = () => {
    sendToAI(inputValue);
  };

  return (
    <section className="bg-[#f4f5f7] min-h-screen py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid items-start"   >
                  

          
          <div
            className="
              bg-white
              rounded-[30px]
              shadow-xl
              border
              border-gray-200
              h-[85vh]
              flex
              flex-col
              overflow-hidden
            "
          >
            {/* TOP HEADER */}
            {/* <div
              className="
                px-8
                py-6
                border-b
                border-gray-100
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                "
              >
                <FaRobot className="text-green-700 text-2xl" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  IRRIGO AI Assistant
                </h2>

                <p className="text-gray-500">
                  Smart irrigation planning & farming
                  support
                </p>
              </div>
            </div> */}

            {/* CHAT BODY */}
            <div className="flex-1 overflow-y-auto p-8">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div
                    className="
                      w-36
                      h-36
                      rounded-full
                      bg-[#006400]
                      flex
                      items-center
                      justify-center
                      text-6xl
                      shadow-2xl
                      mb-10
                    "
                  >
                    🌿
                  </div>

                  <h1 className="text-6xl font-bold text-[#003b0b] mb-6">
                    Namaste 🙏
                  </h1>

                  <p className="text-gray-600 text-2xl leading-10 max-w-3xl mb-14">
                    Apni fasal aur zameen ki details
                    dijiye, main aapka poora irrigation
                    design tayar karunga
                  </p>

                
                  <div className="flex flex-wrap justify-center gap-5 max-w-4xl">
                    {activeTab.questions.map(
                      (question, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            sendToAI(question)
                          }
                          className="
                            px-8
                            py-4
                            rounded-full
                            bg-white
                            border
                            border-gray-300
                            shadow-md
                            hover:shadow-lg
                            hover:bg-green-50
                            text-[#006400]
                            font-semibold
                            text-lg
                            transition-all
                          "
                        >
                          {question}
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}

              {messages.length > 0 && (
                <div className="flex flex-col gap-6">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`
                          max-w-[75%]
                          px-6
                          py-5
                          rounded-[24px]
                          text-[17px]
                          leading-8
                          whitespace-pre-wrap
                          shadow-sm
                          
                          ${
                            msg.role === "user"
                              ? "bg-[#006400] text-white rounded-br-md"
                              : "bg-[#f4f5f7] text-gray-800 border border-gray-200 rounded-bl-md"
                          }
                        `}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  
                  {loading && (
                    <div className="flex justify-start">
                      <div
                        className="
                          bg-[#f4f5f7]
                          border
                          border-gray-200
                          px-6
                          py-4
                          rounded-[24px]
                          text-gray-500
                        "
                      >
                        IRRIGO AI is thinking...
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            
            <div className="border-t border-gray-100 p-6 bg-white">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Apna sawaal likhein..."
                  value={inputValue}
                  onChange={(e) =>
                    setInputValue(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  className="
                    flex-1
                    h-16
                    rounded-full
                    bg-[#f4f5f7]
                    border
                    border-gray-300
                    px-7
                    text-lg
                    outline-none
                    focus:border-green-500
                  "
                />

                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="
                    w-16
                    h-16
                    rounded-full
                    bg-[#006400]
                    hover:bg-[#004d00]
                    text-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    shadow-lg
                    disabled:opacity-50
                  "
                >
                  <FaPaperPlane className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;