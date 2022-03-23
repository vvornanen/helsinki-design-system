import React from 'react';

import { CookieTable } from './CookieTable';

export default {
  component: CookieTable,
  title: 'Components/CookieTable',
  parameters: {
    controls: { expanded: true },
  },
  args: {},
};

export const Example = (args) => {
  const groups = [
    {
      groupId: 'jotain',
      rows: [
        {
          id: 'blob',
          name: 'blob cookie',
          hostname: 'siteimproveanalytics.fi',
          path: '/',
          description: 'Statistic cookies help website owners to understand their customer behaviour.',
          expiration: 'Session',
        },
        {
          id: 'plib',
          name: 'plib cookie',
          hostname: 'hel.fi',
          path: '/',
          description: 'This cookie stores complex preferences and settings.',
          expiration: 'Session',
        },
        {
          id: 'Lorem',
          name: 'Lorem cookie',
          hostname: 'doubleclick.net',
          path: '/',
          description: 'The Lorem cookie enables targeted communication.',
          expiration: '365 days / 1 year',
        },
      ],
    },
    {
      groupId: 'jotain-muuta',
      rows: [
        {
          id: 'Ipsum',
          name: 'Ipsum cookie',
          hostname: 'hel.fi',
          path: '/',
          description: 'The cookie is used to maintain the visitors visit.',
          expiration: '-',
        },
        {
          id: 'Zombie',
          name: 'Zombie cookie',
          hostname: 'helsinkikanava.fi',
          path: '/',
          description: 'Zombie cookie allows web traffic tracking.',
          expiration: 'Session',
        },
      ],
    },
  ];

  return (
    <div style={{ maxWidth: '1184px' }}>
      <CookieTable groups={groups} />
    </div>
  );
};
