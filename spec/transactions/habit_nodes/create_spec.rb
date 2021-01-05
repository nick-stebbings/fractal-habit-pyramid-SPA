# RSpec.describe Hht::Transactions::HabitNodes::Create do
#   let(:habit_node_repo) { Hht::Repos::HabitNodeRepo.new }
#   let(:factory) { Factory.registry.elements[:habit_node] }
#   let(:habit_node) { factory.create }
  
#   subject { described_class.new(habit_node_repo: habit_node_repo) }

#   context 'When given valid input' do    
#     let(:attrs) do
#       { lft:1, rgt:4 }
#     end

#     it "creates a node" do
#       expect(habit_node_repo).to receive(:create) { habit_node }

#       result = subject.call(attrs)
#       expect(result).to be_success
#       mapped_entity = result.value_or(0)
#       expect(mapped_entity).to eq(habit_node)
#     end
#   end
# end