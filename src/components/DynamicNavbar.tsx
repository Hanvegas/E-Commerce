"use client"

import { usePathname } from "next/navigation";
import { Navbar, MainNavbar } from "./Navbar";

export default function DynamicNavbar() {
      const pathname = usePathname()
      const isHome = pathname === "/"

      return isHome ? <Navbar /> : <MainNavbar />
}