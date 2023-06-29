import { Blog } from "@/components/Hero";
import Link from "next/link";
async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  return data.posts;
}

export default async function Home() {
  const posts = await fetchBlogs();
  return (
    <>
    <Blog/>
    <section className="text-gray-600 body-font">
      <div className="flex my-5">
        <Link
          href={"/blog/add"}
          className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
        >
          Add New Blog 🚀
        </Link>
      </div>

      <div className="container px-6 py-2 mx-auto">
        <div className="flex flex-wrap -m-3">
          {posts?.map((post: any) => (
            
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-white bg-opacity-75 px-5 pt-5 pb-12 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {" "}
                  {new Date(post.date).toDateString()}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  {post.title}
                </h1>
                <Link href={`/blog/learnmore/${post.id}`}>
                <p className="leading-relaxed mb-3">{post.description}<span>....</span></p>
                </Link>
                <Link
                  href={`/blog/edit/${post.id}`}
                  className="px-4 py-1  text-center text-xl bg-green-600 rounded-md font-semibold text-slate-200"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
