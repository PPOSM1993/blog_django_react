import { getBlogs } from "@/services/apiBlog";
import BlogContainer from "@/ui/BlogContainer";
import Header from "@/ui/Header";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {


  const {isPending, isError, error, data:blogs} = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs
  })






  return (
    <>
      <Header />
      <BlogContainer isPending={isPending}  blogs={blogs} />
    </>
  );
};

export default HomePage;