// src/view/components/habits/AddHabit.jsx

// Components
import TextInput from "../ui/forms/TextInput.jsx"

const AddHabit = {
  view: ({attrs, children}) => (
    <section class="add-habit-form">
      <form action="">
        <TextInput></TextInput>
        {console.log(hi)}
      </form>
    </section>
  )
};

export default AddHabit;