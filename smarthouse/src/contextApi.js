import React from "react";

// create context instance
const contextApi = React.createContext();

// create provider and consumer hook creators for all Rooms Data
export const RoomsProvider = contextApi.Provider;
export const RoomsConsumer = contextApi.Consumer;
