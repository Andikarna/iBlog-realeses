"use client";

import React, { useEffect, useState } from 'react'

// nextui
import { Button, Input } from '@nextui-org/react'

import AddCommentLock from './AddCommentLock'

// icons
import { AiOutlineComment } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';

// auth
import { useSession } from 'next-auth/react';

const AddComment = ({ id }) => {

  const { data: session } = useSession()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  async function handleSubmit() {
    await fetch(`http://localhost:3001/comment`, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        images: session.user.image,
        post_id: parseInt(id),
        name: session.user.name,
        email: session.user.email,
        comment: comment,
      }),
    })
    setName('')
    setEmail('')
    setComment('');
    router.refresh();
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-row w-full gap-5'>
      <Input
        id='comment'
        name='comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        type="text"
        placeholder='Comment ...'
        className='w-full'
        autoComplete='off'
        isRequired
        endContent={
          <AiOutlineComment />
        }
      />
      {session ? (
        <Button type='submit' color="success" variant='flat' className="text-xl">
          <IoSend />
        </Button>
      ) : (
        <AddCommentLock />
      )}
    </form>
  )
}

export default AddComment
