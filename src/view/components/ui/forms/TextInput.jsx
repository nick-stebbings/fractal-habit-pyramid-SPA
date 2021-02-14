// src/view/components/ui/forms/TextInput.jsx

const TextInput = {
  view: ({attrs}) => (
    <label class="block w-full flex-initial">
      <span class="input-label">{ attrs.labelText }</span>
      <input class="form-input mt-1 block w-full"
             type={attrs.type}
             id={attrs.id}
             placeholder={attrs.placeholder}
             value={attrs.value}
      />
    </label>
  )
};

export default TextInput;