import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-[90vh] flex justify-center items-center bg-blue-950 px-8">
      <div>
          <h1 className="text-3xl text-yellow-600 font-semibold italic"> Hello World </h1>
      <p className="block italic mt-2 text-green-600">I am rashedin islam, a junior mern stack developer
        </p>
        <p className="mt-2 text-sm">Gosh! It&apos;s too slow!!! what else can I do now! I need to upgrade my laptop right now. Why it is this slow! I&apos;m so disappointed. I&apos;m helpless here</p>
        <button></button>
        <button className="bg-green-900 px-6 py-2 mt-2 rounded-full text-sm text-yellow-600">Help Me</button>
      </div>
   </div>
  );
}
