/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { CurrencyDollarIcon, EyeIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { AnnotationIcon, MoonIcon, ChartBarIcon } from '@heroicons/react/outline'
import Head from 'next/head'

const navigation = [
  { name: 'Github', href: 'https://github.com/heylinda/heylinda-app', target: '_blank' },
  {
    name: 'Slack',
    href: 'https://join.slack.com/t/heylinda/shared_invite/zt-to976i3o-qPBT6C~pU0QjyMeMgvMVYQ',
    target: '_blank',
  },
]

const features = [
  {
    name: 'Meditate',
    description: '100+ Meditations',
    icon: EyeIcon,
  },
  {
    name: 'Track Progress',
    description: 'Track your progress using the calendar activity',
    icon: ChartBarIcon,
  },
  {
    name: 'Dark mode',
    description: 'Light and dark mode depending on your mood',
    icon: MoonIcon,
  },
  {
    name: '100% Free',
    description: 'Unlike other app we are donation based meditation ',
    icon: CurrencyDollarIcon,
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Hey Linda – A free forever meditation app</title>
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 bg-white lg:max-auto lg:w-full">
            <Popover>
              {({ open }) => (
                <>
                  <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav
                      className="relative flex items-center justify-between sm:h-10 "
                      aria-label="Global"
                    >
                      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div className="flex items-center justify-between w-full md:w-auto">
                          <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src="/logo.png" />
                          </a>
                          <div className="-mr-2 flex items-center md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Open main menu</span>
                              <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                        {navigation.map((item) => (
                          <a
                            target={item.target}
                            key={item.name}
                            href={item.href}
                            className="font-medium text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        ))}
                        <a
                          target="_blank"
                          href="https://opencollective.com/heylinda/donate"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Donate
                        </a>
                      </div>
                    </nav>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      focus
                      static
                      className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                      <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="/logo.png"
                              alt="Girl in lotus position"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close main menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target={item.target}
                              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                        <a
                          target="_blank"
                          href="https://opencollective.com/heylinda/donate"
                          className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                        >
                          Donate
                        </a>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <main className="mt-10 mx-auto w- px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Coming soon
                  </span>
                  <span className="block">A 100% free</span>{' '}
                  <span className="block text-indigo-600 xl:inline">meditation app</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Building a healthier world through open source and free meditation. Built with
                  React Native. 🧘‍♀️
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a
                      target="_blank"
                      href="https://tinyletter.com/heylinda"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get early access
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      target="_blank"
                      href="https://opencollective.com/heylinda/donate"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo md:py-4 md:text-lg md:px-10"
                    >
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="justify-center bg-white">
          <img
            className="sm:block justify-center w-auto m-auto h-auto"
            src="/hero.jpg"
            alt="Meditation app"
          />
        </div>
      </div>
      {/* <div className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A simple way to meditate
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Hey Linda is a free app that helps you meditate without too much fluff.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div> */}
    </>
  )
}
