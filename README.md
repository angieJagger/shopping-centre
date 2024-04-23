** Shopping-centre project **

The shopping-centre project is a web application, which is an online store. The store supports the following processes:
- user login/registration using oAuth2,
- order handling,
- payment processes with Stripes,
- product database saved in the mySQL database,
- sending order confirmation by e-mail.

Technologies used:
- MySQL database,
- Spring Boot version 3.2.2,
- Okta oAuth2 version 3.0.6,
- Stripe for Java version 25.0.0,
- JDK version 21.0.2
- Angular version 17.1.1
  
![image](https://github.com/angieJagger/shopping-centre/assets/140113471/da204393-4e5f-4741-a49e-138f684be58d)



** Application launch guide **
This guide is segregated into 3 main parts.

The first part of the guide talks about installing the MySQL database, MySQL WB and finally running the sql scripts required for the ecommerce project.
The second part talks about running the Spring Boot E-Commerce App.
The third part talks about running the Angular Frontend E-Commerce App.
Running MySQL Server:

1. Download the source code attached to 01-starter-files/db-scripts folder and extract the directory from the zip.
2. Open 01-starter-files directory. Lets run the scripts under the 01-starter-files/db-scripts directory. To run those scripts and look at the results later, you have to install a mysql client on your machine. So, We will install MySQL Workbench.
3. Install choco. choco is a prominent package manager for Windows. Note: Please make sure you open Windows PowerShell as Administrator for all software installations.
4. Download MySQL community server from power shell using choco install mysql. Note: While installing the softwares with choco, accept to run all scripts by giving A.
5. You can start mysql as follows: hit windows key + R
6. Once you're in Services, find MySQL and start it.
7. Now, inorder to run those starter sql scripts under 01-starter-files/db-scripts , lets install MySQL Workbench. Download MySQL Workbench using choco install mysql.workbench. You should see MySQL WB on start in Windows. Now, to run all the scripts, open all the SQL scripts one-by-one and run execute them by clickingon the ⚡️.

Running the Spring Boot App:

1. Install jdk on your machine from power shell using choco install zulu11. Open your cmd prompt, do java --version which should give you the java version.
2. Set JAVA_HOME (as Administrator) from cmd. setx -m JAVA_HOME "C:\Program Files\Zulu\zulu-11". If you've installed java using choco, it should be installed in the above specifiec path. If not, make sure you have the right path to the JDK. To check if you've set the path right, run refreshenv in the same cmd prompt and then run echo %JAVA_HOME% gives you the path you've just set.
3. Now, cd into 02-backend/spring-boot-ecommerce. Once you're inside, please change the java version to 11 in the pom.xml. This is just because we have installed java11 above. We cannot install java13 distribution using choco (probably because java13 isn't LTS). Now, run mvnw clean install. This might take a couple minutes.
4. Once everything goes well in step 3, to start your application run .mvnw spring-boot:run. This will run your backend application. Once your application is up, go hit https://localhost:8443/api/ on your browser and you should see something as follows: (Note: Make sure your mysql server is up)

Running the Angular App:

1. Install node on your machine using choco. choco install nodejs-lts . This will install install nodejs v16 (lts).
2. Running node -v && npm -v from cmd should give you their respective version numbers.
3. Install the angular-cli globally from cmd prompt by running: npm install -g @angular/cli. ng version should give you angular-cli version number.
4. Now, navigate to our front-end app at 03-frontend/shopping-centre. Once you're inside the shopping-centre directory, run npm install.
5. Now, run ng build (this might take a couple minutes) and then npm start.
6. You should have the front-end ecommerce app up and running at https://localhost:4200. With that, you should have a fully functional E-Commerce App running on your machine.
