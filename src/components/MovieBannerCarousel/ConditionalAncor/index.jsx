import React from 'react';
import PropTypes from 'prop-types';

export default function ConditionalAncor({ href, shouldRender, children }) {
  if (shouldRender) {
    return <a href={href}>{children}</a>;
  }
  return children;
}

ConditionalAncor.propTypes = {
  href: PropTypes.string.isRequired,
  shouldRender: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
