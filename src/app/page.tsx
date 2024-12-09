import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-purple-700 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Use Your Styles
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Below is a categorized list with headings and their respective items, each paired with icons for clarity.
                Below is a categorized list with headings
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Below is a categorized list with headings and their respective items, each paired with icons for clarity. Below is a categorized list with headings, their respective items with icons for clarity.
              </p>
            </div>
            <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* First Div */}
              <div className="p-6 bg-gray-800 rounded-lg mt-9 shadow-md">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Heading
                </h3>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Body
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-cog"></i>
                    </span>
                    <span className="text-white">Ag Small 14/150</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="text-white">Ag Small 14/150</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-shield-alt"></i>
                    </span>
                    <span className="text-white">Ag Small 14/150</span>
                  </li>
                </ul>
              </div>

              {/* Second Div */}
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-white mb-4">
                  images
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-chart-line"></i>
                    </span>
                    <span className="text-white">Blue Chair</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="text-white">Three Vases</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-folder"></i>
                    </span>
                    <span className="text-white">Single Vae</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-folder"></i>
                    </span>
                    <span className="text-white">Single Vae</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-folder"></i>
                    </span>
                    <span className="text-white">Single Vae</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-folder"></i>
                    </span>
                    <span className="text-white">Single Vae</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-folder"></i>
                    </span>
                    <span className="text-white">Single Vae</span>
                  </li>
                </ul>
              </div>

              {/* Third Div */}
              <div className="p-6 bg-gray-800 rounded-lg mt-9 shadow-md">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Color Styles
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span className="text-white">Dark Primary</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-phone"></i>
                    </span>
                    <span className="text-white">Primary</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-indigo-600">
                      <i className="fas fa-calendar"></i>
                    </span>
                    <span className="text-white">Light Grey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Use Your Components
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Below is a categorized list with headings and their respective items, each paired with icons for clarity.
              list with headings and their respective items
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Below is a categorized list with headings and their respective items, each paired with icons for clarity.
              list with headings and their respective items and their respective items.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* First Card with Image and Text */}
            <div className="p-6  rounded-lg ">
              <div className="flex">
                {/* Image Section */}
                <div className="">
                  <img
                    src="/images/th.jpeg"
                    alt="Placeholder"
                    className="rounded-lg "
                  />
                </div>
              </div>
            </div>

            {/* Second Card with Image */}
            <div className="p-6  rounded-lg">
              <div className="flex gap-6">
                {/* Image Section */}
                <div className="">
                  <img
                    src="/images/th (1).jpeg"
                    alt="Placeholder"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Second Card with Multiple Buttons */}
            <div className="p-6 rounded-lg">
              <div className="space-y-4"> {/* Use space-y-4 for vertical spacing */}
                <div className="w-full">
                  <button className="px-4 py-2 bg-white text-purple-400 rounded-lg">
                    Button
                  </button>
                </div>
                <div className="w-full">
                  <button className="px-4 py-2 bg-indigo-800 text-white rounded-lg ">
                    Button
                  </button>
                </div>
                <div className="w-full">
                  <button className="px-4 py-2 bg-white text-purple-400 rounded-lg">
                    Button
                  </button>
                </div>
                <button className="px-4 py-2 bg-indigo-400 text-white rounded-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  );
}