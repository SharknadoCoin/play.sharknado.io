/**
 * Welcome to @reach/menu-button!
 *
 * An accessible dropdown menu for the common dropdown menu button design
 * pattern.
 *
 * @see Docs     https://reach.tech/menu-button
 * @see Source   https://github.com/reach/reach-ui/tree/main/packages/menu-button
 * @see WAI-ARIA https://www.w3.org/TR/wai-aria-practices-1.2/#menubutton
 *
 * TODO: Fix flash when opening a menu button on a screen with another open menu
 */
import * as React from "react";
import type { Position } from "@reach/popover";
import type * as Polymorphic from "@reach/utils/polymorphic";
/**
 * Menu
 *
 * The wrapper component for the other components. No DOM element is rendered.
 *
 * @see Docs https://reach.tech/menu-button#menu
 */
declare const Menu: React.FC<MenuProps>;
/**
 * @see Docs https://reach.tech/menu-button#menu-props
 */
interface MenuProps {
    /**
     * Requires two children: a `<MenuButton>` and a `<MenuList>`.
     *
     * @see Docs https://reach.tech/menu-button#menu-children
     */
    children: React.ReactNode | ((props: MenuContextValue & {
        isOpen: boolean;
    }) => React.ReactNode);
    id?: string;
}
/**
 * MenuButton
 *
 * Wraps a DOM `button` that toggles the opening and closing of the dropdown
 * menu. Must be rendered inside of a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menubutton
 */
declare const MenuButton: Polymorphic.ForwardRefComponent<"button", MenuButtonProps>;
/**
 * @see Docs https://reach.tech/menu-button#menubutton-props
 */
interface MenuButtonProps {
    /**
     * Accepts any renderable content.
     *
     * @see Docs https://reach.tech/menu-button#menubutton-children
     */
    children: React.ReactNode;
}
interface MenuItemImplProps {
    /**
     * You can put any type of content inside of a `<MenuItem>`.
     *
     * @see Docs https://reach.tech/menu-button#menuitem-children
     */
    children: React.ReactNode;
    /**
     * Callback that fires when a `MenuItem` is selected.
     *
     * @see Docs https://reach.tech/menu-button#menuitem-onselect
     */
    onSelect(): void;
    index?: number;
    isLink?: boolean;
    valueText?: string;
    /**
     * Whether or not the item is disabled from selection and navigation.
     *
     * @see Docs https://reach.tech/menu-button#menuitem-disabled
     */
    disabled?: boolean;
}
/**
 * MenuItem
 *
 * Handles menu selection. Must be a direct child of a `<MenuList>`.
 *
 * @see Docs https://reach.tech/menu-button#menuitem
 */
declare const MenuItem: Polymorphic.ForwardRefComponent<"div", MenuItemProps>;
/**
 * @see Docs https://reach.tech/menu-button#menuitem-props
 */
declare type MenuItemProps = Omit<MenuItemImplProps, "isLink">;
/**
 * MenuItems
 *
 * A low-level wrapper for menu items. Compose it with `MenuPopover` for more
 * control over the nested components and their rendered DOM nodes, or if you
 * need to nest arbitrary components between the outer wrapper and your list.
 *
 * @see Docs https://reach.tech/menu-button#menuitems
 */
declare const MenuItems: Polymorphic.ForwardRefComponent<"div", MenuItemsProps>;
/**
 * @see Docs https://reach.tech/menu-button#menuitems-props
 */
interface MenuItemsProps {
    /**
     * Can contain only `MenuItem` or a `MenuLink`.
     *
     * @see Docs https://reach.tech/menu-button#menuitems-children
     */
    children: React.ReactNode;
}
/**
 * MenuLink
 *
 * Handles linking to a different page in the menu. By default it renders `<a>`,
 * but also accepts any other kind of Link as long as the `Link` uses the
 * `React.forwardRef` API.
 *
 * Must be a direct child of a `<MenuList>`.
 *
 * @see Docs https://reach.tech/menu-button#menulink
 */
declare const MenuLink: Polymorphic.ForwardRefComponent<"a", MenuLinkProps>;
/**
 * @see Docs https://reach.tech/menu-button#menulink-props
 */
declare type MenuLinkProps = Omit<MenuItemImplProps, "isLink" | "onSelect"> & {
    onSelect?(): void;
};
/**
 * MenuList
 *
 * Wraps a DOM element that renders the menu items. Must be rendered inside of
 * a `<Menu>`.
 *
 * @see Docs https://reach.tech/menu-button#menulist
 */
declare const MenuList: Polymorphic.ForwardRefComponent<"div", MenuListProps>;
/**
 * @see Docs https://reach.tech/menu-button#menulist-props
 */
interface MenuListProps {
    /**
     * Whether or not the popover should be rendered inside a portal. Defaults to
     * `true`.
     *
     * @see Docs https://reach.tech/menu-button#menulist-portal
     */
    portal?: boolean;
    /**
     * Can contain only `MenuItem` or a `MenuLink`.
     *
     * @see Docs https://reach.tech/menu-button#menulist-children
     */
    children: React.ReactNode;
}
/**
 * MenuPopover
 *
 * A low-level wrapper for the popover that appears when a menu button is open.
 * You can compose it with `MenuItems` for more control over the nested
 * components and their rendered DOM nodes, or if you need to nest arbitrary
 * components between the outer wrapper and your list.
 *
 * @see Docs https://reach.tech/menu-button#menupopover
 */
declare const MenuPopover: Polymorphic.ForwardRefComponent<"div", MenuPopoverProps>;
/**
 * @see Docs https://reach.tech/menu-button#menupopover-props
 */
interface MenuPopoverProps {
    /**
     * Must contain a `MenuItems`
     *
     * @see Docs https://reach.tech/menu-button#menupopover-children
     */
    children: React.ReactNode;
    /**
     * Whether or not the popover should be rendered inside a portal. Defaults to
     * `true`.
     *
     * @see Docs https://reach.tech/menu-button#menupopover-portal
     */
    portal?: boolean;
    /**
     * A function used to determine the position of the popover in relation to the
     * menu button. By default, the menu button will attempt to position the
     * popover below the button aligned with its left edge. If this positioning
     * results in collisions with any side of the window, the popover will be
     * anchored to a different side to avoid those collisions if possible.
     *
     * @see Docs https://reach.tech/menu-button#menupopover-position
     */
    position?: Position;
}
/**
 * A hook that exposes data for a given `Menu` component to its descendants.
 *
 * @see Docs https://reach.tech/menu-button#usemenubuttoncontext
 */
declare function useMenuButtonContext(): MenuContextValue;
interface MenuContextValue {
    isExpanded: boolean;
}
export type { MenuButtonProps, MenuContextValue, MenuItemProps, MenuItemsProps, MenuLinkProps, MenuListProps, MenuPopoverProps, MenuProps, };
export { Menu, MenuButton, MenuItem, MenuItems, MenuLink, MenuList, MenuPopover, useMenuButtonContext, };