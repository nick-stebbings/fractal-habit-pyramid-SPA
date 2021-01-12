// src/view/components/ui/RegularLink.jsx

const RegularLink = {
  view: ({ attrs }) => (
    <li class="hover:bg-blue-800 hover:text-white">
      <a href={`#!/${attrs.path}`} class="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold">{attrs.content}</a>
    </li>
  )
};

export default RegularLink;