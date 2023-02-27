
# Coupled Frontend and Backend Hosting

This segment will help you serve a React Application via ExpressJS on Heroku. As a result the application will be accesible into one hosted link. This tutorial will assume that you have a code editor, `npm`, and `git` on your computer.

# File Structure
There are a lot of files in this repository which might make it confusing on what each does.
- my-app: this folder contains the frontend React application 
- .gitignore: file that restricts some files from being pushed to git, we might want to do this to prevent sensitive information (API Keys) from being public
- package.json: contains all the libraries and scripts that we are going to use
- index.js: our backend application
- .env.example: what the environment variable file (.env) should look like. Put your environment variables in .env and not .env.example
- export_env.sh: custom script to export environment variables on Heroku App

# Instructions
<details>
  <summary> <h3> (Optional) Set up Firebase </h3> </summary>
This project includes a simple Firebase-hosted database (Firestore) which should be configured before starting the code. Additionally, it will also be referenced in a future section where we talk about configuring environment variables in Heroku.

Note: if you do not want to enable firebase, you don't have to. Just comment out the following section
<img width="680" alt="image" src="https://user-images.githubusercontent.com/39445369/164337721-f57372d9-1047-41da-b9ef-b0f5ce746c39.png">

1. Create a Firebase account by navigating towards https://firebase.google.com/
2. Create a new project (Google Analytics are optional)
3. Create a Service Account where you will get AdminSDK Information (Click "Generate new private key")
![image](https://user-images.githubusercontent.com/39445369/164480393-371ffc83-9892-4a6e-bd2e-2ed43f1c63a6.png)
4. Navigate towards Cloud Firestore and create a new Firestore with an initial collection of "user" and initial document "jonathan" (This is because the API we wrote queries for this :) )
![image](https://user-images.githubusercontent.com/39445369/164481048-2cf130c3-f630-45c5-aaab-3ba334bf9176.png)
5. Inside your repository, add the variables you got in STEP 3 for the private key into a `.env` file. An example of the file is in `.env.example`
</details>

## Run the Code
The code has already been written so lets verify that everything is working as expected. 
1. If you are planning on using Firebase features, add a `.env` file and fill in the values you get from the admin config file
2. Within the root directory (not my-app), run `npm run build` which will install all dependencies for the frontend and the backend as well as create the `build/` folder on the frontend (Look at package.json for more information)
3. Run `npm run start` to start the application -> your app should be running on `http://localhost:5000/`
4. If everything went well, then you should be seeing the default React app with "Testing, sending hello" on the screen
5. (Optional) Test that the Firebase endpoint on `http://localhost:5000/user`

## Deploy to Heroku

We will be using Heroku to host our application so there are a few things that need to happen
  
1. Create a Heroku Account and Project: https://dashboard.heroku.com/login
2. Download and install the Heroku Cli Tool: https://devcenter.heroku.com/articles/heroku-cli
3. Once the Cli tool is installed, navigate back to the directory and run `heroku login` -> if you get stuck, consult this [source](https://devcenter.heroku.com/articles/heroku-cli#:~:text=with%20these%20instructions.-,Get%20Started%20with%20the%20Heroku%20CLI,-After%20you%20install)
4. If you have made any changes, make a commit via `git commit -am "changes"`
5. Deploy this branch to heroku via `git push heroku coupled-hosting:main` -> we have `coupled-hosting:main` since heroku technically only allows you to push main branches in a repository.
6. Run `source export_env.sh .env` to export your environment variables from .env onto Heroku
7. If everything goes well, you should see something like this in your command line
![image](https://user-images.githubusercontent.com/39445369/164490214-06254a45-fbba-4188-bc80-8745513e859e.png)
![image](https://user-images.githubusercontent.com/39445369/164542541-472ecdb5-eb46-48ee-9393-7a0f00bf39b4.png)

If there are any issues, you can view the most recent logs by running `heroku logs --tail`


  

# HackTX Hosting Demo
Slides: https://docs.google.com/presentation/d/1UIqXMD7ADlhhheJRBxrne49oVTaMQN2d/edit?usp=sharing&ouid=113681470195127276939&rtpof=true&sd=true

## Overview
This repo is meant to serve as a tutorial to help you get started with hosting a full web stack application as quickly as possible.

The stack is as follows:
- ReactJS Frontend
- NodeJS/ExpressJS Backend
- Firebase Database

For the sake of brevity and scope, we will not spend too much time detailing the ins and outs of the stack. However, hosting applications on alternative stacks (frontend,backends,databases) should be similar and there are endless permutations of stacks and hosting solutions. 

There are two main branches which will serve as two semi-independent tutorials on hosting your web app (with more details on slides)
1. **coupled-hosting**: we will be hosting our backend and frontend on Heroku
2. **decoupled-hosting**: we will be hosting our backend on Heroku and frontend on Netlify

## Instructions
How to follow along with 
1. Clone by running `git clone https://github.com/Causality-C/hosting-demo.git`
2. Switch to a tutorial branch, ie.) `git checkout coupled-hosting`
3. Follow instructions on README.md and enjoy
4. (Optional) Leave any feedback or questions on the form below

## Questions and Feedback
We would love you to provide feedback on the presentation and code via this Google Form :)
https://forms.gle/QNgQxgFQMryvqgU86
