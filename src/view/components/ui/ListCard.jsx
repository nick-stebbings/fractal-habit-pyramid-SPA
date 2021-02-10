// src/view/components/ui/ListCard.jsx

// Components
import Icon from "./Icon.jsx"

const ListCard = {
  view: ({ attrs }) => (
    <div class="h-24 list-card-container">
      <div class="flex items-start">
                  <div class="label-row w-16 flex-shrink-0 flex flex-col text-right leading-none">
                    <span class="h-8 name-label">
                      { "Name:" }
                    </span>
                    <span class="h-8 stats-label">
                      { "Stats:" }
                    </span>
                  </div>
                  <div class="flex-shrink-1 flex flex-col leading-none">
                    <h2 class="h-8 font-bold text-xl text-bold">{ "My Habit Name" }</h2>
                    <div class="stats-row h-8 flex-row flex justify-items-center">
                      <span>
                        <span class="habit-streak text-3xl text-balance-success text-sans">
                          { "3" }
                        </span>
                        <span class="habit-streak-desc text-2xl">
                          { "Days of Streak" }
                        </span>
                      </span>

                      <span>
                        <span class="habit-days-tracked text-3xl text-blue-300 text-sans">
                          { "99" }
                        </span>
                        <span class="habit-days-tracked-desc text-2xl">
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