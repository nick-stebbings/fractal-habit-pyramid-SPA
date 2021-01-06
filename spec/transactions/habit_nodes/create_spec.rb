# frozen_string_literal: true

RSpec.describe Hht::Transactions::HabitNodes::Create do
  let(:habit_node_repo) { Hht::Repos::HabitNodeRepo.new }
  let(:factory) { Factory.registry.elements[:habit_node] }
  let(:factory_habit_node) { factory.create }

  subject { described_class.new(habit_node_repo: habit_node_repo) }

  context 'When given valid input' do
    let(:attrs) do
      { id: 1, lft: 1, rgt: 2, parent_id: nil }
    end

    it 'persists a node' do
      expect(habit_node_repo).to receive(:create) { attrs }

      transac = subject.call(attrs)
      expect(transac).to return_success_monad

      monad_payload = transac.value_or(0)
      expect(monad_payload).to eq(factory_habit_node.attributes)
    end
  end
end
