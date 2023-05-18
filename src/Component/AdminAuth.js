// import React from "react";
// import { useState, createContext, useContext } from "react";

// const AdminAuthcontext = createContext(null);

// export const AdminAuthProvider = ({ children }) => {
//   const [admin, setAdmin] = useState(null);
//   const login = (admin) => {
//     setAdmin(admin);
//   };

//   return (
//     <AdminAuthcontext.Provider value={{ admin, login }}>
//       {children}
//     </AdminAuthcontext.Provider>
//   );
// };
// export const useAdminAuth = () => {
//   return useContext(AdminAuthcontext);
// };
