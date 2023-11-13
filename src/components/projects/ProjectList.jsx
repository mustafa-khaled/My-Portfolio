import { data } from "../../projectsData";
import Project from "./Project";

const ProjectList = ({ activeTag }) => {
  const filteredData =
    activeTag === "all" ? data : data?.filter((i) => i?.category === activeTag);

  return (
    <>
      {filteredData?.map((ele) => {
        return <Project key={ele.id} ele={ele} />;
      })}
    </>
  );
};

export default ProjectList;
