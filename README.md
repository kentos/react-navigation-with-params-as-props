# react-navigation-with-params-as-props

This is a higher-order component (hoc) which spreads params as props for screens that needs it.

You could easily do this yourself. However it's more npm to use this package. And I appreciate all the feedback I can get.

## How to use
1) yarn add react-navigation-with-params-as-props `(not working right now, it's only on github atm)`
2) `import WithNavigationParamsAsProps from 'react-navigation-with-params-as-props'`
3) And then wrap your component like this: `WithNavigationParamsAsProps(Component)`

Now you can access params sent via `react-navigation` as props. Easy as 🥧.