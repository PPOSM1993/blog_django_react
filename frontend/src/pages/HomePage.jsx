
import Header from "@/ui/Header";
import BlogContainer from "@/ui/BlogContainer";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/services/apiBlog";

const HomePage = () => {

    const {isPending, isError, error, data:blogs} = useQuery({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })

    console.log(blogs);

    return (
        <>
        <Header />
        <BlogContainer isPending={isPending}  blogs={blogs} />
        </>
    );
};

export default HomePage;