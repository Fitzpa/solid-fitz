import { A } from 'solid-start'

export default function NotFound() {
  return (
    <main class="grid min-h-full place-items-center bg-[#121120] mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-[#00ff95]">
          404
        </p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-base leading-7 text-white ">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <A
            href="#"
            class="rounded-md bg-gradient-to-br from-purple-600 to-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Go back home
          </A>
        </div>
      </div>
    </main>
  )
}
