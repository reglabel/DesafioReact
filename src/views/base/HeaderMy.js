import { Fragment } from 'react'
import { Popover, Transition  } from '@headlessui/react'
import { Link } from 'react-router-dom';

import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    FilmIcon,
    DesktopComputerIcon, 
    StarIcon,
    DotsVerticalIcon,
} from '@heroicons/react/solid';

const Header = () => {
    const more = [
        {
            name: 'Originais',
            icon: StarIcon,
        },
        {
            name: 'Filmes',
            icon: FilmIcon,
        },
        {
            name: 'Séries',
            icon: DesktopComputerIcon,
        },
    ];

  return (
    <div>
      <Popover className="relative bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-start flex-row items-center border-b-2 border-indigo-600 py-6 justify-between">
                <div className="flex flex-wrap items-start flex-row items-center justify-start">
                    <div className="flex items-center justify-start">
                        <img
                        className="h-8 w-auto sm:h-10"
                        src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
                        alt="logo disney"
                        />
                    </div>

                    <div className="ml-3 md:flex items-center justify-start text-slate-100">
                        <span className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-lg font-medium hover:text-gray-500">
                        <HomeIcon
                            className="hover:text-gray-500 h-5 w-5 mr-2"/>
                            Início
                        </span>
                    </div>

                    <div className="md:flex items-center justify-start text-slate-100">
                        <span className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-lg font-medium hover:text-gray-500">
                        <SearchIcon
                            className="hover:text-gray-500 h-5 w-5 mr-2"/>
                            Pesquisa
                        </span>
                    </div>

                    <div className="md:flex items-center justify-start text-slate-100">
                        <span className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-lg font-medium hover:text-gray-500">
                        <PlusIcon
                            className="hover:text-gray-500 h-5 w-5 mr-2"/>
                            Minha Lista
                        </span>
                    </div>

                    <div className="md:flex items-center justify-start">
                        <Popover>
                        {({ open }) => (
                        <>
                            <Popover.Button
                            className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium text-slate-100"
                            >
                                <DotsVerticalIcon
                                    className="text-gray-600 hover:text-slate-100 h-5 w-5"
                                />
                            </Popover.Button>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute z-10 left-3/5 transform mt-3 px-2 max-w-md sm:px-0">
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                <div className="relative grid gap-2 bg-slate-700 px-5 py-6 sm:gap-8 sm:p-8">
                                    {more.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-m-3 p-3 flex items-start rounded-lg"
                                    >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-slate-500" aria-hidden="true" />
                                        <div className="ml-4">
                                        <p className="text-base font-medium text-slate-400 hover:text-slate-100">{item.name}</p>
                                        </div>
                                    </a>
                                    ))}
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                        </Popover>
                    </div>
                </div>
                <div className="flex justify-end">
                        <Link to="/" className="m-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white border border-gray-700 hover:bg-gray-600">
                            Sair
                        </Link>
                </div>
            </div>
        </div>
      </Popover>
    </div> 
  )
}

export default Header;