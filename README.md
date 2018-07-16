## Requirements
* node `10.6.0`

Development
-----------
To run the code in your development environment:

1. Run `npm install`

After all dependencies installed:

1. Start the development server with `npm start`
2. Point your browser to [http://localhost:3000](http://localhost:3000)

Run test
`npm test`

#### Architecture
- Separation of concerns using re-ducks folder structure
- Feature based module with its own store and actions.
- Use of Typescript, can be daunting for those who aren't used to types in javascript. 
Besides the usual benefits at compile time, it forces one to think in design first before coding. 
Self describes codebase and provides a complete picture of all the data, their types and shapes etc. involved.
Enables to deploy code with confidence and mitigating further any risks with it.

#### Issues
- Not all Icons available for all pairings from 'react-cryptocoins' module.
- No mention on how to format the numbers on UI, used bitfinex's home page as an example and formatted accordingly.

#### Assumptions

- Only dealt with happy path for fetch requests, not covered any error messages on UI/UX due to any api failures.
- Locale formatting for Ticker Details and List page.
- No search needed for a long list (though would have liked to if more time available).
- Icon is blank for those cryptos that are not available from 'react-cryptocoins' module.
- Icon is only shown for the 1st part of the pair, for eg. BTC/USD, icon is only shown for BTC.
- Used Antd Table for Ticker list, which is probably appropriate if in case we want to add filtering or sorting on the tabular data.