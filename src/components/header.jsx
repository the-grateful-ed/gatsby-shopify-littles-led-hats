import React from "react"
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { HiSearch } from "@react-icons/all-files/hi/HiSearch"
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import tw from "twin.macro"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const StyledLink = tw(Link)`

`

export function Header() {
  return (
    <div className="">
      <header className="relative bg-orange-500">
        <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex">
                <Link to="/" className="py-8">
                  <span className="sr-only">Workflow</span>
                  <StaticImage
                    width={170}
                    height={100}
                    src="../images/logo.png"
                    alt="Logo"
                    className="my-6"
                  />
                </Link>
              </div>
              <div className="flex items-end">
                <ul className="flex flex-row space-x-8 text-xl text-gray-50 hover:text-gray-200">
                  <li className="relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px pt-px">
                    <Link
                      to="/"
                      activeClassName="text-gray-100/50 hover:text-gray-300 border-b-2 border-gray-100/50 hover:border-gray-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px pt-px">
                    <Link
                      to="/products"
                      activeClassName="text-gray-300/50 hover:text-gray-300 border-b-2 border-gray-300/50 hover:border-gray-300"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px pt-px">
                    <Link
                      to="/about"
                      activeClassName="text-gray-100/50 hover:text-gray-300 border-b-2 border-gray-100/50 hover:border-gray-300"
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px pt-px">
                    <Link
                      to="/contact"
                      activeClassName="text-gray-100/50 hover:text-gray-300 border-b-2 border-gray-100/50 hover:border-gray-300"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium -mb-px pt-px">
                    <Link
                      to="/faq"
                      activeClassName="text-gray-100/50 hover:text-gray-300 border-b-2 border-gray-100/50 hover:border-gray-300"
                    >
                      F.A.Q.
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <Link
                  to="/search"
                  className="p-2 text-gray-50 hover:text-gray-300 cursor-pointer"
                >
                  <span className="sr-only">Search</span>
                  <HiSearch
                    className="w-10 h-10 cursor-grab"
                    aria-hidden="true"
                  />
                </Link>
                <div className="ml-4 flow-root lg:ml-8">
                  <Link to="/cart" className="group -m-2 p-2 flex items-center">
                    <AiOutlineShoppingCart
                      className="flex-shrink-0 h-10 w-10 text-gray-50 group-hover:text-gray-200/50"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-50 group-hover:text-gray-200/50">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
