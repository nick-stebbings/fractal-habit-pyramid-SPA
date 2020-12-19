-- domain seed
INSERT INTO
  domains (name, description, rank, hashtag)
VALUES
  (
    'Physical Health',
    'Eating, sleeping, not being chased by a bear...',
    1,
    '#physical'
  );

-- habit seed
INSERT INTO
  habits (name, description, initiation_date, domain_id)
VALUES
  (
    'Shop healthily',
    'You are what you eat, so do not eat pizza every day',
    now() :: timestamptz,
    1
  );

-- update habit to historical date
UPDATE
  habits
SET
  initiation_date = (now() - '1 month' :: interval);

-- insert interim days into date
WITH last_date_entry AS (
  SELECT
    DISTINCT initiation_date
  FROM
    habits
)
INSERT INTO
  dates (h_date)
SELECT
  generate_series
FROM
  generate_series(
    (
      select
        date_trunc('day', (initiation_date + '1 day' :: interval)) -- remove 1 day interval if initiation date to be included
      FROM
        last_date_entry
    ),
    now(),
    '1 day' :: interval
  );

-- insert enough habits to create a small heirarchy under the seed domain ('Physical').
INSERT INTO
  nodes
VALUES
  (1, null, 1, 14, 1),
  (2, 1, 2, 7, 1),
  (3, 2, 3, 4, 1),
  (4, 2, 5, 6, 1),
  (5, 1, 8, 13, 1),
  (6, 5, 9, 10, 1),
  (7, 5, 11, 12, 1);

-- convert d3fc generated data into boolean values to be inserted into node_date for each LEAF NODE (id's 3,4,6,7), for each date


