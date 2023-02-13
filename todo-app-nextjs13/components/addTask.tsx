"use client";

import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { task } from "@/types/todo";

type Props = {
  addTask: (task: task) => void;
};

export default function AddTask({ addTask }: Props) {
  const toast = useToast();
  const [content, setContent] = useState("");
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (content?.trim() && inputError) {
      setInputError(false);
    }
  }, [content]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const taskText = content.trim();
    if (!taskText) {
      toast({
        title: "Please Enter your Task",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      setInputError(true);
      return setContent("");
    }

    const task = {
      id: uuidv4(),
      body: taskText,
      check: false,
    };
    addTask(task);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="4">
        <Input
          colorScheme="teal"
          h="46"
          borderColor={inputError ? "red.300" : "transparent"}
          variant="filled"
          placeholder="Please Enter your Task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" px="8" pl="10" pr="10" h="46" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  );
}
