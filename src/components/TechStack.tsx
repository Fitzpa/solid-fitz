import { Component, For } from 'solid-js'
import { A } from 'solid-start'
import { techStack } from '~/data/techStack'

const TechStack: Component<{}> = (props) => {
  return (
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-white">
          Technologies I've worked with in the past few years
        </h2>
        <div class="max-w-lg sm:max-w-xl lg:max-w-none mx-auto lg:mx-0 mt-10 grid items-center grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-10">
          <For each={techStack}>
            {({ link, src, mobileSrc, name }) => (
              <A
                href={link}
                class="relative isolate flex justify-center items-center h-[56px] w-[90px] sm:h-[84px] sm:w-[135px] lg:h-[112px] lg:w-[180px] p-2 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-30 transition-all ease-in-out">
                <picture>
                  <source
                    media="(min-width:1024px)"
                    srcset={src}
                  />
                  <img
                    class="relative h-[56px] w-[90px] sm:h-[84px] sm:w-[135px] md:h-[112px] md:w-[180px] object-contain"
                    src={mobileSrc ? mobileSrc : src}
                    alt={name}
                    style="width:auto;"
                  />
                </picture>
              </A>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}

export default TechStack
