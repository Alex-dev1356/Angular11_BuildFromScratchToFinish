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
7. Run our application.