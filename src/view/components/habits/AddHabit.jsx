// src/view/components/habits/AddHabit.jsx

// Components
import TextInput from "../ui/forms/TextInput.jsx"

const AddHabit = {
  view: ({attrs, children}) => (
    <section class="add-habit-form card-content">
      <div class="container">

      <form class="mx-auto max-w-sm" action="">
        <TextInput
          labelText="hi"
          placeholder="this#thi.com"
          type="email"
        ></TextInput>
        <TextInput
          labelText="hiagain"
          placeholder="this#thi.com"
          type="email"
        ></TextInput>
      </form>
      </div>
    </section>
  )
};

export default AddHabit;