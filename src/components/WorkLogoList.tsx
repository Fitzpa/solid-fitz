import { For } from 'solid-js'
import { companiesWorkedWith } from '../data/companiesWorkedWith'

const WorkLogoList = () => {
  return (
    <div class="w-full flex justify-center items-center">
      <ul
        role="list"
        class="mx-auto mt-10 flex gap-4 sm:gap-8 flex-row flex-wrap w-full max-w-lg justify-center items-center sm:max-w-xl lg:mx-0 lg:max-w-none">
        <For each={companiesWorkedWith}>
          {(company) => (
            <li class={`object-contain rounded-lg`}>
              <div class="flex justify-center h-[54px] w-[141px] sm:h-[71.25px] sm:w-[187.5px] md:h-[95px] md:w-[250px]">
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
          )}
        </For>
      </ul>
    </div>
  )
}

export default WorkLogoList
