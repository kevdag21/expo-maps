import React, { createContext, useState } from "react";

const Context = createContext(null);

export function SearchLocation({children}){
    const [searchLocation, setSearchLocation] = useState()

    return (
      <Context.Provider value={{ searchLocation, setSearchLocation }}>
        {children}
      </Context.Provider>
    );
}

export default Context;
