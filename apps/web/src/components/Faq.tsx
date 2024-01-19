import React from 'react';

const faqData = [
  {
    question: 'How do I sell tickets online for free?',
    answer:
      "When you sign up for Eventbrite, it's easy to start planning your first event, post the exciting details, create tickets, and sell tickets online for free in no time! With an industry-leading online ticket management system, you can sell tickets online for free and accept different forms of payment with the Eventbrite Organizer.",
  },
  {
    question: 'Can I offer discounts or promo codes on event tickets?',
    answer:
      "If you're wondering how to sell tickets online at a higher volume, discount codes are a great way to incentivize a purchase. Utilize Eventbrite’s online ticket management software to create tickets, offer discounts for attendees, use promo codes to track the performance of your digital advertising campaign, or list an item with trackable promo codes for specific customer groups — to discover who is spreading the word about your event.",
  },
  {
    question: 'How do I create multiple ticket types on eventLive?',
    answer:
      'When you use eventLive to sell tickets online, you can create multiple ticket types, like EarlyBird or VIP, to maximize your online ticket sales by compelling more people to purchase tickets that fit their budget.',
  },
];

export const Faq = () => {
  return (
    <div className="faq-page">
      <h1 className="h1faq">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <details key={index} className="faq-item">
            <summary className="faq-question">{faq.question}</summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Faq;
