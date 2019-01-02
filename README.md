# sku
Lost&found Application
====
Lost&found Application is a platform on your side to support you when you have lost / found something<br>
Inspired by  [Troov](https://www.troov.com)<br>
![](https://github.com/kangjy123k/sku/blob/master/public/img/index.PNG)
●Installation:
----
    First make sure turn your current path into where the files download,
    then assume you have already npm installed,
    hit in the command line 
    npm start
    finally enter the url localhost:4000

●Tech stack:
----
    #Frontend:
    --html 
    --css 
    --javascript 
    --ES6
    #Backend:
    --node 
    --express
    #Database:
    --mongoDB(with mongoose)
    #Middleware:
    --express-edge
    --body-parser
    --express-fileupload
    --connect-mongo
    --express-session
    --connect-flash
    --bcrypt

●Content:
----
 *inscription:
   first click the "register" button and input the account infos,
   if the format is not required,it would alert on the page,
 
 *login:
   Now that you have an account ,then click "login" and enter your account.
 
 *logout:
   Once you have finished your visit,click "logout" which is exclusive for activated user
 

 *Object CRUD:
    when you post with the info of lost items,you can create/update/delete on this post.<br>
    create(prerequisite:must log in!):click "new post" button and input your lost items.<br>
    update:just click the post and modify your infos.<br>
    delete: click the delete button on specific post.
    
    
 *List Objects:
    Once you log in ,you can see your history post displayed on homepage
    
    
 *Error page:
    When you turn to the implicit link by mistake,it would return a 404 page.
