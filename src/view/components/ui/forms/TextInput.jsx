// src/view/components/ui/forms/TextInput.jsx

const TextInput = {
  view: ({attrs, children}) => (
    <label class="block">
      <span class=" input-label">Input</span>
      <input type="email" class="form-input mt-1 block w-full" placeholder="john@example.com" />
    </label>
  )
};

export default TextInput;