"use client";

import { useParams } from "next/navigation";
import { faculty } from "../../FakeDb/faculty";

export default function PortfolioPage() {
  const { slug } = useParams();
  const person = faculty.find((p) => p.slug === slug);

  if (!person) {
    return <div className="p-10 text-center">Profile not found.</div>;
  }

  return (
    <div className="">
      {/* Hero */}
      <div className="edn__hero__container">
        <h2 className="edn__title text-black">{person.name} </h2>
      </div>

      {/* Main Content */}
      <div className="space-y-10 edn__lr__space edn__space__top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-64 md:h-full rounded-xl object-cover object-top shadow-lg"
          />

          {/* Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#ffd300]">
              {person.name}
            </h1>
            <p className="text-gray-400 font-medium mt-1">{person.title}</p>
            <p className="mt-4 text-gray-300 leading-relaxed">{person.about}</p>

            {/* Expertise */}
            {person.expertise?.length > 0 && (
              <div className="mt-6">
                <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-white">
                  Expertise Area
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {person.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="bg-[#ffd300] px-3 py-1 text-black rounded-lg text-sm md:text-base"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description / Insights */}
            {person.des?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl md:text-3xl mb-4 font-semibold text-white">
                  See More Insights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {person.des.map((item, index) => (
                    <div
                      key={index}
                      className={`border border-white/10 p-5 rounded-md shadow transition-all ease-in-out duration-500 ${
                        index === 0 ? "" : "blur-sm hover:blur-0"
                      }`}
                    >
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
