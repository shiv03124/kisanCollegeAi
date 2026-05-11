
import { useEffect, useRef, useState } from "react";

import {
  FaPaperPlane,
  FaSeedling,
  FaTint,
  FaRobot,
  FaCloudSun,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

const SYSTEM_PROMPT = `
You are IRRIGO AI — India's first specialized Irrigation Design Intelligence.

Rules:
- Ask only 1-2 questions
- Never calculate before confirmation
- Always ask intercrop
- Reply in user's language
`;

const quickQuestions = [
  "1 acre banana borewell hai",
  "Drip Design Chahiye",
  "Subsidy Jaankari",
  "2 acre pomegranate farm",
];

const whyChooseUs = [
  {
    icon: <FaTint />,
    title: "Smart Irrigation Planning",
    desc: "Accurate AI-based irrigation layouts for every crop.",
  },
  {
    icon: <FaRobot />,
    title: "AI Farming Assistant",
    desc: "Instant farming guidance in local Indian languages.",
  },
  {
    icon: <FaCloudSun />,
    title: "Weather Based Suggestions",
    desc: "Get smarter irrigation decisions using climate insights.",
  },
];

const features = [
  "Drip Irrigation Design",
  "Subsidy Guidance",
  "Crop Water Calculation",
  "Pipe Layout Planning",
  "Multilingual AI Chat",
  "Smart Farming Analytics",
];

const team = [
  {
    name: "Shivkumar",
    role: "Frontend Developer",
  },
  {
    name: "Agriculture Expert",
    role: "Irrigation Specialist",
  },
  {
    name: "AI Engineer",
    role: "Machine Learning",
  },
];

const translations = {
  english: {
    title: "Hello 👋",
    subtitle:
      "Share your crop and land details to get a complete irrigation design.",

    expert: "Maharashtra Farming Expert",

    thinking: "IRRIGO AI is thinking...",

    placeholder: "Ask your question...",

    quickQuestions: [
      "1 acre banana with borewell",
      "Need drip irrigation design",
      "Subsidy information",
      "2 acre pomegranate farm",
    ],
  },

  hindi: {
    title: "नमस्ते 🙏",

    subtitle:
      "अपनी फसल और जमीन की जानकारी दीजिए, मैं आपका पूरा सिंचाई डिज़ाइन तैयार करूंगा।",

    expert: "महाराष्ट्र कृषि विशेषज्ञ",

    thinking: "IRRIGO AI सोच रहा है...",

    placeholder: "अपना सवाल लिखें...",

    quickQuestions: [
      "1 एकड़ केला बोरवेल है",
      "ड्रिप डिज़ाइन चाहिए",
      "सब्सिडी जानकारी",
      "2 एकड़ अनार फार्म",
    ],
  },

  marathi: {
    title: "नमस्कार 🙏",

    subtitle:
      "तुमच्या पिकाची आणि जमिनीची माहिती द्या, मी तुमच्यासाठी संपूर्ण सिंचन डिझाइन तयार करेन.",

    expert: "महाराष्ट्र शेती तज्ञ",

    thinking: "IRRIGO AI विचार करत आहे...",

    placeholder: "तुमचा प्रश्न लिहा...",

    quickQuestions: [
      "1 एकर केळी बोअरवेल आहे",
      "ड्रिप डिझाइन पाहिजे",
      "अनुदान माहिती",
      "2 एकर डाळिंब शेती",
    ],
  },
};
const HeroSection = ({ language }) => {
  const [messages, setMessages] = useState([]);
 
  const [loading, setLoading] = useState(false);
const t = translations[language];
  const [inputValue, setInputValue] =
    useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);
  

  const sendToAI = async (question) => {
    if (!question.trim()) return;

    if (loading) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
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

            messages: updatedMessages.map(
              (msg) => ({
                role: msg.role,
                content: msg.content,
              })
            ),
          }),
        }
      );

      const data = await response.json();

      const aiReply =
        data?.content?.[0]?.text ||
        "AI response nahi mila.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiReply,
        },
      ]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "AI server se connect nahi hua.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    sendToAI(inputValue);
  };
