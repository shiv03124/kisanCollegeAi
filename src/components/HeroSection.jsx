import { useState } from "react";
import {
  FaCloudSun,
  FaMoneyBillWave,
  FaSeedling,
  FaBug,
  FaChevronRight,
  FaRobot,
  FaArrowLeft,
  FaPaperPlane,
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
    icon: <FaCloudSun className="text-4xl text-yellow-500" />,
    label: "Weather\nForecast",
    questions: [
      "1 acre banana borewell hai",
      "Will it rain in the next 48 hours?",
      "What is the expected temperature range this week?",
      "Is there any extreme weather warning?",
      "What is the humidity level?",
    ],
  },
  {
    id: "market",
    icon: <FaMoneyBillWave className="text-4xl text-orange-500" />,
    label: "Market\nPrices",
    questions: [
      "What is today's onion market price?",
      "Which mandi gives best soybean price?",
      "What are tomato prices this week?",
      "Should I sell cotton now or wait?",
      "What is the MSP for wheat?",
    ],
  },
  {
    id: "crop",
    icon: <FaSeedling className="text-4xl text-green-500" />,
    label: "Crop\nAdvice",
    questions: [
      "1 acre banana borewell hai",
      "2 acre drip irrigation banana hai",
      "Sugarcane ke liye irrigation design chahiye",
      "Mere farm ke liye best irrigation system batao",
      "Black soil ke liye irrigation planning chahiye",
    ],
  },
  {
    id: "pest",
    icon: <FaBug className="text-4xl text-emerald-500" />,
    label: "Pest\nControl",
    questions: [
      "How to control whiteflies in cotton?",
      "Best pesticide for stem borer?",
      "Why are my leaves turning yellow?",
      "How to prevent fungal infection in crops?",
      "Organic pest control methods?",
    ],
  },
];

const HeroSection = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [showChat, setShowChat] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const activeTab = tabs.find((tab) => tab.id === selectedTab);

  // 🚀 AI API CALL
  const sendToAI = async (question) => {
    if (!question.trim()) return;

    // ✅ OPEN CHAT UI
    setShowChat(true);

    // ✅ ADD USER MESSAGE
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
      // ✅ SEND FULL CONVERSATION
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

            // ✅ CONTINUE CONVERSATION
            messages: updatedMessages.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
          }),
        }
      );

      const data = await response.json();

      console.log("AI RESPONSE =>", data);

      const aiReply =
        data?.content?.[0]?.text ||
        "No response received from AI";

      // ✅ ADD AI MESSAGE
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

  // ✅ SEND FROM INPUT
  const handleSend = () => {
    sendToAI(inputValue);
  };

  return (
    <section className="min-h-screen bg-[#f6f7f8] py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            IRRIGO AI
          </h1>

          <p className="text-gray-500 text-lg">
            Smart Irrigation Planning Assistant
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedTab(tab.id);
                setShowChat(false);
              }}
              className={`
                w-44 h-44
                rounded-3xl
                border
                transition-all duration-300
                flex flex-col items-center justify-center
                gap-5
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                
                ${
                  selectedTab === tab.id
                    ? "bg-green-50 border-green-500"
                    : "bg-white border-gray-200"
                }
              `}
            >
              {tab.icon}

              <span className="text-xl font-semibold text-gray-700 whitespace-pre-line text-center leading-8">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* QUESTIONS */}
        {activeTab && !showChat && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-10">

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🌿</span>

              <h2 className="text-3xl font-bold text-gray-800">
                Popular Questions
              </h2>
            </div>

            <div className="space-y-4">
              {activeTab.questions.map((question, i) => (
                <button
                  key={i}
                  onClick={() => sendToAI(question)}
                  className="
                    w-full
                    flex items-center
                    gap-4
                    border border-gray-200
                    rounded-2xl
                    px-6 py-5
                    text-left
                    bg-white
                    hover:bg-green-50
                    hover:border-green-400
                    transition-all duration-200
                  "
                >
                  <FaChevronRight className="text-green-500 text-sm" />

                  <span className="text-lg text-gray-700">
                    {question}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* CHAT UI */}
        {showChat && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-green-50">

              <div className="flex items-center gap-3">
                <FaRobot className="text-green-600 text-xl" />

                <h3 className="font-bold text-lg text-gray-800">
                  IRRIGO AI Chat
                </h3>
              </div>

              {/* BACK BUTTON */}
              <button
                onClick={() => setShowChat(false)}
                className="
                  flex items-center gap-2
                  text-sm font-medium
                  text-green-700
                  hover:text-green-900
                "
              >
                <FaArrowLeft />
                Back
              </button>
            </div>

            {/* MESSAGES */}
            <div className="p-6 flex flex-col gap-4 h-[500px] overflow-y-auto">

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
                      max-w-[80%]
                      px-5
                      py-4
                      rounded-2xl
                      text-[15px]
                      leading-7
                      whitespace-pre-wrap
                      shadow-sm
                      
                      ${
                        msg.role === "user"
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-sm text-gray-500">
                  IRRIGO AI is thinking...
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="border-t border-gray-100 p-4 bg-white">
              <div className="flex items-center gap-3">

                <input
                  type="text"
                  placeholder="Type your message..."
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
                    border
                    border-gray-300
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-green-500
                  "
                />

                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    flex
                    items-center
                    justify-center
                    transition-all
                    disabled:opacity-50
                  "
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;