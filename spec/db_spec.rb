RSpec.describe 'Habit Nodes' do
  
  let(:habit_nodes_factory) { Factory.registry.elements[:habit_node] }
  let(:create_transaction) { Hht::Transactions::HabitNodes::Create.new }
  # it "should create a habit node" do
  #   Factory.rom.commands[:habit_nodes][:create].call(id:1, lft:1, rgt:4)
  #   parent = Factory.registry.elements[:habit_node].create
    
  #   expect(Factory.rom.relations[:habit_nodes].count).to be(1)
  #   expect(Factory.rom.relations[:habit_nodes].one[:id]).to eq(parent.id)
  # end

  it 'validates presence of id' do
    expect(create_transaction.call(id: 1, lft:1, rgt: 2)).to be_kind_of success
  end

  it 'validates presence of lft/rgt' do
    expect(create_transaction.call(id: 1)).to be_kind_of failure
  end

  it 'has a valid factory' do
    expect(habit_nodes_factory.create).to be_kind_of Entities::HabitNode
  end
end