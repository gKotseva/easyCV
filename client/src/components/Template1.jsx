import { RemoveSectionButton } from "./RemoveSectionButton";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export function Template1({
  section = [
    "summary",
    "soft-skills",
    "contact",
    "projects",
    "languages",
    "education",
    "work",
  ],
}) {
  const sections = Array.isArray(section) ? section : [section];

  return (
    <div>
      <div className="flex items-center bg-gray-900 text-white px-10 relative mb-10">
        <div className="relative w-1/2">
          <img src="white-easyCV-logo.png" className="w-30" />
          <div
            className="absolute left-16 -translate-x-1/2 top-full w-0 h-0 
                   border-l-[7em] border-r-[7em] border-t-[3em] 
                   border-l-transparent border-r-transparent border-t-gray-900"
          ></div>
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <p className="text-3xl">Name Surname</p>
          <p>Position</p>
        </div>
      </div>
      <div>
        <div>
          {sections.map((section) => (
            <section
              className="w-100 p-5 flex flex-col gap-3 hover:bg-amber-200 hover:rounded-xl relative group"
              key={section}
            >
              <RemoveSectionButton section={section} />
              <h2 className="uppercase">{section}</h2>
              {getSectionStructure("template1", section)}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

const getSectionStructure = (template, section) => {
  switch (template) {
    case "template1":
      switch (section) {
        case "summary":
          return (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              laudantium, corporis cumque repellendus quam itaque culpa
              architecto dolorum quia possimus, cum consequuntur enim quae,
              harum vel. Omnis nam molestias cupiditate?
            </p>
          );
        case "soft-skills":
          return (
            <ul className="flex flex-wrap gap-1">
              <li className="bg-teal-500 text-white px-3 rounded-xl">
                skill 1
              </li>
              <li className="bg-teal-500 text-white px-3 rounded-xl">
                skill 2
              </li>
              <li className="bg-teal-500 text-white px-3 rounded-xl">
                skill 3
              </li>
              <li className="bg-teal-500 text-white px-3 rounded-xl">
                skill 3
              </li>
            </ul>
          );
        case "contact":
          return (
            <ul>
              <li className="flex items-center gap-2">
                <IoPhonePortraitOutline color="oklch(70.4% 0.14 182.503)" />{" "}
                telephone
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineEmail color="oklch(70.4% 0.14 182.503)" />
                email
              </li>
              <li className="flex items-center gap-2">
                <MdLocationPin color="oklch(70.4% 0.14 182.503)" />
                address
              </li>
            </ul>
          );
        case "projects":
          return (
            <>
              <div>
                <div className="flex justify-between">
                  <h4>Project name</h4>
                  <p className="text-gray-500">date/year - date/year</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-blue-500 underline">link 1</p>
                  <p> | </p>
                  <p className="text-blue-500 underline">link 2</p>
                </div>
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit similique perspiciatis repellendus, sit
                  aspernatur, facilis quo eos non possimus libero
                  exercitationem? Mollitia eius animi consectetur aut debitis
                  aperiam accusantium fugit?
                </p>
              </div>
            </>
          );
        case "languages":
          return (
            <>
              <div>
                <p>Language 1</p>
                <div className="flex gap-2 items-center">
                  <GoDotFill color="oklch(70.4% 0.14 182.503)" />
                  <p>Proficiency</p>
                </div>
              </div>
              <div>
                <p>Language 2</p>
                <div className="flex gap-2 items-center">
                  <GoDotFill color="oklch(70.4% 0.14 182.503)" />
                  <p>Proficiency</p>
                </div>
              </div>
            </>
          );
        case "education":
          return (
            <>
              <div>
                <div className="flex justify-between">
                  <h4 className="font-bold">School type</h4>
                  <p className="text-gray-500">date/year - date/year</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <p>School name</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-gray-500">City, Country</p>
                  </div>
                </div>
              </div>
              <div>
                <ul>
                  <li>- Responsibility 1</li>
                  <li>- Responsibility 2</li>
                  <li>- Responsibility 3</li>
                </ul>
              </div>
            </>
          );
        case "work":
          return (
            <>
              <div>
                <div className="flex justify-between">
                  <h4 className="font-bold">Position</h4>
                  <p className="text-gray-500">date/year - date/year</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1">
                    <p>Company name</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="text-gray-500">City, Country</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-500">Responsibilities</p>
                <ul className="list-disc ml-4">
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                </ul>
              </div>
            </>
          );
      }
  }
};
