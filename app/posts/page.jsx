import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link";


async function PostPage() {

  const posts = await getAllPosts()
  // console.log(posts)
  

  return (
    <div className='h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>All Posts</h1>
      <ul className='mt-6 px-6'>
        {posts.map((post, idx) => (
          <li key={post.id}
            className="mb-2 cursor-pointer pb-1"
          >
            <Link href={`/posts/${post.id}`}>
            <span className="border-b px-1 rounded-xl mr-1 border-yellow-600">{ idx + 1}.</span> {post.title}
            </Link>
       
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostPage