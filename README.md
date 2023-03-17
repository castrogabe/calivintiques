# MERN Calivintiques eCommerce antique website

# Calivintinques Layout components and pages first commit

1. Create React App
2. Add Bootstrap and all css
3. Header & Bottom Header, Footer & Bottom Footer
4. A few pages (Home, About, Gallery)
5. Create Git Repository

## Second Commit

1. Add Product in pages and Data.js for static data

# Third Commit create backend

1. create route for api/products
2. update and fetch products from backend using axios
3. get state from useReducer
4. update HomeScreen.js

# Fourth Commit by Reducer Hook

1. define reducer
2. update fetch data, get state from useReducer in Home
3. create product and rating components
4. Use rating in product component
5. Add Helmet to pages and index.js
6. Jumbotron with typewriter effect in Home and components add Jumbotron.js
7. Create Product details
8. Create loading component
9. Create message component
10. Add React spinner in LoadingBox
11. utils.js to define error function
12. update server.js in backend

# Fifth Commit

1. Add \_id number to products array in data.js
2. Create CartScreen
3. add app.get to server.js to fetch products by \_id
4. Update index.js for React 18

# Sixth Commit Signin and Cart pages

1. Create Signin page
2. Connect to MongoDB using Atlas (create account if you don't have one)
3. Add .env to (backend)
   add: JWT_SECRET = your secret word
   add: MONGODB_URI = your mongo_db connection
4. Update and install all dependencies in {}package.json needed in backend
5. Signin to API
6. read data.js to database (fix data.js, all lowercase)
7. fix components > Product.js in frontend (Line 16)
8. fis pages > Product.jd (Line 81)
9. Comment out \_id's in data.js (backend)
10. Add models folder > backend/models/productModel.js
11. Add routes folder > backend/routes/productRoutes.js
12. backend/routes/seedRoutes.js
13. backend/routes/userRoutes.js
14. backend/models/productModel.js
15. backend/models/userModel.js
16. backend/utils.js(root)
17. update server.js
18. add SigninScreen to App.js
19. update Header.js for signin link
