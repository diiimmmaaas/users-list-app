# Test app

## Description:

The “List” page is a tab set. Each tab has a simple table. It has 2 columns. First column is “Name”.
Second column is number of "Phone". It’s rows are objects from the JSON, filtered by “type” property.
The “Income” tab will display only those objects, which have “type” === “income”. Other 3 tabs have exactly same filtering logic.
The URL of the page should be: /navigator?tab=<0..3>, where tab query parameter corresponds to a currently selected tab, and the type by which the table is filtered.

## Stack:

Angular, Bootstrap 4, Typescript

## Installation:

After cloning the repository, install the dependencies with the command:

```javascript
yarn
```

or

```javascript
npm install
```

then run with the command:

```javascript
yarn start
```

or

```javascript
npm start
```
