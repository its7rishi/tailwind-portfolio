import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ProjectList from "../data/projects";
import Pagination from "./Pagination";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(3);

  useEffect(() => {
    setProjects(ProjectList);
  }, []);

  const lastPostIndex = currentPage * projectsPerPage;
  const firstPostIndex = lastPostIndex - projectsPerPage;
  const currentProjects = projects.slice(firstPostIndex, lastPostIndex);
  return (
    <section
      id="projects"
      className="w-full mt-12 px-6 flex flex-col items-center justify-start gap-4"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>

      <div className="flex items-center justify-center flex-wrap gap-4">
        {currentProjects.map((project, i) => (
          <motion.div
            key={project.id}
            className="card w-80 lg:w-96 bg-base-100 shadow-xl image-full"
            initial={{ opacity: 0, tranlsateX: -50 }}
            animate={{ opacity: 1, tranlsateX: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn bg-primary text-slate-300 border-none hover:bg-slate-300 hover:text-blue-800"
                >
                  Visit
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Pagination
        totalProjects={ProjectList.length}
        projectsPerPage={projectsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
export default Projects;
