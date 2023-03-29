import React from 'react';

export default function ConditionalAncor({ href, shouldRender, children }) {
  if (shouldRender) {
    return <a href={href}>{children}</a>;
  }
  return <>{children}</>;
}
