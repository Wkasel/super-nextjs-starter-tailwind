import { useState, createContext, useContext } from 'react';

interface IGlobalState {
  [key: string]: any[];
}
export const GlobalState = createContext<null | IGlobalState>(null);

const pages = [];
export const GlobalStateProvider = ({ children }) => {
  return <GlobalState.Provider value={{ pages }}>{children}</GlobalState.Provider>;
};

export function registerPage(route: string, obj: any) {
  pages[route] = obj;
}

export const usePage = (p: string) => pages.filter(([k]) => k === p);
