"use client";

import React from "react";
import { DeleteTaskProps, DeleteAllTask } from "@/types/todo";
import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";

export function DeleteAllTask({ deleteTaskAll }: DeleteAllTask) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bgColor="red.100"
        px="8"
        h="45"
        color="red.500"
        mt="4"
        onClick={onOpen}
      >
        Delete All
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" color="gray.600">
          <ModalHeader>Do you really want to Delete All Tasks?</ModalHeader>
          <ModalFooter>
            <Button mr={3} onClick={onClose} color="gray.600">
              No
            </Button>
            <Button
              bgColor="red.200"
              color="red.500"
              onClick={() => deleteTaskAll()}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export function DeleteTask({ task, deleteTask }: DeleteTaskProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<FiTrash2 />}
        isRound={true}
        onClick={onOpen}
        aria-label="delete"
      />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader color="gray.600">
            Do you really want to Delete the Task?
          </ModalHeader>
          <ModalBody>
            <Text color="gray.600">{task.body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} color="gray.600">
              No
            </Button>
            <Button
              bgColor="red.200"
              color="red.500"
              onClick={() => deleteTask(task.id, onClose)}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
