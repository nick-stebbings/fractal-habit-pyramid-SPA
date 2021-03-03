# frozen_string_literal: true
require 'pry'
RSpec.describe Hht::Transactions::HabitNodes::Create do
  # context 'Given a valid habit node json' do
  #   before do
  #     @habit_node = valid_root_node.create
  #     @habit_node_id = @habit_node.attributes[:id]

  #   end
    
  #   describe 'When a transaction is instantiated with the json' do
  #     subject { described_class.new(habit_node_repo: habit_node_repo) }

  #     it 'Then it persists a node' do
  #       expect(habit_node_repo).to receive(:create) { @habit_node.attributes }
        
  #       transaction = subject.call(@habit_node.attributes)
  #       expect(transaction).to return_success_monad
        
  #       monad_payload = transaction.value_or(0)
  #       expect(monad_payload).to eq(@habit_node.attributes)
  #     end
  #   end
  # end

  context 'Given a valid (child) habit node json AND a persisted (parent) habit node tuple' do
    before do
      @parent_node = valid_parent_node.create
      @child_node = valid_child_node.create
      habit_node_repo.create(@parent_node.attributes)
    end

    describe 'When a transaction is instantiated with the (child) json' do
      subject { described_class.new(habit_node_repo: habit_node_repo) }

      it 'Then it persists a node' do
        binding.pry
        transaction = subject.call(@child_node.attributes)
        expect(transaction).to return_success_monad
        
        monad_payload = transaction.value_or(0)
        binding.pry
        expect(monad_payload).to eq(@child_node.attributes)
      end

      it 'Then updates the lft value of the parent' do end
      it 'Then updates the rgt value of the parent' do end
      it 'Then updates the lft value of the child' do end
      it 'Then updates the rgt value of the child' do end
    end
  end
end
