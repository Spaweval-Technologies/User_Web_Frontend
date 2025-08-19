'use client';
import { Fragment } from 'react';

//css
import { BreadcrumbWrapper, Crumb, Separator } from './index.styles';

type Props = {
  pathName: string;
};

/**
 * Breadcrumb component for displaying navigation paths.
 * Currently a placeholder for future implementation.
 * @param {string} props.pathName - The current URL path used to generate breadcrumb segments.
 * @returns {JSX.Element} A React component that renders a breadcrumb navigation.
 */
const BreadCrumb = ({ pathName }: Props) => {
  const pathArray = pathName.split('/').filter((segment) => segment !== '');

  const createPath = (index: number) => '/' + pathArray.slice(0, index + 1).join('/');

  return (
    <BreadcrumbWrapper>
      <Crumb href="/">Home</Crumb>
      <Separator>.</Separator>
      {pathArray.map((path, index) => (
        <Fragment key={index}>
          <Crumb href={createPath(index)}>{decodeURIComponent(path).replace(/-/g, ' ')}</Crumb>
          <Separator>.</Separator>
        </Fragment>
      ))}
    </BreadcrumbWrapper>
  );
};

export default BreadCrumb;
