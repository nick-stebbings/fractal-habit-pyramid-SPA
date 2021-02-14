// src/view/components/ui/forms/TextInput.jsx

const TextInput = {
  view: ({attrs}) => (
    <label class="block w-full">
      <span class="input-label">{ attrs.labelText }</span>
      <input type={attrs.type}  class="form-input mt-1 block w-full" placeholder={attrs.placeholder} />
    </label>
  )
};

export default TextInput;