import React from 'react'

function Header() {
    return (
        <header className="pb-6 bg-white lg:pb-0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
            {/* lg+ screen */}
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <a href="#" title="BloodConnect" className="flex items-center">
                  {/* Custom Logo */}
                  <img
                    className="w-auto h-8 lg:h-10 mr-2"
                    src="your-logo-url.png"  // Replace this with your own logo URL
                    alt="BloodConnect Logo"
                  />
                  {/* Title */}
                  <span className="text-xl font-semibold text-black">BloodConnect</span>
                </a>
              </div>
    
              {/* Mobile Menu Button */}
              <button
                type="button"
                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              >
                {/* Closed Menu Icon */}
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
                {/* Open Menu Icon */}
                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
    
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#home" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  Home
                </a>
                <a href="#profile" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                  Profile
                </a>
              </div>
            </nav>
    
            {/* Mobile Navigation Links */}
            <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  <a href="#home" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Home
                  </a>
                  <a href="#profile" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                    Profile
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
      );
    
}

export default Header