const que=t.quickQuestions
  return (
    <>
      {/* HERO CHAT SECTION */}
      <section id="home"
        className="
          bg-[#f4f5f7]

          min-h-[calc(100vh-82px)]

          px-3
          md:px-5

          py-4
        "
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="
              bg-white

              min-h-[85vh]

              rounded-[30px]

              border
              border-gray-200

              shadow-xl

              flex
              flex-col

              overflow-hidden
            "
          >
            {/* TOP */}
            <div
              className="
                h-[80px]

                border-b
                border-gray-100

                px-6

                flex
                items-center
                justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12
                    h-12

                    rounded-full

                    bg-[#006400]

                    flex
                    items-center
                    justify-center

                    text-white
                    text-xl
                  "
                >
                  🌿
                </div>

                <div >
                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-[#003b0b]
                    "
                  >
                    IRRIGO AI
                  </h2>

                  <p className="text-sm text-gray-500">
                    Irrigation Design Intelligence
                  </p>
                </div>
              </div>

              <div
                className="
                  hidden
                  md:flex

                  items-center
                  gap-2

                  bg-green-50

                  px-4
                  py-2

                  rounded-full

                  text-[#006400]
                  text-sm
                  font-semibold
                "
              >
                <FaSeedling />
                Maharashtra Farming Expert
              </div>
            </div>

            {/* CHAT */}
            <div
              className="
                flex-1

                overflow-y-auto

                px-4
                md:px-7

                py-6
              "
            >
              {messages.length === 0 ? (
                <div
                  className="
                    h-full

                    flex
                    flex-col
                    items-center
                    justify-center

                    text-center
                  "
                >
                  <div
                    className="
                      w-28
                      h-28

                      rounded-full

                      bg-[#006400]

                      flex
                      items-center
                      justify-center

                      text-5xl

                      shadow-2xl

                      mb-6
                    "
                  >
                    🌿
                  </div>

                  <h1
                    className="
                      text-5xl
                      lg:text-6xl

                      font-bold

                      text-[#003b0b]

                      mb-5
                    "
                  >
                    {t.title}
                  </h1>

                  <p
                    className="
                      text-gray-600

                      text-lg
                      md:text-xl

                      leading-8

                      max-w-3xl

                      mb-10
                    "
                  >
                    {t.subtitle}
                  </p>

                  {/* QUICK BUTTONS */}
                  <div
                    className="
                      flex
                      flex-wrap
                      justify-center

                      gap-3

                      max-w-4xl
                    "
                  >
                    {que.map(
                      (question, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            sendToAI(question)
                          }
                          className="
                            px-6
                            py-3

                            rounded-full

                            border
                            border-gray-300

                            bg-white

                            text-[#006400]

                            font-semibold

                            hover:bg-green-50
                            hover:border-green-500

                            transition-all
                          "
                        >
                          {question}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
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
                        className={`max-w-[80%] px-5 py-4 rounded-[22px] leading-7 whitespace-pre-wrap shadow-sm ${
                          msg.role === "user"
                            ? "bg-[#006400] text-white rounded-br-md"
                            : "bg-[#f4f5f7] text-gray-800 border border-gray-200 rounded-bl-md"
                        }`}
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

                          px-5
                          py-4

                          rounded-[22px]

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

            {/* INPUT */}
            <div
              className="
                h-[90px]

                border-t
                border-gray-100

                px-4
                md:px-6

                bg-white

                flex
                items-center
              "
            >
              <div className="flex items-center gap-3 w-full">
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

                    h-14

                    rounded-full

                    bg-[#f4f5f7]

                    border
                    border-gray-300

                    px-5

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

                    rounded-full

                    bg-[#006400]

                    hover:bg-[#004d00]

                    text-white

                    flex
                    items-center
                    justify-center

                    shadow-lg

                    transition-all
                  "
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="whyus"
        className="
          py-24

          px-4
          md:px-6

          bg-white
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="
                text-4xl
                md:text-5xl

                font-bold

                text-[#003b0b]

                mb-5
              "
            >
              Why Choose IRRIGO AI?
            </h2>

            <p
              className="
                text-gray-600

                max-w-2xl
                mx-auto

                text-lg
              "
            >
              Modern AI-powered irrigation guidance
              designed specially for Indian farmers.
            </p>
          </div>

          <div
            className="
              grid
              md:grid-cols-3

              gap-8
            "
          >
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#f8faf8]

                  border
                  border-gray-200

                  rounded-3xl

                  p-8

                  hover:shadow-xl
                  transition-all
                "
              >
                <div
                  className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-[#006400]

                    text-white
                    text-2xl

                    flex
                    items-center
                    justify-center

                    mb-6
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold

                    mb-4

                    text-[#003b0b]
                  "
                >
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="
          py-24

          bg-[#f4f5f7]

          px-4
          md:px-6
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="
                text-4xl
                md:text-5xl

                font-bold

                text-[#003b0b]

                mb-5
              "
            >
              Powerful Features
            </h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3

              gap-6
            "
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="
                  bg-white

                  rounded-2xl

                  p-6

                  border
                  border-gray-200

                  flex
                  items-center
                  gap-4

                  hover:shadow-lg
                  transition-all
                "
              >
                <FaCheckCircle
                  className="text-[#006400]"
                />

                <span className="font-semibold">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="
          py-24

          bg-white

          px-4
          md:px-6
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="
                text-4xl
                md:text-5xl

                font-bold

                text-[#003b0b]

                mb-5
              "
            >
              Meet Our Team
            </h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-3

              gap-8
            "
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="
                  bg-[#f8faf8]

                  rounded-3xl

                  p-8

                  border
                  border-gray-200

                  text-center

                  hover:shadow-xl
                  transition-all
                "
              >
                <div
                  className="
                    w-24
                    h-24

                    rounded-full

                    bg-[#006400]

                    mx-auto

                    flex
                    items-center
                    justify-center

                    text-white
                    text-3xl

                    mb-6
                  "
                >
                  <FaUsers />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold

                    mb-2

                    text-[#003b0b]
                  "
                >
                  {member.name}
                </h3>

                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section
        className="
          py-24

          bg-[#003b0b]

          text-white

          text-center

          px-4
        "
      >
        <h2
          className="
            text-4xl
            md:text-5xl

            font-bold

            mb-6
          "
        >
          Start Smart Farming Today
        </h2>

        <p
          className="
            text-lg

            text-green-100

            max-w-2xl
            mx-auto

            mb-10
          "
        >
          Experience AI-powered irrigation
          planning built specially for farmers.
        </p>

        <button
          className="
            px-8
            py-4

            rounded-full

            bg-white

            text-[#006400]

            font-bold

            hover:scale-105

            transition-all
          "
        >
          Get Started
        </button>
      </section>
    </>
  );
};

export default HeroSection; 