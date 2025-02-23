# Angular11_BuildFromScratchToFinish

STEPS Before we Start Coding:
1. First Command to create our project using Bash Terminal: ng new ng-video-game-db --style=scss
2. See the list of path project Available: $ls
3. Go to that path: cd ng-video-game-db
4. Add all the packages and materials: ng add @angular/material
5. For displaying the rating of our games we will install and use angular-gauge, to install: npm i angular-gauge

After Installing everything that we needed:
1. Import all the packages inside app.module.ts
2. Import Forms Module and HTTP Module
3. Next all the external modules such as GaugeModule, MatTabsModule, MatIconModule, MatFormFieldModule and MatSelectModule
4. One done importing, we need to add all those items inside our @NgModule > imports[.....].
5. Remove the global styles from styles.scss files.
6. Modify the styles.scss with our code.
7. Navigate to our directory: cd ng-video-game-db. Run our application: ng serve

Creating a Search Bar Component
1. First Navigate to our app folder and from there we'll create the search bar component using Angular CLI: cd ng-video-game-db, cd src, cd app
2. Create a new search bar component: ng g c search-bar
3. Once done, get the selector of the search bar component from search-bar.ts and put it inside app.component.html.
4. Modify the search bar html file.
5. Apply CSS Styles into it to make it more pleasing.
6. Enabling the Search functionality in both HTML and TypeScript file.

Creating our HomePage Component
1. First Navigate to our app folder and from there we'll create the search bar component using Angular CLI: cd ng-video-game-db, cd src, cd app
2. Create a new search bar component: ng g c home

Creating Routes for each of our components
1. On app-routing.module.ts, we'll create path which is a default path
2. Inside const routes:Routes = [{....},{.....}], we want all our searches to land on Home Component.
3. The Component for both of the routes ('' and 'search/:game-search') is the Home Component.
4. Create a Router outlet inside our app.component.html 
