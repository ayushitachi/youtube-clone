import React, { createContext, useContext, useEffect, useState } from "react";
import getApiData from "./api";

export const Context = createContext(null);

export function useAppContext() {
  const data = useContext(Context);
  return data;
}

export default function AppContext({ children }) {
  const [catagory, Setcatagory] = useState("New");
  const [searchResult, SetsearchResults] = useState();
  const [mobileToggle, SetMobileToggle] = useState();
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    getCatagorydata(catagory)
  }, [catagory])

  const getCatagorydata = async (url) => {
    Setloading(val => !val);
    getApiData(`search/?q=${url}`).then(res => {
      SetsearchResults(res.data.contents);
      Setloading(val => !val)
    })
  }

  return (
    <Context.Provider value={{ catagory, Setcatagory, searchResult, SetsearchResults, mobileToggle, SetMobileToggle, loading, Setloading }}>
      {children}
    </Context.Provider>
  );
}
