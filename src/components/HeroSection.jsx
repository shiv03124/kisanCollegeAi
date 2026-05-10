// HeroSection.jsx

import { useEffect, useRef, useState } from "react";

import {
  FaPaperPlane,
  FaSeedling,
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

const HeroSection = () => {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] =
    useState("");

  const messagesEndRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // SEND TO AI
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

  return (
    <section
      className="
        bg-[#f4f5f7]

        h-[calc(100dvh-72px)]
        md:h-[calc(100dvh-78px)]
        lg:h-[calc(100vh-82px)]

        overflow-hidden

        px-3
        md:px-5

        py-3
        md:py-4
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          h-full
        "
      >
        <div
          className="
            bg-white

            h-full

            rounded-[24px]
            md:rounded-[30px]

            border
            border-gray-200

            shadow-xl

            flex
            flex-col

            overflow-hidden
          "
        >
          {/* TOP HEADER */}
          <div
            className="
              h-[72px]
              md:h-[80px]

              border-b
              border-gray-100

              px-5
              md:px-7

              flex
              items-center
              justify-between

              shrink-0
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

              <div>
                <h2
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-[#003b0b]
                  "
                >
                  IRRIGO AI
                </h2>

                <p
                  className="
                    text-xs
                    md:text-sm
                    text-gray-500
                  "
                >
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

          {/* CHAT BODY */}
          <div
            className="
              flex-1

              overflow-y-auto

              px-4
              md:px-7

              py-4
              md:py-6
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
                {/* ICON */}
                <div
                  className="
                    w-24
                    h-24

                    md:w-28
                    md:h-28

                    rounded-full

                    bg-[#006400]

                    flex
                    items-center
                    justify-center

                    text-4xl
                    md:text-5xl

                    shadow-2xl

                    mb-6
                  "
                >
                  🌿
                </div>

                {/* TITLE */}
                <h1
                  className="
                    text-4xl
                    md:text-5xl
                    lg:text-6xl

                    font-bold

                    text-[#003b0b]

                    mb-4
                  "
                >
                  Namaste 🙏
                </h1>

                {/* SUBTITLE */}
                <p
                  className="
                    text-gray-600

                    text-base
                    md:text-xl

                    leading-7
                    md:leading-9

                    max-w-3xl

                    mb-8
                  "
                >
                  Apni fasal aur zameen ki details
                  dijiye, main aapka poora irrigation
                  design tayar karunga
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
                  {quickQuestions.map(
                    (question, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          sendToAI(question)
                        }
                        className="
                          px-5
                          md:px-6

                          py-3

                          rounded-full

                          border
                          border-gray-300

                          bg-white

                          text-[#006400]

                          text-sm
                          md:text-base

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
                      className={`
                        max-w-[85%]
                        md:max-w-[75%]

                        px-5
                        py-4

                        rounded-[22px]

                        text-[15px]
                        md:text-[16px]

                        leading-7

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
              h-[82px]
              md:h-[92px]

              border-t
              border-gray-100

              px-4
              md:px-6

              bg-white

              flex
              items-center

              shrink-0
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

                  h-12
                  md:h-14

                  rounded-full

                  bg-[#f4f5f7]

                  border
                  border-gray-300

                  px-5

                  text-sm
                  md:text-base

                  outline-none

                  focus:border-green-500
                "
              />

              <button
                onClick={handleSend}
                disabled={loading}
                className="
                  w-12
                  h-12

                  md:w-14
                  md:h-14

                  rounded-full

                  bg-[#006400]

                  hover:bg-[#004d00]

                  text-white

                  flex
                  items-center
                  justify-center

                  shadow-lg

                  transition-all

                  disabled:opacity-50

                  shrink-0
                "
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;