import WorkLogoList from './WorkLogoList'

const Hero = () => {
  return (
    <section class="relative isolate bg-[#121120] min-h-screen px-8 sm:px-20 mb-24">
      <div class="relative pt-14 h-full">
        <div
          class="absolute rounded-full inset-x-0 -z-10 w-full h-1/2 lg:h-[800px] rotate-45 lg:w-[800px] transform-gpu overflow-hidden blur-3xl opacity-70 left-[2] lg:left-[-8rem] sm:top-[8rem]"
          aria-hidden="true">
          <svg
            height="100%"
            width="100%"
            class="cloud-gradient blur-3xl opacity-60 overflow-hidden">
            <circle
              cx="50%"
              cy="50%"
              r="10%"
              style="fill:transparent;"
            />
          </svg>
        </div>
        <div class="py-24 sm:py-32 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-left">
              <h1 class="w-min max-w-fit ml-auto text-6xl font-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-[#00ff95] sm:text-7xl md:text-8xl lg:text-9xl [text-shadow:_1px_0_1px_rgb(255_255_255_/_40%)]">
                Louie Fitzpatrick
              </h1>
              <p class="ml-2 mt-6 text-lg leading-8 text-gray-300 text-center">
                Software Engineer
              </p>
              {/* <div class="mt-10 flex items-center justify-end gap-x-6">
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
              </div> */}
            </div>
          </div>
        </div>
        <WorkLogoList />
      </div>
      <div
        class="absolute inset-x-0 left-[unset] lg:left-[calc(100%-400px)] right-4 lg:right-[unset] top-[calc(100%-5rem)] w-1/2 lg:w-[400px] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <svg
          height="100%"
          width="100%"
          class="relative rounded-full cloud-gradient opacity-20">
          <circle
            cx="50"
            cy="50"
            r="20%"
            style="fill:white;stroke:purple;stroke-width:2;"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
