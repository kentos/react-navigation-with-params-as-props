import React from 'react';
import _ from 'lodash';

const WithNavigationParamsAsProps = WrappedComponent =>
  class WithParamsAsPropsContainer extends React.Component {
    render() {
      return <WrappedComponent {...this.props} {..._.get(this, 'props.navigation.state.params')} />;
    }
  };

export default WithNavigationParamsAsProps;
