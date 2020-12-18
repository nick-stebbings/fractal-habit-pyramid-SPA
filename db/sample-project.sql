-- CREATE TABLE habits
-- (
--   id INT NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   description VARCHAR(50) NOT NULL
--   domain_id INT NOT NULL
-- )

-- CREATE TABLE domains
-- (
--   id INT NOT NULL,
--   name VARCHAR(50) NOT NULL,
--   description VARCHAR(50) NOT NULL,
--   rank INT NOT NULL,
--   hashtag VARCHAR(50) NOT NULL
-- )

CREATE TABLE nodes
(
  id INT NOT NULL,
  parent_node_id INT NOT NULL,
  habit_id INT NOT NULL,
  lft INT NOT NULL,
  rgt INT NOT NULL
)

CREATE TABLE date
(
  id INT UNSIGNED NOT NULL,
  date_completed DATE NOT NULL,
  completed BINARY(50) NULL
)

-- CREATE TABLE node_date_completed
-- (
--   node_id INT NOT NULL,
--   date_id INT NOT NULL
-- )

-- ALTER TABLE habits ADD PRIMARY KEY (id);
-- ALTER TABLE domains ADD PRIMARY KEY (id);
-- ALTER TABLE habits ADD INDEX ix15572_fk_habit_domain (domain_id);
-- ALTER TABLE nodes ADD PRIMARY KEY (id);
-- ALTER TABLE nodes ADD INDEX ix15574_parent_child_linkage (parent_node_id);
-- ALTER TABLE nodes ADD INDEX ix15574_fk_lft_linkage (lft);
-- ALTER TABLE nodes ADD INDEX ix15574_fk_rgt_linkage (rgt);
-- ALTER TABLE nodes ADD INDEX ix15574_fk_node_domain (habit_id);
-- ALTER TABLE node_date_completed ADD PRIMARY KEY (node_id,date_id);
-- ALTER TABLE habits CHANGE COLUMN id id  INT NOT NULL AUTO_INCREMENT;
-- ALTER TABLE domains CHANGE COLUMN id id  INT NOT NULL AUTO_INCREMENT;
-- ALTER TABLE nodes CHANGE COLUMN id id  INT NOT NULL AUTO_INCREMENT;
-- ALTER TABLE date CHANGE COLUMN id id  INT UNSIGNED NOT NULL AUTO_INCREMENT;
-- ALTER TABLE habits ADD CONSTRAINT fk_habit_node FOREIGN KEY (id) REFERENCES nodes (habit_id);
-- ALTER TABLE nodes ADD CONSTRAINT fk_parent_child_linkage FOREIGN KEY (id) REFERENCES nodes (parent_node_id);
-- ALTER TABLE nodes ADD CONSTRAINT fk_lft_linkage FOREIGN KEY (id) REFERENCES nodes (lft);
-- ALTER TABLE nodes ADD CONSTRAINT fk_rgt_linkage FOREIGN KEY (id) REFERENCES nodes (rgt);
-- ALTER TABLE domains ADD CONSTRAINT fk_habit_domain FOREIGN KEY (id) REFERENCES habits (domain_id);
-- ALTER TABLE nodes ADD CONSTRAINT fk_node FOREIGN KEY (id) REFERENCES node_date_completed (node_id);
-- ALTER TABLE date ADD CONSTRAINT fk_date FOREIGN KEY (id) REFERENCES node_date_completed (date_id);