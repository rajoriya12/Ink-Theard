"use client"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css";


import React from 'react'

export default function AosProvider({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      {children}
    </div>
  )
}

