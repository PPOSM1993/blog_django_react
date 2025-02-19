import BlogCard from "./BlogCard"
import Spinner from "./Spinner"
import { useState } from "react";

const BlogContainer = () => {

  const [blogs, setBlogs, isPending] = useState([]); 

  if(isPending){
    return <Spinner />
  }

  return (
    <section className="padding-x py-6  max-container">
    <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
      🍔Latest Posts
    </h2>

    <div className="flex items-center gap-6 justify-center flex-wrap">
      {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}

      
      
    </div>
  </section>
  )
}

export default BlogContainer