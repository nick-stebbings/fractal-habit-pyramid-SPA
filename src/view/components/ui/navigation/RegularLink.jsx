// src/view/components/ui/navigation/RegularLink.jsx

const RegularLink = {
  view: ({ attrs }) => (
    <button class="btn text-gray-100">
      <a href={`#!/${attrs.path}`} class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">{attrs.content}</a>
    </button>
  )
};

export default RegularLink;