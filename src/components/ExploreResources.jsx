"use client";

import React, { useState, useEffect } from "react";
import {
  explore1,
  explore2,
  explore3,
  explore4,
  explore5,
  explore6,
  explore7,
  explore8,
  explore9,
} from "../assets";

const ExploreResources = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay showing content for smooth transition
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative z-10 px-6 md:px-12 max-w-6xl mx-auto mt-10 text-white transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-5xl font-bold text-yellow-400 mb-6 text-center">
        Explore Resources, Tailored for You!
      </h2>
      <p className="text-lg text-gray-300 mb-12 text-center mx-auto max-w-xl">
        Discover valuable resources and privileges available to senior citizens.
        These benefits are designed to make life easier and more enjoyable for
        our respected elders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            id: 1,
            img: explore2,
            title: "Discount on Goods",
            description:
              "Senior citizens are entitled to a 20% discount on essential goods, dining, transportation, and other services.",
            link: "https://www.officialgazette.gov.ph/2010/11/15/republic-act-no-9994/",
            linkText: "Learn More Here",
          },
          {
            id: 2,
            img: explore1,
            title: "Free Medical Services",
            description:
              "Access free medical from public healthcare providers, including consultations and diagnostics.",
            link: "https://www.philhealth.gov.ph/",
            linkText: "Visit PhilHealth Website",
          },
          {
            id: 3,
            img: explore3,
            title: "Senior Citizen Pensions",
            description:
              "Eligible seniors can receive financial assistance or pensions through SSS or DSWD programs.",
            link: "https://www.sss.gov.ph/",
            linkText: "Visit SSS Website",
          },
          {
            id: 4,
            img: explore4,
            title: "Tax Exemptions",
            description:
              "Senior citizens are entitled to various tax exemptions, such as exemptions on income taxes and VAT.",
            link: "https://www.bir.gov.ph/",
            linkText: "Visit BIR Website",
          },
          {
            id: 5,
            img: explore5,
            title: "Discount Transportation",
            description:
              "Senior citizens enjoy discounts or free rides on public transport, such as buses and LRT.",
            link: "https://www.mmda.gov.ph/",
            linkText: "Learn More Here",
          },
          {
            id: 6,
            img: explore6,
            title: "Grants for Seniors",
            description:
              "Access educational benefits and scholarships for seniors looking to continue their learning journey.",
            link: "https://www.dost.gov.ph/",
            linkText: "Visit DOST Website",
          },
          {
            id: 7,
            img: explore7,
            title: "Cultural Discounts",
            description:
              "Senior citizens enjoy discounts on cultural events such as movies and museums.",
            link: "https://www.ncca.gov.ph/",
            linkText: "Visit NCCA Website",
          },
          {
            id: 8,
            img: explore8,
            title: "Discount on Utility Bills",
            description:
              "Senior citizens can avail of discounts on their utility bills such as water and electricity.",
            link: "https://www.meralco.com.ph/",
            linkText: "Learn More Here",
          },
          {
            id: 9,
            img: explore9,
            title: "Discount On Fees",
            description:
              "Senior citizens enjoy discounted or free entrance to museums, parks, etc.",
            link: "https://www.ncca.gov.ph/",
            linkText: "Visit NCCA Website",
          },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-black-200 rounded-xl shadow-lg overflow-hidden flex flex-col justify-between h-full p-4 transition-transform duration-500 ease-out hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-200 hover:text-yellow-300 mt-2 block"
              >
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreResources;
