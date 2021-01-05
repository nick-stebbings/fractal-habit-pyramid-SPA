RSpec.describe 'Habit Nodes' do
  # let(:factories) do
  #   ROM::Factory.configure do |config|
  #     config.rom = ROM_CONTAINER
  #   end
  # end

  # before do
  #   factories.define(:habit_node, struct_namespace: Entities) do |f|
  #     f.id 1
  #   end
  #   factories.define(:child, relation: :habit_nodes) do |f|
  #     f.id 2
  #     f.lft 2
  #     f.rgt 3
  #     f.parent_id 1
  #     f.association(:habit_nodes, count: 1)
  #   end

  # c = Factory.registry.elements[:child].create
  # expect(Factory.rom.relations[:habit_nodes].one[:parent_id]).to be(c.parent_id)
  # end
  
  it "should create a habit node" do
    Factory.rom.commands[:habit_nodes][:create].call(id:1, lft:1, rgt:4)
    p = Factory.registry.elements[:habit_node].create
    
    expect(Factory.rom.relations[:habit_nodes].count).to be(1)
    expect(Factory.rom.relations[:habit_nodes].to_a.reverse[0][:id]).to eq(p.id)
  end
end