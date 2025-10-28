"use client";

import Image from "next/image";
import TooltipBtn from "../utilities/TooltipBtn";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const teamMembers = [
  {
    name: "Fardeen Ahmed",
    slug: "fardeen-ahmed",
    role: "Cyber Security Expert",
    bio: "Fardeen Ahmed is a seasoned cybersecurity and technology professional with over nine years of teaching experience and deep technical expertise across multiple domains. As Co-Founder and CEO of Eduden, he plays a pivotal role in designing and delivering practical, industry-aligned training programs in cybersecurity, ethical hacking, and advanced technology stacks.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/Fardeen.webp?updatedAt=1750088729835",
  },
  {
    name: "Nazmul Islam",
    slug: "nazmul-islam",
    role: "Graphics Designer Expert",
    bio: "Nazmul Islam is the Director and Country Head of Ethical Den Bangladesh, and a senior design leader with over a decade of experience in the graphic and digital design industry. As the Senior Graphic Designer and Head of the Graphics Department, he plays a central role in shaping the creative direction of Ethical Den’s projects across education, technology, and brand development.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/Nazmul.png?updatedAt=1749637806216",
  },
  {
    name: "Yathish",
    slug: "yathish",
    role: "AI / ML Expert",
    bio: "Yathish is a skilled AI/ML professional and Senior Instructor at Eduden, bringing practical industry experience and academic research expertise to the classroom. His work spans machine learning, deep learning, automation systems, and applied data science, with a focus on real-world problem solving and intelligent system design.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/Yathish.jpg?updatedAt=1749637938756",
  },
  {
    name: "Khokon Halder",
    slug: "khokon-halder",
    role: "Cyber Security Expert",
    bio: "Khokon Halder is an experienced Networking and Cybersecurity Instructor at Eduden, with over seven years of hands-on experience in IT infrastructure, system support, and information security.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/khokon.jpg?updatedAt=1749637832282",
  },
  {
    name: "Partho Halder",
    slug: "partho-halder",
    role: "Digital Marketing Expert",
    bio: "Partho Halder is a digital marketing professional with extensive industry experience in search engine optimization, paid advertising, and campaign strategy. With a strong background in both organic and performance-driven marketing, he brings a practical, results-oriented approach to Eduden’s marketing education initiatives.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/Partho.webp?updatedAt=1750088833365",
  },
  {
    name: "Md.Shakil",
    slug: "md-shakil",
    role: "Back-End Developer",
    bio: "Shakil is a backend developer and IT instructor with a strong background in software development, technical training, and practical implementation of computer science principles. As a key team member at Ethical Den, he works on backend systems and development workflows, contributing to scalable, secure, and maintainable software infrastructure.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/MD.%20Shakil.jpg?updatedAt=1749637847885",
  },
  {
    name: "Ayoushi Gupta",
    slug: "ayoushi-gupta",
    role: "Digital Marketing Expert",
    bio: "Ayoushi Gupta is a business development and content strategy professional with over a decade of experience in education, writing, and academic communication. As a Business Developer and Content Executive at Ethical Den, she plays a key role in crafting compelling narratives, overseeing editorial quality, and supporting the organization’s strategic growth through impactful content initiatives.",
    image:
      "https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/About%20page/Ayushi.png?updatedAt=1749637776888",
  },
  {
    name: "Joy Sutradhor",
    slug: "joy-sutradhor",
    role: "Front-End Developer",
    bio: "Joy Sutradhor is a senior frontend developer and full-time team member at Ethical Den, specializing in modern web technologies and scalable user interface architecture. With deep expertise in React.js, Next.js, HTML, CSS, and JavaScript, he plays a critical role in delivering responsive, accessible, and high-performance web applications across client and internal projects.",
    image:
      "https://ik.imagekit.io/ethicalden/bd%20team/joy-sutradhor.jpg?updatedAt=1761667557884",
  },
];

export default function FacultyMembers() {
  return (
    <section className=" edn__lr__space edn__space__top">
      <div className="">
        <div>
          <TooltipBtn
            className="max-w-4xl mx-auto text-center"
            btnText="Meet Our Faculty"
            title="Our Dedicated Faculty Members"
            para="Our faculty members are accomplished educators and industry professionals, passionate about sharing their expertise and inspiring the next generation of learners. With diverse backgrounds and real-world experience, they bring knowledge, innovation, and mentorship to every class they teach."
          />
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#161616] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={1000}
                  width={1000}
                  className="object-cover h-[40vh] rounded-lg"
                />
              </div>
              <Link
                href={`/faculty-member/${member.slug}`}
                className="cursor-pointer group"
              >
                <h3 className="text-2xl font-semibold flex items-center gap-x-1 hover:text-[#ffd300] transition">
                  {member.name}{" "}
                  <span className="text-[#ffd300] text-lg group-hover:scale-150 group-hover:transition">
                    <MdArrowOutward />
                  </span>
                </h3>
              </Link>
              <p className="text-white/80 text-base font-medium mb-2 ">
                {member.role}
              </p>
              <p className="text-white/90 text-sm font-medium line-clamp-2">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
