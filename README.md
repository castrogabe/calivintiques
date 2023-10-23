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

# Seventh Commit-CSS, Jumbotron

1. CSS adjustments for Responsive logo in Navbar.Brand
   left side use ClassName="me-auto" (Line 22)
   CSS realignment by category
2. Add toast notification to components > Product.js (Line 29-32)
   app.js (Lines 11-12, 20)
3. Jumbotron with react-typewriter-effect
   add components > Jumbotron.js
   add Jumbotron in Home.js (Lines 46-50)

# Eight Commit-Order History

BACKEND
folder: models > orderModel.js
folder: routes > orderRoutes.js
server.js > update
utils.js > update

FRONTEND
folder: pages

1. Create OrderScreen
2. Create OrderHistoryScreen
3. Create ShippingAddressScreen
4. Create ProfileScreen

folder: components

1. Create Bottom header for categories.
2. Create SideBar for categories (optional), Header1
3. Create Categories for categories (optional), Header
4. Create SearchScreen (optional).
   components/Header.js without searchBar or sideBar
   components/Header1.js with searchBar and sideBar (optional)
5. Update App.js

# Ninth Commit-Admin

BACKEND
folder: models > updated orderModel, productModel
folder: routes > updated orderRoutes, productRoutes, userRoutes

1. Added uploadRoutes
   Modified server.js, utils.js

FRONTEND
folder: components > AdminRoute.js, protectedRoute.sj

folder: pages >

1. Modified Cart.js
2. Create Dashboard.js
3. Modified Order.js
4. Create OrderList.js
5. Create ProductEdit.js
6. Create ProductList.js
7. Create Search.js
8. Create UserEdit.js
9. Create UserList.js

Modify > App.js, index.js, package.json

# Tenth Commit-Contact Page, Stripe, PayPal, Multiple Images

. Create PayPal Account (sandbox)
. Create Stripe Account (test account)
. Create ContactPage update App.js
. Rate and review products
. Pagination on HomeScreen
. Multiple Images on Product Page and Image Magnifier
. Rename Product.js to ProductMag.js so it is less confusing with components: product.js

BACKEND
folder: models: productModel.js (Line 8), messageModels added
folder: routes: messageRoutes added, orderRoutes.js, productRoutes added (13-222), stripeRoutes
npm i stripe
server.js > update

FRONTEND
npm i stripe, paypal
folder: components > StripeCheckout.js added
Header.js > update
Footer.js > update
App.js > update
index.css > update

folder: pages >

1. Cart.js > update
2. Added Contact.js
3. Dashboard.js > update
4. Home.js > update
5. Added Messages.js
6. Order.js > update
7. OrderHistory.js > update
8. OrderList.js > update
9. PaymentMethod.js > update
10. PlaceOrder.js > update
11. ProductEdit.js > update
12. ProductList.js > update
13. ShippingAddress.js > update
14. UserList.js > update
15. Product > update multiple images carousel & react-image-magnify

# Eleventh Commit-ProductMag Lightbox, Options, nodemailer purchase receipt

. Add Toast notifications to components > Product.js
. Low Quantity Alert!
. Optional vertical thumbnails for ProductMag.js or horizontal thumbnails for ProductMagRow.js
. Add Lightbox and carousel for ProductMag.js
. Add nodemailer for payment receipt

BACKEND
folder: routes
orderRoutes > update

config.js > update
utils.js > update

FRONTEND
folder: components
Product.js > updated

folder: pages
Home.js > updated
ProductMag > updated
ProductMagRow > added (optional use)
Messages.js > updated

index.css > updated

# Twelfth Commit-Stripe Delivery Receipt thru nodemailer, sidebar toast notification

. Modify toast notification and create sidebar for desktop, keeping toast notification for mobile
. Add Delivery email information thru nodemailer for admin (added deliveryDays, carrierName, trackingNumber)

BACKEND
folder: models
orderModel.js > update (added deliveryDays, carrierName, trackingNumber)

folder: routes
orderRoutes.js > update (added deliveryDays, carrierName, trackingNumber)
stripeRoutes.js > update

utils.js > update

FRONTEND
folder: components
Sidebar.js > added
Product.js > updated

folder: pages
Home.js > updated (added sidebar toast notification in desktop)
Search.js > update (added sidebar toast notification in desktop)
Order.js > updated (added deliveryDays, carrierName, trackingNumber)
OrderList.js > updated (added deliveryDays, carrierName, trackingNumber), add user info for admin mailing @ contact info
OrderHistory.js > updated (added deliveryDays, carrierName, trackingNumber)

# Thirteenth Commit-Add Skeleton and replace LoadingBox component

FRONTEND
npm i react-loading-skeleton
css > add css marked for Skeleton.css

folder > components:
Skeleton.js
SkeletonDashboard.js
SkeletonHome.js
SkeletonMessage.js
SkeletonOrderHistory.js
SkeletonOrderList.js.js
SkeletonProductList.js
SkeletonProductMag.js
SkeletonUseEdit.js
SkeletonUserList.js

folder > screens:
Dashboard.js (Lines 8, 37-39, 60)
Home.js (Lines 12, 49-50, 114-122)
Messages.js (Lines 9, 71-73, 130-138)
OrderHistory.js (Lines 3, 9, 36-38, 74-80)
OrderList.js (Lines 3, 11, 57-59, 122-130)
ProductList.js (Lines 10, 81-83, 160-170)
ProductMag.js (Lines 26, 71-73, 173)
UserEdit.js (Lines 10, 50-52, 101, 137)
UserList.js (Lines 3, 11, 57-59, 112-120)

# Fourteenth Commit-Modify Backend Utils.js, Password reset added

BACKEND
utils.js > update for date format (mm/dd/yyyy)

folder: models
userModel.js > updated

folder: routes
userRoutes > updated

FRONTEND
folder > pages
Signin.js > updated
ForgetPassword.js > added
ResetPassword.js > added

App.js > updated (ForgetPassword.js, ResetPassword.js)

# Fifteenth Commit-Fix Backend routes

BACKEND
folder: routes
userRoutes > updated

# Sixteenth Commit-Regex complexity for password

BACKEND
folder > routes
userRoutes > updated

FRONTEND
folder > pages
Signup.js > updated
ResetPassword.js > updated
AboutUs.js > removed / App.js / Header.js / Header.js / pages

index.css > update image size in components > Product.js

# Seventeenth Commit-Tweaks

BACKEND
folder > routes
orderRoutes.js > updated

FRONTEND
folder > components
SkeletonProductMag.js > updated

folder > pages
ForgetPassword.js > updated
ProductEdit.js > updated
ProductMag.js > updated
ResetPassword > updated
Signin.js > updated
UserEdit.js > updated
UserList.js > updated

# Eighteenth Commit-Images for data.js

# Nineteenth Commit-React-Lazyload

FRONTEND
npm install react-lazyload

folder > components
Product.js > updated for Lazyloading images

# Twentieth Commit Final

BACKEND
.env.example > updated with correct newsecretword for jwt
utils.js > updated with website: exoticwoodpen.com
