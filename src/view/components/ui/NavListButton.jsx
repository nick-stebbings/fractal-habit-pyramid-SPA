// src/view/components/ui/NavListButton.jsx

const NavListButton = {
  view: ({ attrs }) => (
    <li>
      <a class="relative block py-6 px-2 lg:p-6" href={`#!/${attrs.path}`}>
        {attrs.icon}
      </a>
    </li>
  )
};

export default NavListButton;