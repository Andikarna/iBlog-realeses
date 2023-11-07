import { Button, Tooltip } from "@nextui-org/react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"

import { FiLogOut } from 'react-icons/fi';

export default function Signout() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex h-full items-center justify-end gap-3">
        <div className="text-center w-full text-tiny">
          <Tooltip content={`Welcome, ${session.user.name}`} className="flex justify-end">
            <Image
              src={session.user.image}
              width={30}
              height={30}
              alt="andikarna"
              className="w-auto h-auto rounded-full"
            />
          </Tooltip>
        </div>
        <div onClick={() => signOut()} className="flex text-center cursor-pointer hover:ml-1 transition-all">
          <FiLogOut className=" text-xl"/>
        </div>
      </div>
    )
  }
}