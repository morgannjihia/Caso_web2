"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link href="/">
          <div>
            <h1 className="font-bold text-2xl text-blue-900">
              CASO
            </h1>

            <p className="text-xs">
              Arise & Shine
            </p>
          </div>
        </Link>

        <div className="hidden md:flex gap-8">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/zones">Zones</Link>
          <Link href="/institutions">Institutions</Link>
          <Link href="/events">Events</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact">Contact</Link>

        </div>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </nav>
  );
}