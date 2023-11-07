"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

const providers = ({ children }) => {
  return (
    <NextUIProvider>
      <SessionProvider>
        {children}
      </SessionProvider>
    </NextUIProvider>
  )
}

export default providers
