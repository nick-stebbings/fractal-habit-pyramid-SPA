// src/view/components/ui/ListCard.jsx

// Components
import Icon from "./Icon.jsx"

const ListCard = {
  view: ({ attrs }) => (
    <div class="list-card-container">
      <div class="list-card">
                  <div class="label-col">
                    <span class="name-label">
                      { "Name:" }
                    </span>
                    <span class="stats-label">
                      { "Stats:" }
                    </span>
                  </div>
                  <div class="details-col">
                    <h2 class="h-8 font-bold text-xl text-bold">{ "My Habit Name" }</h2>
                    <div class="stats-row">
                      <span>
                        <span class="habit-streak text-balance-success">
                          { "3" }
                        </span>
                        <span class="habit-streak-desc">
                          { "Days of Streak" }
                        </span>
                      </span>

                      <span>
                        <span class="habit-days-tracked text-blue-300">
                          { "99" }
                        </span>
                        <span class="habit-days-tracked-desc">
                          { "Days Tracked" }
                        </span>
                      </span>
                    </div>
                  </div>
      </div>
    </div>
  )
};

export default ListCard;