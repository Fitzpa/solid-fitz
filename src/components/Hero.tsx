import WorkLogoList from './WorkLogoList'

const Hero = () => {
  return (
    <section class="relative isolate bg-[#121120] min-h-screen px-8 sm:px-20 mb-24">
      <div class="relative pt-14 h-full">
        <div
          class="absolute rounded-full inset-x-0 -z-10 w-[800px] transform-gpu overflow-hidden blur-3xl left-[-8rem] sm:top-[8rem]"
          aria-hidden="true">
          <svg
            height="800"
            width="800"
            class="cloud-gradient blur-3xl opacity-60 overflow-hidden">
            <circle
              cx="400"
              cy="400"
              r="100"
              style="fill:transparent;"
            />
          </svg>
        </div>
        <div class="py-24 sm:py-32 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-left">
              <h1 class="w-min max-w-fit ml-auto text-6xl font-bold text-left text-white sm:text-7xl md:text-8xl lg:text-9xl">
                Louie Fitzpatrick
              </h1>
              <p class="ml-2 mt-6 text-lg leading-8 text-gray-300 text-center">
                Software Engineer
              </p>
              <div class="mt-10 flex items-center justify-end gap-x-6">
                <a
                  href="#"
                  class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                  Get started
                </a>
                <a
                  href="#"
                  class="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <WorkLogoList />
      </div>
      <div
        class="absolute inset-x-0 left-[calc(100%-20rem)] top-[calc(100%-5rem)] w-[400px] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <svg
          height="400"
          width="400"
          class="relative rounded-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20">
          <circle
            cx="200"
            cy="200"
            r="90"
            style="fill:white;stroke:purple;stroke-width:2"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
