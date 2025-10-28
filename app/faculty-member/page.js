import NeedHelp from "@/components/homepage/NeedHelp";
import FacultyMembers from "@/components/KonwFacultyCmp/FacultyMember";
import React from "react";

const KnowFaculty = () => {
  return (
    <div>
      <div className="edn__hero__container">
        <h2 className="edn__title text-black">Faculty Members</h2>
      </div>

      <div>
        <FacultyMembers/>
      </div>

      <NeedHelp/>
    </div>
  );
};

export default KnowFaculty;
