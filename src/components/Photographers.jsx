import React from 'react'

function Photographers() {
    return (
        <div className="text-center py-8 mt-12 mb-5 photomakeup">
                <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold mb-6 mt-5 bg-clip-text text-transparent 
            bg-gradient-to-r from-white to-purple-400">
            Our Photographer
          </h1>
          <div className="w-24 h-1 bg-[#d749ff] mx-auto rounded-full" />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src="aanvicover.jpg"
                alt="Aanvi"
                className="rounded-lg shadow-lg mx-auto"
              />
              <h2 className="mt-4 text-lg font-medium">Aanvi</h2>
            </div>
            <div className="text-center">
              <img
                src="karancover.JPG"
                alt="karan "
                className="rounded-lg shadow-lg mx-auto"
              />
              <h2 className="mt-4 text-lg font-medium">karan</h2>
            </div>
          </div>
        </div>
      );
}

export default Photographers