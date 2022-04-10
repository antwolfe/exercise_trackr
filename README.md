    
# Table Of Contents
- [Overview](#overview)
- [My process](#process)
    - [Built with](#built)
    - [ What I learned](#learned)
    - [Continued development](#devlopment)
    -  [Useful resources](#resources)
- [Author](#author)


<a name="overview"></a>
## Overview
This project was made following an outdated Youtube tutorial. There was an updated one, but I wanted to make this. There were challenges along the way dealing with outdated dependencies, and because I structured my project differently. There was one big challenge dealing with the way the server got installed. Whew, I felt so good when I finally figured that one out! 

At the time of this updated README, the project needs an update to the edit link. The tutorial uses an outdated way to retreive the specific values needed in the Edit Component. I am off to exploring deeper into programming with JavaScript to hope to understand the best way to implement this feature.

I'm proud of how far I got in updating the project so far.

<a name="process"></a>
## My Process

<a name="built"></a>
### Built With
- HTML5
- Bootstrap
- JavaScript
- MongoDB
- React
- Node

<a name="learned"></a>
### What I Learned
By changing random things while following along the tutorial I learned that:
1. If nodemon is installed globally in the project and React is not, this will cause two versions of the React DOM/React to be installed:
- This might cause this [Invalid Hook Call](https://reactjs.org/warnings/invalid-hook-call-warning.html) issue
- You cannot have a hook in a class


2. Using updated versions of node or other modules might mean that old packages have to be used or there will be an error:
- You can configure npm to try to force the install using `npm install --force` or `npm install --legacy-peer-deps`
- This did not work in my case, I had to figure out a different way to get the package to work
- `npm config set legacy-peer-deps true` configures the npm to ignore legacy dependencies and to install anyway
- While I understand what happened, my definitions for pkg vs deps vs modules vs libs is not as solid as I'd like and I want to be able to explain this further


3. First time using Bootstrap
    - I had a lot of fun playing around with Bootstrap, I learned a little about how to use it in a project. I didn't use too much here though.


4. How to connect a database to a backend server
    - I've always wondered how this was done, now thanks to this project I know!
    - I used the Axios API to connect the server to the database by using axios get and post methods
    - This API made things a lot simpler than I imagined 


5. Promises and Resposes
    - I've gotten a very basic understanding of how to code them, I still need to dive into what they are.

6. What it takes to complete a fullstack application
    - This small project gave me a taste of what it takes to build an app on both ends and it was insightful in opening up all the possibilites I can explore.
    - Now I have a focused understanding of how I can create seperate components to come together into one application



<a name="development"></a>
### Continued Development
1. I still have much to learn about Promises, Responses, Classes and React
2. This project still needs a working Edit function so I'll be working on that after I learn the required knowledge


<a name="resources"></a>
### Useful Resources
- [The Youtube Video](https://www.youtube.com/watch?v=7CqJlxBYj-M)


<a name="Author"></a>
## Author
-[Github](https://github.com/antwolfe/)



 