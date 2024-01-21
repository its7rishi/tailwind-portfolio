import BlogList from "../data/blogs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Blogs = () => {
  return (
    <section
      id="blogs"
      className="w-full mt-6 px-6 flex flex-col items-center justify-start gap-4"
    >
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>

      <div className="carousel carousel-center rounded-box gap-3">
        {BlogList.map((blog, i) => (
          <motion.div
            key={blog.id}
            className="carousel-item gap-3 w-4/12 lg:w-3/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
          >
            <div className="flex flex-col items-center justify-start bg-base-300 rounded-box border-2 border-gray-500 pb-2">
              <img
                src={blog.image}
                alt="blog-preview"
                className="rounded-box opacity-75 hidden md:flex"
              />
              <h1 className="mt-3 text-center font-semibold">{blog.title}</h1>
              <p className="mt-2 text-xs px-4 text-center">
                {blog.description}
              </p>
              <div className="w-full flex items-center justify-center">
                <a
                  href={blog.url}
                  className="mt-3 btn btn-primary mr-5 text-slate-300 hover:bg-slate-300 hover:text-primary border-none"
                >
                  Visit <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Blogs;
