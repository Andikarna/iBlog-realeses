/* eslint-disable @next/next/no-async-client-component */
"use client";

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import DeleteComment from './DeleteComment'
import { useSession } from 'next-auth/react'

export default async function AddCommentChat() {
  const { data: session } = useSession()

  const res = await fetch('http://localhost:3001/comment')
  const api = await res.json()

  return (
    <div className='space-y-3'>
      {api.map(value => (
        <Card key={value.id}>
          <CardHeader className='gap-2'>
            <Image
              src={value.images}
              width={30} height={30}
              alt={value.name}
              className='rounded-full' />
            <h1>{value.name}</h1>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <p>
              {value.comment}
            </p>
          </CardBody>
          <CardFooter className='flex justify-between'>
            <p className=" text-default-400 text-small">{value.email}</p>
            {session ? (
              <DeleteComment id={value.id} email={value.email} />
            ) : (
              ''
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
