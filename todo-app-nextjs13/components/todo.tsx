"use client";

import React, { useEffect, useRef, useState } from "react";
import { Inter } from "@next/font/google";
import styles from "../app/page.module.css";
import { task } from "@/types/todo";
import { Heading, useToast, VStack } from "@chakra-ui/react";
import AddTask from "./addTask";
import TaskList from "./taskList";

const inter = Inter({ subsets: ["latin"] });

export default function Todo() {
  const toast = useToast();
  const [tasks, setTasks] = useState<task[]>([]);
  const initialRender = useRef(true);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks") as string) || [];
    setTasks(tasks);
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task: task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTasks);
  }

  function deleteTaskAll() {
    setTasks([]);
  }

  function checkTask(id: string) {
    const newTasksCheck: task[] = tasks.map((task) => {
      if (task.id === id) {
        task.check = !task.check;
      }
      return task;
    });
    setTasks(newTasksCheck);
  }

  function updateTask(id: string, body: string, onClose: () => void) {
    const info = body.trim();
    if (!info) {
      toast({
        title: "Please Enter your Task",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newTasksUpdate: task[] = tasks.map((task) => {
      if (task.id === id) {
        task.body = body;
        task.check = false;
      }
      return task;
    });
    setTasks(newTasksUpdate);
    onClose();
  }

  return (
    // <div className={styles.grid}>
    //   <h2 className={inter.className}>Title</h2>
    //   <p className={inter.className}>Text</p>
    // </div>
    <VStack p={4} minH="100vh" pb={20}>
      <Heading p="5" fontWeight="extrabold" size="xl" bgClip="text">
        Todo List
      </Heading>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        deleteTaskAll={deleteTaskAll}
        checkTask={checkTask}
      />
    </VStack>
  );
}
