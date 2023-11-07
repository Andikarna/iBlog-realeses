import React from 'react'

// netxui
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardHeader, CardBody, Button, button } from "@nextui-org/react";

// icons
import Image from 'next/image';
import { LuView } from 'react-icons/lu';

const ViewUser = ({ name, gender, email, id}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} isIconOnly size='sm' variant='none'>
        <LuView className='text-lg text-gray-500  transition-all' />
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
              <ModalHeader>Detail User</ModalHeader>
              <ModalBody>
                <Card className="py-2">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <h4 className="font-bold text-large">{name}</h4>
                    <p className="text-tiny uppercase font-bold">{gender}</p>
                    <small className="text-default-500">{email}</small>
                  </CardHeader>
                  <CardBody className=" py-2">
                    <Image
                      alt={name}
                      className="object-cover rounded-xl"
                      src={`https://i.pravatar.cc/150?img=${id}`}
                      width={500}
                      height={100}
                    />
                  </CardBody>
                </Card>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ViewUser
