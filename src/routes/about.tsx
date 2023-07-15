// import { A } from "solid-start";
// import Counter from "~/components/Counter";
import TechStack from '~/components/TechStack'

export default function About() {
  return (
    <main class="text-center mx-auto bg-[#121120] p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        About Page
      </h1>
      <TechStack />
    </main>
  )
}
