// components/FAQContact.tsx
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQContact: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I register for the upcoming conference?",
      answer:
        "We announce registration windows and drop registration forms directly inside our Telegram Channel. Join our Telegram to stay notified!",
    },
    {
      question: "Is AISMUN suitable for first-time delegates?",
      answer:
        "Absolutely! We offer beginner-friendly committees (like SOCHUM) and our MUN Guide page provides everything you need to prepare.",
    },
    {
      question: "Where will the next conference take place?",
      answer:
        "Because our venue shifts based on conference scale, venue locations and parking/travel instructions are released on Telegram 2–3 weeks prior to each event.",
    },
    {
      question: "How are awards determined?",
      answer:
        "Chairs evaluate delegates based on policy accuracy, leadership in unmoderated caucuses, resolution drafting quality, and adherence to parliamentary procedure.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "Registration fees vary by conference. Exact amounts and early bird deadlines are announced exclusively on our Telegram channel.",
    },
    {
      question: "Can I participate as an individual delegate?",
      answer:
        "Yes, individual delegates are welcome. Country assignments are made based on committee preferences and availability.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTelegramRedirect = () => {
    window.open("https://t.me/your_aismun_channel", "_blank");
  };

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1280px] mx-auto px-[20px] md:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="font-display-lg text-[40px] md:text-[56px] text-primary mb-6">
              FAQ
            </h2>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-12">
              Find answers to the most common questions about AISMUN.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-outline-variant/30 rounded-xl overflow-hidden hover:border-outline-variant transition-colors"
                >
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-surface-variant/30 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-body-md text-[16px] font-medium text-primary">
                      {faq.question}
                    </span>
                    <span
                      className={`text-ambassador-gold transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="font-body-md text-[16px] text-on-surface-variant">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:pl-8">
            <div className="bg-off-white rounded-2xl p-8 md:p-12 editorial-shadow sticky top-32">
              <span className="font-label-caps text-[12px] text-ambassador-gold mb-4 block uppercase tracking-widest">
                Connect With Us
              </span>
              <h3 className="font-display-lg text-[32px] text-primary mb-6">
                Contact Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30">
                  <div className="w-12 h-12 bg-ambassador-gold/10 rounded-full flex items-center justify-center text-2xl">
                    📱
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                      Telegram
                    </p>
                    <button
                      onClick={handleTelegramRedirect}
                      className="font-body-md text-[16px] text-primary hover:text-ambassador-gold transition-colors"
                    >
                      t.me/your_aismun_channel
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30">
                  <div className="w-12 h-12 bg-ambassador-gold/10 rounded-full flex items-center justify-center text-2xl">
                    ✉
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-body-md text-[16px] text-primary">
                      contact@aismun.org
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-outline-variant/30">
                  <div className="w-12 h-12 bg-ambassador-gold/10 rounded-full flex items-center justify-center text-2xl">
                    📷
                  </div>
                  <div>
                    <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                      Instagram
                    </p>
                    <p className="font-body-md text-[16px] text-primary">
                      @aismun_official
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <button
                  onClick={handleTelegramRedirect}
                  className="w-full px-8 py-4 bg-ambassador-gold text-white font-label-caps text-[12px] uppercase tracking-widest hover:bg-deep-navy transition-all rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Join Telegram Channel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContact;
