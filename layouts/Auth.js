import React from "react";
import Image from 'next/image'

// components

export default function Auth({ children }) {
  return (
    <>
      <main >
        <section className="relative bg-white">
          <div className="flex mx-auto">
            <div className="hidden w-full md:block md:w-2/5 lg:w-1/2" style={{
              backgroundImage: "url('/img/register_bg_1.svg')"
            }}>
              <div className="ml-7">
                <Image src={'/img/logo_light.svg'} alt="quiver" layout="fixed" width={'150vw'} height={'150vh'} />
              </div>
            </div>
            <div className="mx-auto w-full md:w-3/5 lg:w-1/2 pt-16 pb-0 md:mine-auto container-snap">
              <div className="max-w-sm mx-auto">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
