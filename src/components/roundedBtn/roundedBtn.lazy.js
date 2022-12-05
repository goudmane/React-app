import React, { lazy, Suspense } from 'react';

const LazyRoundedBtn = lazy(() => import('./RoundedBtn'));

const RoundedBtn = props => (
  <Suspense fallback={null}>
    <LazyRoundedBtn {...props} />
  </Suspense>
);

export default RoundedBtn;
