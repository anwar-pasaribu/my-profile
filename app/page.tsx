import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hi 👋, I am Anwar Pasaribu
      </h1>
      <p className="mb-4">
        {`Skilled Android developer, proficient in using Kotlin to craft beautiful yet impactfully useful mobile apps. Passionate with the latest Android Development technology and implementing it\’s best practice to improve app quality and finally make app users happy.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
