import React, { useEffect } from "react";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? "hidden" : "";
	}, [isMenuOpen]);

	return (
		<nav className="fixed top-0  w-[100%] z-40 mx-auto px-4 bg-purple-3 backdrop-blur-lg border-b border-white/10 shadow-lg">
			<div className="main-div max-w-5xl mx-auto">
				<div className="flex justify-between items-center h-16">
					<a
						href="#home"
						className="font-mono text-2xl bg-gradient-to-tr from-blue-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
					>
						{""}
						Zunaira Anwar
					</a>

					<div
						className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-2xl "
						onClick={() => setIsMenuOpen((prev) => !prev)}
					>
						&#9776;
					</div>

					<div className="desktopMenu hidden md:flex items-center space-x-8  ">
						<a
							href="#home"
							className="text-gray hover:text-white transition colors "
						>
							{""}Home{""}
						</a>
						<a
							href="#about"
							className="text-gray hover:text-white transition colors "
						>
							{""}About{""}
						</a>
						<a
							href="#projects"
							className="text-gray hover:text-white transition colors "
						>
							{""}Projects{""}
						</a>
						<a
							href="#contact"
							className="text-gray hover:text-white transition colors "
						>
							{""}Contact{""}
						</a>
					</div>
				</div>

				<div
					className={`fixed top-0 left-0 w-full  bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${
			isMenuOpen
				? "h-screen opacity-100 pointer-events-auto "
				: "h-0 opacity-0 pointer-events-none"
		}`}
				>
					<button
						className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
						onClick={() => setIsMenuOpen(false)}
						aria-label="close menu"
					>
						&times;
					</button>

					<a
						href="#home"
						className={`text-2xl font-semibold text-bold  px-4 py-4 transform transition-transform duration-100  border-y-2 border-white w-full  focus:text-blue-900 focus:bg-white
            ${
				isMenuOpen
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-10"
			} 
            `}
						onClick={() => setIsMenuOpen(false)}
					>
						{""}Home{""}
					</a>
					<a
						href="#about"
						className={`text-2xl font-semibold text-bold px-4 py-4 transform transition-transform duration-100 text-left border-y-2 border-white w-full  focus:text-blue-900 focus:bg-white
              ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } 
              `}
              onClick={() => setIsMenuOpen(false)}>
						{""}About{""}
					</a>
					<a
						href="#projects"
						className={`text-2xl font-semibold text-bold px-4 py-4 border-spacing-0 transform transition-transform duration-100 text-left border-y-2 border-white w-full  focus:text-blue-900 focus:bg-white
              ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } 
              `}
              onClick={() => setIsMenuOpen(false)}
					>
						{""}Projects{""}
					</a>
					<a
						href="#contact"
						className={`text-2xl font-semibold text-bold px-4 py-4 transform transition-transform duration-100 text-left border-y-2 border-white w-full  focus:text-blue-900 focus:bg-white
              ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } 
              `}
              onClick={() => setIsMenuOpen(false)}
					>
						{""}Contact{""}
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
