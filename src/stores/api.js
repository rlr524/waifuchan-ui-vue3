/**
 * Call to the MongoDB Data API
 * @example
 curl --location --request POST 'DB_API_URL' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: DB_API_KEY' \
--data-raw '{
    "collection":"<COLLECTION_NAME>",
    "database":"<DATABASE_NAME>",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}'
 */
