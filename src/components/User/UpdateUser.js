import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";

// icons
import { BiEditAlt, BiSolidUser } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';


const UpdateUser = ({ data }) => {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [gender, setGender] = useState(data.gender);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter()

  const handleSubmit = async () => {

    await fetch(`${process.env.NEXT_PUBLIC_API_USER}/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: gender,
      }),
    });

    setName('')
    setEmail('')
    setGender('')
    setStatus('')
    router.refresh();
  }
  return (
    <>
      <Button onPress={onOpen} isIconOnly color="primary" variant='none' size="sm">
        <BiEditAlt className='text-lg text-blue-500 transition-all' />
      </Button>
      <Modal
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">Update User</ModalHeader>
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
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                    endContent={
                      <MdOutlineEmail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                 
                  <Select
                    label="Gender"
                    variant='bordered'
                    value={gender}
                    defaultSelectedKeys={[data.gender]}
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
                  <Button color="primary" type="submit" variant="flat" onPress={onClose}>
                    Update
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

export default UpdateUser
