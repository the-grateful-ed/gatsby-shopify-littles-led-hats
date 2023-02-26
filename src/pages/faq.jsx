import React from "react"
import { Layout } from "../components/layout"
const faqs = [
  {
    id: 1,
    question: "What are the benefits of using the LED Beanie Hat?",
    answer:
      "The LED Beanie Hat is perfect for outdoor activities like hiking, jogging, cycling, and dog walking during the winter season. It features LED lights that provide great convenience in dark environments. It also keeps your head warm and comfortable while being breathable to keep you dry. Additionally, the hat is easy to charge via USB cable and has a long standby time.",
  },
  {
    id: 2,
    question: "What is the difference between the basic and Bluetooth models?",
    answer:
      "The basic LED Beanie Hat comes in six colors and has built-in 6 LED lights. On the other hand, the Bluetooth model features a 2-in-1 design with a wireless Bluetooth headset connection to listen to your favorite songs, answer calls, and change tracks. It also has a rechargeable Li-ion battery that provides 6 hours of continuous working time.",
  },
  {
    id: 3,
    question: "Is the LED Beanie Hat suitable for both men and women?",
    answer:
      "Yes, the LED Beanie Hat is designed for both male and female users. It comes in one size that is adjustable to fit head circumferences between 50-60 cm. The hat is also made of soft and comfortable acrylic fiber that is suitable for most people without gender difference.",
  },
  {
    id: 4,
    question: "Is the LED light waterproof?",
    answer:
      "While the LED light is durable and able to withstand light rain, we do not recommend exposing it to heavy rain or submerging it in water. It is important to remove the light before washing the beanie.",
  },
  {
    id: 5,
    question: "Can I connect my phone to the LED beanie to play music?",
    answer:
      "This particular model of our LED beanie does not have Bluetooth connectivity, but we offer a similar 2-in-1 design with a built-in wireless Bluetooth headset that allows you to listen to your favorite songs hands-free.",
  },
  {
    id: 6,
    question: "What kind of material is the LED beanie made of?",
    answer:
      "The beanie is made of a flexible stretch material composed of acrylic fiber, which provides maximum fitness and comfort for the wearer.",
  },
  {
    id: 7,
    question:
      " How long does the LED light stay on before needing to be recharged?",
    answer:
      "The LED light can last up to 6 hours on a single charge, depending on usage. The battery is rechargeable via USB cable and can be fully charged in approximately 2 hours.",
  },
  {
    id: 8,
    question: "Can I wash the LED beanie in the washing machine?",
    answer:
      " No, we recommend removing the LED light and hand washing the beanie to preserve its functionality and shape.",
  },
]

export default function FAQPage() {
  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <dl className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                  <dt className="text-base font-medium text-gray-900 md:col-span-5">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  )
}
