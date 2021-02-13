// src/view/components/layout/CardSection.jsx

// Components
import ListCard from "../ui/ListCard.jsx";
import MenuListCard from "../ui/navigation/MenuListCard.jsx";

const CardSection = {
  view: ({attrs}) => (
    <section class="card-content">
      <div class="container">
        { 
          attrs.cards.map(
            item => (item ? <ListCard key={ item.id } habit={ item } ></ListCard> : 'Waiting')
          )
        }
      </div>
    </section>
  )
};

export default CardSection;