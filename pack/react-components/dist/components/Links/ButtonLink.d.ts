import React from 'react';
import { LegacyButtonClassNameProps } from '../../utils/getLegacyButtonClassNames';
interface ButtonLinkProps extends LegacyButtonClassNameProps {
    children: React.ReactNode;
    href?: string;
    rel?: string;
    type?: string;
    target?: string;
}
export declare function ButtonLink(props: ButtonLinkProps): JSX.Element;
export {};
