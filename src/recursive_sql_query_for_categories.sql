WITH RECURSIVE subCategories AS (
	SELECT
		"id",
		"name",
		"description",
       "parentId"
	FROM
		category
	WHERE
		id = 1234
	UNION
		SELECT
			e."id",
			e."name",
			e."description",
            e."parentId"
		FROM
			category e
		INNER JOIN subCategories s ON s."id" = e."parentId"
) SELECT
	*
FROM
	subCategories;