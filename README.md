#Dev tinder frontend

-created a vite + react project
-remove unnecessary code
-daisy ui
-tailwind
-install daisy ui
-add navbar component to app.jsx
-Install react router dom
-create BrowserRouter> routes>route= Body >RouteChildren
-Create an outlet in your body component
-create a footer
-create a login page
-install axios
-cors-install cors in backend => ass middelware to configuration:origin,credentials:true
-whenever you're making api call so password={withCrendentials:true}
-install reduc toolkit-https://redux-toolkit.js.org/tutorials/quick-start
- install react-redux + @redukjs/toolkit =>configure Store =>provider>createSlice=>add reducer to store


Body
     NavBar
     Route=/ = feed
     Route=/login = feed
     Route=/connection = feed
     Route=/profile = feed
login page     



deployment

login in aws
launch instance
chmod 400<secret>.pem

ssh -i <paste from aws>

install node version 

git clone

frontend
   -npm install
   -npm run build
   -sudo apt update
   -sudo apt install nginx
   -sudo systemctl start nginx
   -sudo systemctl enable nginx
   -copy code from dist folder to enginex http server to /var/www/html command sudo scp -r dist/* /var/www/html/
   enable port 80 of your instance

