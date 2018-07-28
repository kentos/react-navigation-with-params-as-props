# react-navigation-with-params-as-props

This is a higher-order component (hoc) which spreads params as props for screens that needs it.

It's probably mostly usefull in projects that aim to implement [react-navigation](https://github.com/react-navigation/react-navigation) as a replacement. At least that was the case for me. Some components relied on gettings props set.

You could easily do this yourself. However it's more npmish to use this package. And I also appreciate all the feedback I can get.

## How to use
1) `yarn add react-navigation-with-params-as-props` (not working right now, see below)
2) In the file where applicable: `import WithNavigationParamsAsProps from 'react-navigation-with-params-as-props'`
3) And then wrap your component like this: `WithNavigationParamsAsProps(Component)`

Now you can access params sent via `react-navigation` as props `(this.props.param)`. Easy as 🥧.

## How to package.json at the moment
For now you can add this to your dependecies:

`"react-navigation-with-params-as-props": "kentos/react-navigation-with-params-as-props#da504159e2e6eb24d70f2e1535b63ad5f09de848"`

It's ugly as fuck, but it works and points to my initial commit which is somewhat the first working version and probably the only version you'll need. I'll probably regretting doing this, but you live and you learn! 🍻

## Submit issues
If you for some odd reason needs to add an issue, be nice and as clear as possible. I'm not the worlds best open-source project creator. You can always reach out the me on [twitter/@kentos](https://twitter.com/kentos) or just tell me how 🥧 this is.
