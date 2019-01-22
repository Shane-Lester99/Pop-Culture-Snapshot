# How to use

$> node server/index.js

# How to contact API endpoints from localhost:

- First run the 'how to use command'

$> node server/index.js

- Make sure it says success a bunch of times in a pretty much random order (thats async JS at work :) )

- If that is the case, it is working so far! You have the daily data loaded into the DB and ready to be queried

- Now you must check the port. To do this scroll up to the top of the terminal (where you entered your command) and check the port number. It will be either 5000 or 3000

- Say the port is 3000. Now go to postman (or wherever you are contacting the API endpoints from)

## To get the daily data (assuming its jan 22nd):

    - localhost:3000/api/daily/2019-01-22 via get request

        - This will return all the tv and movie data (for now, pretend it returns all data)

## To get the user data

    - localhost:3000/api/user via get // This will return all the user data 

    - localhost:3000/api/user via post

        - In js body, have:

            - {
                "accountName": "Shane",
                "description": "just writin some documentation",
                "password": "insecure_password",
                "userPhoto": somePhoto
            }
    - For now, please dont include the photo because the endpoint is ready to handle it. But feel free to include a string. If you leave it blank, it will be a default photo. THAT IS THE ONLY FIELD THAT CAN BE LEFT BLANK!


- Coming soon in next git push:
    - get request for user will be able to pass a image successfully. Assume image can be png, jpg, or svg
- After that, the next issue:

    - Put request to update the data for a user. Also can take in an array of ids and the type (say twitter) and store the media for retrieval later

    - Get request will have the media objects returned that the user stored

## IMPORTANT NOTE:
- Currently the database deletes and recreates itself and recalls the API on each sync. The reason for this is so we dont have a messy database as we are testing the development and production database. Once the Heroku scheduler is added then we wont have to do that anymore :)


 
