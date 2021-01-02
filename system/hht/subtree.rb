class Subtree
  attr_reader :root_node
  def initialize(root_node, nodes_array)
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  def build
  # reduce the nodes array
  #     # -- pushing all root nodes' children onto the root node
    return root_node if @descendant_nodes.empty?
  end

end