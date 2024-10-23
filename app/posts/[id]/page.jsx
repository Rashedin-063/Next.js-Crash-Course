import getSinglePost from "@/lib/getSinglePost";

export async function generateMetadata({params}) {
   const { id } = params;
  const post = await getSinglePost(id);
  
  return {
    title: post.title,
    description: post.body
 }
}

async function SinglePostPage({ params }) {
  const { id } = params;
  const post = await getSinglePost(id);

  return (
    <div className='flex flex-col items-center justify-center h-[80vh] space-y-4 mx-8'>
      <div className='border border-dotted px-2 py-4 rounded-lg border-yellow-200 space-y-2'>
        <h2 className='text-green-500 text-lg border-b hover:border-b-2 pb-2 border-yellow-200 border-opacity-45 hover:transition-all hover:duration-300'>
          {post.title}
        </h2>

        <p> {post.body} </p>
      </div>
    </div>
  );
}
export default SinglePostPage