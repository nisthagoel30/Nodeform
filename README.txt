Requirements:
1-MySQL Server >= 5.6
2-Node.js
3-Express - Installed with command: npm install express --save.
4-Express Sessions - Installed with command: npm install express-session --save.
5-MySQL for Node.js - Installed with command: npm install mysql --save.

Startup Instructions:

1-Create a new directory called NodeForm, which can be created anywhere on your environment. 
2-Open command line as administrator, and navigate to your new directory with the following command: cd <directory_path>
3-Run the command: npm init - it will prompt us to enter a package name, enter: login. When it prompts to enter the entry point, enter login.js.
4-We need to install the packages listed in the requirements, so we must execute the commands listed in the requirements above.
5-After that the file structure and code can be followed as uploaded.

NOTE:change the mysql root password in the js file according to yours.

6-MYSQL DATABASE TO BE CREATED IN MYQSL COMMAND LINE(or other appropriate framework):
''' 
    CREATE DATABASE IF NOT EXISTS nodeforms DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci; USE loginapp;
    CREATE TABLE IF NOT EXISTS form_entries ( name varchar(50) NOT NULL, email varchar(100) NOT NULL ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
'''

7-After this code can be run using "node login.js" in terminal and run on localhost 3000 in your browser.
