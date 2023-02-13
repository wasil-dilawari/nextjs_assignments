"use client";

import React from "react";
import { tasks } from "@/types/todo";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import UpdateTask from "./updateTask";
import { DeleteAllTask, DeleteTask } from "./deleteTask";
import { HiCheckCircle } from "react-icons/hi";

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  deleteTaskAll,
  checkTask,
}: tasks) {
  if (!tasks?.length)
    return (
      <>
        <Box maxW="80%">
          <Text>Your List is Empty</Text>
        </Box>
      </>
    );
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems="stretch"
        color="gray.500"
      >
        {tasks.map((task) => (
          <HStack key={task.id} opacity={task.check === true ? "0.5" : "1"}>
            <Text
              color="gray.600"
              w="100%"
              p="8px"
              borderRadius="lg"
              as={task.check === true ? "s" : ("" as any)}
              cursor="pointer"
              onClick={() => checkTask(task.id)}
            >
              {task.body}
            </Text>
            {task.check === true ? (
              <>
                <IconButton
                  icon={<HiCheckCircle size="filled" />}
                  isRound={true}
                  aria-label="done-button"
                  onClick={() => checkTask(task.id)}
                />
              </>
            ) : (
              <>
                {" "}
                <UpdateTask task={task} updateTask={updateTask} />
              </>
            )}
            {/* <UpdateTask task={task} updateTask={updateTask} /> */}
            <DeleteTask task={task} deleteTask={deleteTask} />
          </HStack>
        ))}
      </VStack>

      <Flex>
        <DeleteAllTask deleteTaskAll={deleteTaskAll} />
      </Flex>
    </>
  );
}
