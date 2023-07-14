import { Component } from 'solid-js'

const techStack = [
  {
    name: 'github',
    src: '/akar-icons_github-fill.svg',
  },
  {
    name: 'git',
    src: '/git.svg',
  },
  {
    name: 'typescript',
    src: '/Typescript_logo_2020.svg',
  },
  {
    name: 'solid',
    src: '/Solidjs.svg',
  },
  {
    name: 'tailwindcss',
    src: '/tailwind.svg',
  },
  {
    name: 'vite',
    src: '/Vitejs-logo.svg',
  },
  {
    name: 'vercel',
    src: '/vercel.svg',
  },
  {
    name: 'svelte',
    src: '/Svelte_Logo.svg',
  },
  {
    name: 'react',
    src: '/react.svg',
  },
  {
    name: 'nextjs',
    src: '/Nextjs-logo.svg',
  },
  {
    name: 'gatsby',
    src: '/Gatsby-Logo.svg',
  },
  {
    name: 'graphql',
    src: '/GraphQL_Logo.svg',
  },
  {
    name: 'apollo',
    src: '/apollo-graphql.svg',
  },
  {
    name: 'css',
    src: '/css.svg',
  },
  {
    name: 'sass',
    src: '/sass.svg',
  },
  {
    name: 'html',
    src: '/html.svg',
  },
  {
    name: 'jest',
    src: '/jest.svg',
  },
  {
    name: 'testing library',
    src: '/testing-library.svg',
  },
  {
    name: 'material-ui',
    src: '/material-ui.svg',
  },
  {
    name: 'javascript',
    src: '/javascript.svg',
  },
  {
    name: 'nodejs',
    src: '/Node.js_logo.svg',
  },
  {
    name: 'zustand',
    src: '/zustand.png',
  },
]

const TechStack: Component<{}> = (props) => {
  return (
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-white">
          Technologies I've worked with in the past few years
        </h2>
        <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {techStack.map((tech) => (
            <span class="relative isolate">
              <img
                class="max-h-20 w-auto relative "
                src={tech.src}
                alt={tech.name}
                width={48}
                height={48}
              />
              <span class="opacity-0 hover:opacity-100 transition-all ease-in-out  absolute left-0 top-[50%] translate-y-[-50%] w-full h-full inline-flex justify-center items-center rounded-lg bg-black bg-opacity-40 px-2 py-1 text-xl uppercase font-semibold text-white">
                {tech.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
