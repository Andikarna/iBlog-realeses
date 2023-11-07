import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Input } from "@nextui-org/react";

// icons
import { BiSolidUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter()


  const handleSubmit = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_USER}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender
      })
    })
    setName('')
    setGender('')
    setEmail('')
    router.refresh();
  }


  return (
    <>
      <Button onPress={onOpen} color="success" variant='flat' size="sm" className='flex items-center shadow-md border-1 hover:bg-white hover:border-green-400'
        startContent={
          <IoMdAddCircle className='text-xl' />
        }
      >
        Add User
      </Button>
      <Modal
        size='sm'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Add User
                </ModalHeader>
                <ModalBody>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    endContent={
                      <BiSolidUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    variant="bordered"
                    autoComplete='off'
                    required
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    endContent={
                      <MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    autoComplete='off'
                    required
                  />
                  <Select
                    label="Gender"
                    variant='bordered'
                    value={gender}
                    onChange={(e) => { setGender(e.target.value) }}
                  >
                    <SelectItem
                      key="male"
                      value="male"
                    >
                      Male
                    </SelectItem>
                    <SelectItem
                      key="female"
                      value="female"
                    >
                      Female
                    </SelectItem>
                  </Select>

                </ModalBody>
                <ModalFooter>
                  <Button color="success" type="submit" variant='flat' onPress={onClose}>
                    Add User
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddUser
