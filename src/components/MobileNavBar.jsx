export const MobileNavBar = ()=>{

    return (
        <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out

            ${
              menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
                   `}
    >
      {/* closing button for hamburger menu */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
      >
        &times;
      </button>

      <a
        onClick={() => setMenuOpen(false)}
        href="#Home"
        className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
                  `}
      >
        Home
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#About"
        className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
                  `}
      >
        About
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#Projects"
        className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
                  `}
      >
        Projects
      </a>
      <a
        onClick={() => setMenuOpen(false)}
        href="#Contact"
        className={`text-2xl text-white font-semibold my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
                  `}
      >
        Contact
      </a>
    </div>
    )
}