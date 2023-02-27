
# Decoupled Frontend and Backend Hosting

This segment will help you serve an node/express application via AWS Lambda and React frontend using vercel. This tutorial will assume that you have a code editor, `npm`, and `git` on your computer. Additionally, we assume you have an AWS account set up.

# File Structure
There are a lot of files in this repository which might make it confusing on what each does.
- my-app: this folder contains the frontend React application 
- .gitignore: file that restricts some files from being pushed to git, we might want to do this to prevent sensitive information (API Keys) from being public
- package.json: contains all the libraries and scripts that we are going to use
- index.js: our backend application

# Instructions
## AWS + Serverless Setup 
1. Make sure you have an AWS account and an IAM role with the following permissions:
    - AmazonAPIGatewayAdministrator
    - AmazonS3FullAccess
    - AWSCloudFormationFullAccess
    - AWSLambda_FullAccess
    - CloudWatchLogsFullAccess
    - IAMFullAccess
2. Go to the `security credentials` tab and create an access key.
3. Install the serverless framework
    ```
    npm install -g serverless
    ```
4. Configure serverless:
    ```
    $ sls config credentials \
    --provider aws \
    --key PUBLIC_KEY \
    --secret SECRET_KEY
    ```
5. Install node dependencies with `npm install`
6. Confirm installation with offline run `sls offline start --httpPort 5000`
7. Deploy with `sls deploy`

## Run React Code
The code has already been written so lets verify that everything is working as expected. 
1. Go to the react directory `my-app`
2. Run `npm run start` to start the application -> your app should be running on `localhost:3000`
3. If everything went well, then you should be seeing the default React app with "Testing, sending hello" on the screen.

## Vercel Setup
We are going to deploy the frontend app on vercel, a common hosting platform for frontend (and now backend) applications. Also make sure that you have the repository forked.
1. Make sure you have a vercel account by visiting [this website](https://vercel.com/).
2. Add a new project and add your forked repository.
3. Choose to deploy under `my-app` folder and choose `create-react-app`.
4. Click Deploy