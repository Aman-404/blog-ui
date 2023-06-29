import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';



const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

async function BlogDetails({ params }: { params: { id: string } }) {
  const post = await getBlogById(params.id)
  return (
    <section className="text-gray-600 body-font">
      <Toaster />
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{post.title}</h1>
          <p className="mb-8 leading-relaxed">{post.description}</p>

        </div>
      </div>
    </section>
  )

}


export default BlogDetails
