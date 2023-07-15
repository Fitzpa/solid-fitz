const CompaniesWorkedWith = [
  {
    name: 'When I Work',
    href: '/',
    logo: '/when-i-work-logo.svg',
    width: '250',
    height: '64',
    lightBg: true,
  },
  {
    name: 'SPACE150',
    href: '/about',
    logo: '/space-logo.jpg',
    width: '250',
    height: '95',
    lightBg: false,
  },
  {
    name: 'Nike',
    href: '#',
    logo: '/nike-logo.svg',
    width: '250',
    height: '75',
    lightBg: true,
  },
  {
    name: 'Cargill',
    href: '#',
    logo: '/cargill-logo.svg',
    width: '250',
    height: '81',
    lightBg: true,
  },
  {
    name: '3M',
    href: '#',
    logo: '/3M-logo.svg',
    width: '250',
    height: '95',
    lightBg: true,
  },
  {
    name: 'Phillips Distilling Company',
    href: '#',
    logo: '/phillips-logo.png',
    width: '250',
    height: '93',
    lightBg: true,
  },
  {
    name: 'Tom Sachs',
    href: '#',
    logo: '/tom-sachs-logo.svg',
    width: '250',
    height: '64',
    lightBg: true,
  },
  {
    name: 'WP Engine',
    href: '#',
    logo: '/WPE-LOGO-H-Inverse.svg',
    width: '250',
    height: '95',
    lightBg: false,
  },
  {
    name: 'Science Museum of Minnesota',
    href: '#',
    logo: '/science-museum-of-minnesota.svg',
    width: '250',
    height: '95',
    lightBg: false,
  },
]

const Hero = () => {
  return (
    <div class="relative isolate bg-[#121120] min-h-screen">
      <div class="relative pt-14 h-full">
        <div
          class="absolute rounded-full inset-x-0 -z-10 w-[400px] transform-gpu overflow-hidden blur-3xl sm:top-[8rem]"
          aria-hidden="true">
          <svg
            height="400"
            width="400"
            class="relative bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20">
            <circle
              cx="200"
              cy="200"
              r="150"
              style="fill:white;"
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
        <div class="w-full flex justify-center items-center">
          <ul
            role="list"
            class="mx-auto mt-10 flex gap-8 flex-row flex-wrap w-full max-w-lg justify-center items-center sm:max-w-xl lg:mx-0 lg:max-w-none">
            {CompaniesWorkedWith.map((company) => (
              <li class={`object-contain rounded-lg`}>
                <div class="flex justify-center h-[95px] w-[250px]">
                  <img
                    class={`p-4 rounded-lg ${
                      company.lightBg ? 'bg-white' : 'bg-black'
                    }`}
                    src={company.logo}
                    alt={company.name}
                    width={company.width + 'px'}
                    height={company.height + 'px'}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
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
    </div>
  )
}

export default Hero
