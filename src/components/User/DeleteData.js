import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { MdDelete } from "react-icons/md";

const DeleteUser = ({ id }) => {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter()

  async function handleDeleteUser(){
    await fetch(`${process.env.NEXT_PUBLIC_API_USER}/${id}`, {
      method: 'DELETE',
    })
    handleRefresh()
    window.location.reload()
  };

  const handleRefresh = () => {
    router.refresh()
  }

  return (
    <div>
      <Button
        onPress={onOpen}
        isIconOnly
        color="danger"
        size="sm"
        variant='none'
      >
        <MdDelete className="text-lg text-red-500 transition-all" />
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
              <ModalHeader className="flex flex-col gap-1">Delete User</ModalHeader>
              <ModalBody>
                <p>You want delete this user?</p>
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
  );
};

export default DeleteUser;
