"use client";

import { updateTask } from "@/types/todo";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function UpdateTask({ task, updateTask }: updateTask) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [body, setBody] = useState("");
  const initialRef = useRef(null);

  return (
    <>
      <IconButton
        icon={<FiEdit />}
        isRound={true}
        onClick={onOpen}
        aria-label="edit-button"
      />
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader>Please Edit your Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Please Enter your Task"
                defaultValue={task.body}
                onChange={(e) => setBody(e.target.value)}
                onFocus={(e) => setBody(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              onClick={() => updateTask(task.id, body, onClose)}
            >
              Edit & Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
