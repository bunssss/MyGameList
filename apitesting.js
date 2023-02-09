const apicalypse = require('apicalypse').default;
const igdb = require('igdb-api-node').default;
process.env.token;


const rawQueryString = 'fields a,b,c;limit 50;offset 0;';

const response = igdb()
    .fields(['name']) // fetches only the name, movies, and age fields
    .fields('name') // same as above

    .limit(50) // limit to 50 results
    .offset(10) // offset results by 10

    .sort('name') // default sort direction is 'asc' (ascending)
    .sort('name', 'desc') // sorts by name, descending
    .search('Call of Duty') // search for a specific name (search implementations can vary)

    .where(`first_release_date > ${new Date().getTime() / 1000}`) // filter the results

    .request('/games'); // execute the query and return a response object

console.log(response.data);



