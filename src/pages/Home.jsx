

import React from 'react';
import { Link } from 'react-router-dom'; 

const Particles = ({ className, quantity }) => (
  <div className={className}>
    <div className="pointer-events-none">
      {[...Array(quantity)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white opacity-20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About Me", href: "/about" },
  { name: "Freelance", href: "/freelance" },
];

export default function Home() {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* Top gradient background */}
      <div
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        style={{ zIndex: -10 }}
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:w-[72.1875rem]"
          style={{
            background: 'linear-gradient(to top right, #7cc9fc, #99a8ff)',
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="relative px-6 pt-20 lg:px-8">
        {/* Navigation */}
        <nav className="my-16" style={{ animation: 'fadeIn 1s ease-out forwards' }}>
          <ul className="flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm duration-500 text-zinc-300 hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Particles */}
        <Particles
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: -5 }}
          quantity={100}
        />

        {/* Main content */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 
            className="text-zinc-200 text-5xl md:text-8xl mt-8 font-bold tracking-tight"
            style={{ 
              animation: 'fadeIn 1s ease-out forwards',
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '-0.025em'
            }}
          >
            FullStack MERN <br />Developer
          </h1>
          
          <div className="md:my-16 my-24 text-center" style={{ animation: 'fadeIn 1s ease-out 0.3s forwards', opacity: 0 }}>
            <h2 className="text-sm text-zinc-500">
              Hi, my name is Ranjith, and I'm a Dev addict
            </h2>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)] pointer-events-none"
          style={{ zIndex: -10 }}
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:w-[72.1875rem]"
            style={{
              background: 'linear-gradient(to top right, #fc6dc8, #fc6d76)',
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              transform: 'translateX(3rem) translateX(-50%)'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}