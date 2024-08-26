"use client"

import Link from "next/link";
import { MdHome } from "react-icons/md";
import { useState } from "react";

export function LinkHome () {
  const [hover, setHover] = useState(false);

  const toggleHover = (): void => {
    setHover(!hover)
  }

  return (
    <Link rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2" onPointerEnter={toggleHover} onPointerLeave={toggleHover}>
      <MdHome size="40" color={hover ? '#ea580c' : 'white'} className="transition" />
    </Link>
  )
}