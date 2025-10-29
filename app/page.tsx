import Image from 'next/image'
import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4">
      <Image
        src="/avatar.jpg"
        alt="Anwar Pasaribu"
        width={128}
        height={128}
        className="rounded-full object-cover mb-4"
      />
      <h1 className="mb-8 text-1xl font-bold">
        Hi 👋, I'm Anwar Pasaribu
      </h1>
      <p className="mb-4">
        {`Passionate with the latest Mobile Development technology and implementing it\’s best practice to improve app quality and ultimately make app users happy. Proven more than 5 years experienced in crafting high-quality mobile applications from stock trading, e-Wallet, consumer goods, banking apps.`}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
