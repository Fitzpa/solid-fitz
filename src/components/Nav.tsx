import { createSignal } from 'solid-js'
import { A, useLocation } from 'solid-start'
import { Dialog, DialogPanel } from 'solid-headless'
import { HiOutlineBars3, HiOutlineXMark } from 'solid-icons/hi'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Tech Stack', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = createSignal(false)
  const location = useLocation()
  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600'
  return (
    <div class="bg-[#121120] max-w-[90rem] w-full relative">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div class="flex lg:flex-1">
            <A
              href="#"
              class="-m-1.5 p-1.5">
              <span class="sr-only">Home</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </A>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}>
              <span class="sr-only">Open main menu</span>
              <HiOutlineBars3
                class="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <A
                href={item.href}
                class={`text-sm font-semibold leading-6 text-white ${active(
                  item.href
                )}`}>
                {item.name}
              </A>
            ))}
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <A
              href="#"
              class="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </A>
          </div>
        </nav>
        <Dialog
          as="div"
          class="lg:hidden"
          isOpen={mobileMenuOpen()}
          onChange={setMobileMenuOpen}>
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div class="flex items-center justify-between">
              <A
                href="#"
                class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </A>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}>
                <span class="sr-only">Close menu</span>
                <HiOutlineXMark
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/25">
                <div class="space-y-2 py-6">
                  {navigation.map((item) => (
                    <A
                      href={item.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                      {item.name}
                    </A>
                  ))}
                </div>
                <div class="py-6">
                  <A
                    href="#"
                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    Log in
                  </A>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}

export default Nav
