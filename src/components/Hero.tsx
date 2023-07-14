const CompaniesWorkedWith = [
  { name: 'When I Work', href: '/', logo: '/when-i-work-logo.svg' },
  { name: 'SPACE150', href: '/about', logo: '/when-i-work-logo.svg' },
  { name: 'Nike', href: '#', logo: '/when-i-work-logo.svg' },
  { name: 'Cargill', href: '#', logo: '/when-i-work-logo.svg' },
  { name: '3M', href: '#', logo: '/when-i-work-logo.svg' },
  {
    name: 'Phillips Distilling Company',
    href: '#',
    logo: '/when-i-work-logo.svg',
  },
  { name: 'Tom Sachs', href: '#', logo: '/when-i-work-logo.svg' },
  { name: 'WP Engine', href: '#', logo: '/when-i-work-logo.svg' },
  {
    name: 'Science Museum of Minnesota',
    href: '#',
    logo: '/when-i-work-logo.svg',
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
            <div class="mx-auto max-w-2xl text-left">
              <h1 class="text-6xl font-bold text-left text-white sm:text-7xl md:text-8xl lg:text-9xl">
                Louie Fitzpatrick
              </h1>
              <p class="ml-2 mt-6 text-lg leading-8 text-gray-300">
                Software Engineer
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
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
        <ul
          role="list"
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CompaniesWorkedWith.map((company) => (
            <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
              <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                  <div class="flex items-center space-x-3">
                    <h3 class="truncate text-sm font-medium text-gray-900">
                      {company.name}
                    </h3>
                    {/* <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {company.role}
                    </span> */}
                  </div>
                  {/* <p class="mt-1 truncate text-sm text-gray-500">
                    {company.title}
                  </p> */}
                </div>
                <img
                  class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                  src={company.logo}
                  alt={company.name}
                />
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <div class="flex w-0 flex-1">
                    <a
                      href={`mailto:${person.email}`}
                      class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <EnvelopeIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Email
                    </a>
                  </div>
                  <div class="-ml-px flex w-0 flex-1">
                    <a
                      href={`tel:${person.telephone}`}
                      class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                      <PhoneIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
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
