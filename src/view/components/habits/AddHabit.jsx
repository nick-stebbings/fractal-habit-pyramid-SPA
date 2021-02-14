// src/view/components/habits/AddHabit.jsx

// Components
import TextInput from "../ui/forms/TextInput.jsx"

import "../ui/forms/form-style.scss";

const AddHabit = {
  view: ({attrs, children}) => (
    <section class="add-habit-form form-content">
      <div class="container">
        <form class="mx-auto max-w-sm w-full" action="">
          <TextInput
            labelText="Habit Name:"
            placeholder="Cut out caffeine"
            type="text"
          ></TextInput>
          <TextInput
            labelText="Motivation:"
            placeholder="To feel more clear-headed in the mornings"
            type="text"
          ></TextInput>
          <TextInput
            labelText="Date of Initiation:"
            value={'2012-12-12'}
            type="date"
          ></TextInput>
        </form>
      </div>
    </section>
  )
};

export default AddHabit;