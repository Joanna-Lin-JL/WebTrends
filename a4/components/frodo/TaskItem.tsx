import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { TaskWithId } from "../../types"
import { db } from "../../util/firebase"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"


type Props = {
  readonly task: TaskWithId
}

const TaskItem = ({ task: { id, text, checked } }: Props) => {
  const taskRef = doc(db, 'tasks', id);

  const toggleTask = () => {

    updateDoc(taskRef, { checked: true });
  }

  const deleteTask = () => {
    deleteDoc(taskRef);
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleTask} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete task"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteTask}
      />
    </HStack>
  )
}

export default TaskItem
