import React from "react";

export default function FooterSmall(props) {
  return (
    <>
       <footer className="relative bg-gray-300 pt-8 pb-6">

          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Indu NextJS by{" "}
                <a
                  href=""
                  className="text-gray-600 hover:text-gray-900"
                >
                  AnGais
                </a>
                .
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}
