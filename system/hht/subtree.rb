class Subtree
  attr_reader :root_node

  def initialize(root_node, nodes_array)
    @root_node = root_node
    @descendant_nodes = nodes_array
  end

  def build
    root_id = root_node.name.to_s
    node_dict = { root_id => root_node }
    @descendant_nodes.each do |node, idx|
      id = node.id
      parent_id = node.parent_id
      new_tree_node = node.to_tree_node
      node_dict[id.to_s] = new_tree_node
      node_dict[parent_id.to_s] << new_tree_node
    end
    node_dict[root_id]
  end

  def self.jsonify(tree)
    root_json = tree.as_json
    if root_json["children"]
      { 
        "name" => root_json[:name].to_s,
        "children" => root_json["children"].map { |child| jsonify(child) }
      }
    else
      { 
        "name" => root_json[:name].to_s,
        "children" => []
      }
    end
  end
end
