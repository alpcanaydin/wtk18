import React from 'react';
import ContentLoader from 'react-content-loader';

const Placeholder = () => (
  <ContentLoader width={700} height={272} speed={2} primaryColor="#f3f3f3" secondaryColor="#ecebeb">
    <rect x="0" y="0" rx="8" ry="8" width="120" height="18" />
    <rect x="136" y="0" rx="8" ry="8" width="250" height="18" />

    <rect x="0" y="50" rx="6" ry="6" width="600" height="8" />
    <rect x="0" y="66" rx="6" ry="6" width="700" height="8" />
    <rect x="0" y="96" rx="6" ry="6" width="670" height="8" />
    <rect x="0" y="112" rx="6" ry="6" width="500" height="8" />

    <rect x="0" y="144" rx="6" ry="6" width="670" height="8" />
    <rect x="0" y="160" rx="6" ry="6" width="600" height="8" />
    <rect x="0" y="176" rx="6" ry="6" width="580" height="8" />
    <rect x="0" y="192" rx="6" ry="6" width="600" height="8" />
    <rect x="0" y="208" rx="6" ry="6" width="480" height="8" />

    <rect x="0" y="240" rx="8" ry="8" width="100" height="32" />
  </ContentLoader>
);

export default Placeholder;
