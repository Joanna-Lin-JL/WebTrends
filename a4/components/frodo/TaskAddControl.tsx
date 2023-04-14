import { Button, HStack, Input } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import { Task } from "../../types"
import { db } from "../../util/firebase"
import { collection, doc, setDoc } from "firebase/firestore"


const TaskAddControl = () => {
  const [input, setInput] = useState("")

  const addTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (input === "") return

    const task: Task = {
      text: input,
      checked: false,
    }
    const taskRef = collection(db, "tasks")
    setDoc(doc(taskRef), task);
    setInput("")
  }

  return (
    <form onSubmit={addTask}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Do the dishes..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add Task</Button>
      </HStack>
    </form>
  )
}

export default TaskAddControl
