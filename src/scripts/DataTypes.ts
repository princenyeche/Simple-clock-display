import type { ComponentType, ReactNode } from 'react'

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
