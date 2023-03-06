## How to install

1- Clone the repository `git@github.com:ahmedMshaban/techincal-task-2.git`
2- Rename .env.example to .env
3- Add the same user name and password of the server.
4- Rename .env.development.local.example to .env.development.local
5- Run `npm install`
6- Run the server on port `8080`
7- Run `npm start`

## Notes

- If it asks for a username and password, you can use the same as the server.
it doing this because I added port 8080 as a proxy.

- I couldn't find an endpoint to the date of the transaction, there is only an endpoint
for status.

There are two solutions to filter the data: 
1- Get all the data on the front end then filter it.
2- Filter and limit on the back end.

I used the second method to replicate the real-world standpoint. most websites have some sort of record limit: Ebay = 50-200 records, Amazon = ~20, Target = ~20... etc. This ensures quick server responses and a smooth user experience for every user.

Since we have only one endpoint for status, I have filtered the date on the front. This is a hybrid approach and can not be used in production.

## How to test
- npm run test