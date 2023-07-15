import { A } from 'solid-start'
import Hero from '~/components/Hero'
import TechStack from '~/components/TechStack'
import WorkSection from '~/components/WorkSection'

export default function Home() {
  return (
    <main class="text-center mx-auto bg-[#121120] text-gray-700 p-4">
      <Hero />
      <WorkSection />
      <TechStack />
    </main>
  )
}
