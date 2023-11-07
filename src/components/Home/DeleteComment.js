

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { MdDelete } from 'react-icons/md';

export default function DeleteComment({ id, email }) {
  const { data: session } = useSession()

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  async function handleDeleteUser() {
    await fetch(`http://localhost:3001/comment/${id}`, {
      method: 'DELETE',
    })
    window.location.reload()
  }

  return (
    <div>
      {session.user.email === email || session.user.email === 'vanov.id17@gmail.com' ? (
        <Button
          onPress={onOpen}
          isIconOnly
          color="danger"
          size="sm"
          variant='none'
        >
          <MdDelete className="text-xl text-danger transition-all" />
        </Button>
      ) : (
        ''
      )}

      <Modal
        size='sm'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Comment</ModalHeader>
              <ModalBody>
                <p>You want delete this comment?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  No
                </Button>
                <Button color="primary" onClick={handleDeleteUser} onPress={onClose} >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
