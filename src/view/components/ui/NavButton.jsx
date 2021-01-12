// src/view/components/ui/NavButton.jsx

const NavButton = {
  view: ({ attrs }) => (
    <a class="relative block py-6 px-2 lg:p-6" href={`#!/${attrs.path}`}>
      {attrs.icon}
    </a>
  )
};

export default NavButton;