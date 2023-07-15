import { Component } from 'solid-js'
import { A } from 'solid-start'

const techStack = [
  {
    name: 'github',
    src: '/akar-icons_github-fill.svg',
    link: 'https://github.com/',
  },
  {
    name: 'git',
    src: '/git.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'typescript',
    src: '/Typescript_logo_2020.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    name: 'solid',
    src: '/Solidjs.svg',
    link: 'https://www.solidjs.com/',
  },
  {
    name: 'tailwindcss',
    src: '/tailwind.svg',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'vite',
    src: '/Vitejs-logo.svg',
    link: 'https://vitejs.dev/',
  },
  {
    name: 'vercel',
    src: '/vercel.svg',
    link: 'https://vercel.com/',
  },
  {
    name: 'svelte',
    src: '/Svelte_Logo.svg',
    link: 'https://svelte.dev/',
  },
  {
    name: 'react',
    src: '/react.svg',
    link: 'https://react.dev/',
  },
  {
    name: 'nextjs',
    src: '/Nextjs-logo.svg',
    link: 'https://nextjs.org/',
  },
  {
    name: 'gatsby',
    src: '/Gatsby-Logo.svg',
    link: 'https://www.gatsbyjs.com/',
  },
  {
    name: 'graphql',
    src: '/GraphQL_Logo.svg',
    link: 'https://graphql.org/',
  },
  {
    name: 'apollo',
    src: '/apollo-graphql.svg',
    link: 'https://www.apollographql.com/',
  },
  {
    name: 'css',
    src: '/css.svg',
    link: 'https://www.w3schools.com/css/',
  },
  {
    name: 'sass',
    src: '/sass.svg',
    link: 'https://sass-lang.com/',
  },
  {
    name: 'html',
    src: '/html.svg',
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'jest',
    src: '/jest.svg',
    link: 'https://jestjs.io/',
  },
  {
    name: 'testing library',
    src: '/testing-library.svg',
    link: 'https://testing-library.com/',
  },
  {
    name: 'material-ui',
    src: '/material-ui.svg',
    link: 'https://mui.com/',
  },
  {
    name: 'javascript',
    src: '/javascript.svg',
    link: 'https://www.w3schools.com/js/default.asp',
  },
  {
    name: 'nodejs',
    src: '/Node.js_logo.svg',
    link: 'https://nodejs.org/en',
  },
  {
    name: 'zustand',
    src: '/zustand.png',
    link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
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
            <A
              href={tech.link}
              class="relative isolate flex justify-center items-center h-[112px] w-[180px] p-2 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-100 transition-all ease-in-out">
              <img
                class="relative w-[180px] h-[112px] object-contain"
                src={tech.src}
                alt={tech.name}
                width={180}
                height={112}
              />
              {/* <span class="opacity-0 hover:opacity-100 transition-all ease-in-out  absolute left-0 top-[50%] translate-y-[-50%] w-full h-full inline-flex justify-center items-center rounded-lg bg-black bg-opacity-40 px-2 py-1 text-xl uppercase font-semibold text-white">
                {tech.name}
              </span> */}
            </A>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
