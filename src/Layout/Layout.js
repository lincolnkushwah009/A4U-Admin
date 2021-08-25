import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import EarningOverview from "./EarningOverview";
import RevenueSources from "./RevenueSources";
import ProjectCard from "./ProjectCard"
import Illustration from "./Illustration"
import Approach from "./Approach";
const Layout = () => {
  return (
    <div className="container-fluid">
    
      <Heading />
      <div className="row">
        <Card />
      </div>
      {/* Content Row */}
      <div className="row">
            <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <EarningOverview />
            </div>
            </div>
            {/* Pie Chart */}
            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                 <RevenueSources/>
                </div>
            </div>
      </div>
      {/* Content Row */}
      <div className="row">
        {/* Content Column */}
            <div className="col-lg-6 mb-4">
            {/* Project Card Example */}
                <ProjectCard/>
            </div>
          <div className="col-lg-6 mb-4">
            {/* Illustrations */}
              <div className="card shadow mb-4">
                    <Illustration/>
               </div>
          {/* Approach */}
                <div className="card shadow mb-4">
                    <Approach/>
                </div>
           </div>
      </div>
    </div>
  );
};
export default Layout;
