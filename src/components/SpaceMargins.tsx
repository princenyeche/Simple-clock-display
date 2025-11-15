import PageHeader from '@atlaskit/page-header';
import {Stack, Box} from '@atlaskit/primitives';
import BreadCrumbs from './BreadCrumbs';
import type {JSX } from 'react';
import type {SpaceMarginProps} from '../scripts/DataTypes';


function SpaceMargins({pageTitle, childPage, visibility, parentPage}: SpaceMarginProps): JSX.Element {
  const spaceMarginStyles = {
      alignItems: 'start',
      marginLeft: '-370px'
  }
  return (
<Stack>
    <Box style={spaceMarginStyles}>
        <PageHeader breadcrumbs={<BreadCrumbs visibility={visibility} childPage={childPage} parentPage={parentPage} />}>
     {pageTitle}
    </PageHeader>
    </Box>
   </Stack>

  );

}

export default SpaceMargins;