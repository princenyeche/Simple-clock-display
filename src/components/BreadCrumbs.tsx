import __noop from '@atlaskit/ds-lib/noop';
import Breadcrumbs, { BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import type {JSX} from 'react';
import type {BreadCrumbProps} from "../scripts/DataTypes.ts";

function BreadCrumbs({visibility, childPage="", parentPage=""}: BreadCrumbProps): JSX.Element {

  return (
   <div style={{ margin: '6px', padding: '7px'}}>
   {visibility === true ?
   <Breadcrumbs onExpand={__noop}>
    <BreadcrumbsItem text={parentPage} key={parentPage} />
    <BreadcrumbsItem text={childPage} key={childPage} />
  </Breadcrumbs>
  : <span> </span>
  }
  </div>
  );
}

export default BreadCrumbs;