import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom';

const HeaderPerfis = () => {
  return (
    <div>
      <Popover className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg"
                  alt="logo disney"
                />
            </div>
            <div className="md:flex items-center justify-end gap-2 md:flex-1 lg:w-0">
              <Link to="/" className="m-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white border border-gray-700 hover:bg-gray-600">
                Cancelar
              </Link>
              <Link to="/login" className="m-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-gray-700 hover:bg-gray-600">
                Editar Perfis
              </Link>
            </div>
          </div>
        </div>
      </Popover>
    </div> 
  )
}

export default HeaderPerfis;