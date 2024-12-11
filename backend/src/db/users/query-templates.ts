
/** 
 * I modified this query to retrieve tge address associated to a user using JOIN clause to combine the
 * users tables with the addresses table using the user_id foreign key
 * */ 

export const selectUsersTemplate = `
SELECT users.*, addresses.street, addresses.state, addresses.city, addresses.zipcode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id
ORDER BY users.name
LIMIT ?, ?
`;

export const selectCountOfUsersTemplate = `
SELECT COUNT(*) as count
FROM users
`;
