import type { ComponentType, ReactNode } from 'react';

export type DataObjects = { [key: string]:  string};
export type ListObjects = (object | string | number | boolean | null)[];
export type BannerValues = "announcement" | "warning" | "error";
// define an interface for the useClock context
export interface ClockContextType {
    getClockFace: string | DataObjects;
    onSetClockFace: (value: string | DataObjects) => void;
}

// Define props for ClockContent
export interface ClockContentProps {
  changeClock: boolean
  runClock: string | number
  runParsed: (string | number)[]
  clockColor: DataObjects
  InitialClock: ComponentType<unknown>
  clockSize: string
  clockFormat: boolean
  clockFace: boolean
  handleChangeColor: () => void
  handleClockDisplayOption: () => void
  handleClockFormat: () => void
  handleClockFace: () => void
}

// define props for PageLayout
export interface PageLayoutProps {
  banner: {
    type: BannerValues;
    message: string;
    visibility: boolean;
  };
  topNav?: boolean;
  sideNav?: boolean;
  asideNav?: boolean;
  panelNav?: boolean;
  childPage?: string;
  parentPage?: string;
  breadCrumb?: boolean;
  pageName?: string;
  children: ReactNode;
}

// define interface for the appLayout
export interface AppLayoutProps {
    runBanner?: {
    type: BannerValues;
    message: string;
    visibility: boolean;
  };
    topNav?: boolean;
    sideBar?: boolean;
    pageName?: string;
    childPage?: string;
    parentPage?: string;
    breadCrumbVisible?: boolean;
    aside?: boolean;
    panel?: boolean;
    children: ReactNode;
}

export interface AppSidePanelProps {
    aside?: boolean | undefined;
    panel?: boolean | undefined;
}

export interface LayoutContextType {
    mainLayout: DataObjects;
    onSetLayout: (value: DataObjects, layoutType: string) => void;
    sidebarLayout: DataObjects;
    asideLayout: DataObjects;
    panelLayout: DataObjects;
}

export interface ScreenDimension {
    width: number;
    height: number;
}

export interface BannerType {
    type: BannerValues;
    message: string;
    visibility: boolean;
}

export interface BreadCrumbProps {
    visibility?: boolean;
    childPage?: string;
    parentPage?: string;
}

export interface SpaceMarginProps extends BreadCrumbProps{
    pageTitle?: string;
}

export interface MenuContextType {
    isActiveState: string;
    parseLink: (parseURL: string) => void | Promise<void>;
}

export interface UserContextType {
    user: string | null | object;
    setUser: string | null | object;
    login: (jwt_string: string) => Promise<string>;
    logout: () => Promise<void>;
}

export type Any = any;

export interface ApiContextType {
    [key: string]: Any;
    logout(): Promise<void>;
        login(jwt_string: string): Promise<string>;
        isAuthenticated(): boolean;
        delete(url: string, options?: object): Promise<HTTPResult>;
        put(url: string, body?: object | null, options?: object): Promise<HTTPResult>;
        post(url: string, body?: object | null, options?: object): Promise<HTTPResult>;
        get(url: string, query?: string, options?: object): Promise<HTTPResult>;
        requestInternal(options: Any): Promise<HTTPResult>;
        request(options: Any): Promise<HTTPResult>;
        onError: Any;
        base_url: string;
}

export type ReturnReason = "error" | "fail" | "ok";

export interface HTTPResult {
    ok: boolean;
    status: number;
    body: Any;
}

export interface MessageContextType {
    content: string;
    description: string;
    tokenColor: Any;
    label: string;
    alert: string;
    title: string;
}
