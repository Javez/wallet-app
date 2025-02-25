# Wallet App
# The project is written in Typescript + React

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Important](#important)

## Installation (Fork and install if needed)
Packages: npm install react react-scripts loader-utils react-dom react-router-dom sass framer-motion @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

## Usage
It will automatically load in sandbox, just reload the page if its dont appear

## Contributing
1. Fork the repository.
2. Install dependency if needed
3. Make your changes.
4. Use your app

## Important

According to the requirements set in the task (and the absence of some):

- The project does not have Redux or similar (the basic state manager of React, React Context is used).
- The project has basic styles for mobile design (no desktop/tablet).
- A frame motion has been added for a more pleasant transition through the pages.
- The TransactionDetails page is a nested successor of the TransactionList using the Outlet component and also with the addition of the ID of each detail.
- Data in the application is simply obtained from JSON and therefore their processing looks poor.
- For the list of transactions in a real project, it is necessary to add (Lazy Skeleton for images and dynamic text), (React virtualization).
- Since the design was taken from pictures (without access to its parameters, e.g. Figma), some elements may differ minimally.
- The project has replaced the usual routing logic, because CodeSandbox handles it incorrectly.
- The project was made in a hurry, so it may have a small number of omissions.