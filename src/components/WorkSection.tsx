import { Component, For } from 'solid-js'

const works = [
  {
    name: 'When I Work',
    role: 'Frontend Software Engineer',
    path: 'when-i-work.png',
  },
  {
    name: 'SPACE150',
    role: 'Frontend Software Engineer',
    path: 'space.png',
  },
  {
    name: 'Red Wing Shoes',
    role: 'Frontend Software Engineer',
    path: 'red-wing.png',
  },
  {
    name: 'Phillips Distilling Company',
    role: 'Frontend Software Engineer',
    path: 'cubist.png',
  },
  {
    name: 'Phillips Distilling Company',
    role: 'Frontend Software Engineer',
    path: 'uv.png',
  },
  {
    name: 'WP Engine',
    role: 'Frontend Software Engineer',
    path: 'wp-engine.png',
  },
  {
    name: 'Nike X Tom Sachs',
    role: 'Fullstack Software Engineer',
    path: 'nikecraft.png',
  },
]

const WorkSection: Component<{}> = () => {
  // https://cubist.freezervodka.com/
  return (
    <section class="px-20 mb-24 text-left">
      <h2 class="text-4xl font-semibold leading-6 text-white">Previous Work</h2>
      <p class="mt-2 max-w-4xl text-base text-white mb-6">
        Here are some of the projects I have been involed with.
      </p>
      <ul
        role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <For each={works}>
          {(work) => (
            <li
              class="col-span-1 divide-y divide-gray-200 rounded-lg h-[290px] bg-cover bg-no-repeat bg-center"
              style={`background-image: url('../../public/previous-work/${work.path}')`}>
              <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                  <div class="flex items-center space-x-3 opacity-0">
                    <h3 class="truncate text-sm font-medium text-gray-900">
                      {work.name}
                    </h3>
                    <span class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {work.role}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          )}
        </For>
      </ul>
    </section>
  )
}

export default WorkSection
