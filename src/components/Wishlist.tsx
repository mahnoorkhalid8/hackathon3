// "use client";

// import React, { useContext, useState, createContext } from 'react';
// import { ReactNode } from 'react';

// type WishlistItem = {
//     id: string;
//     imageUrl: string;
//     name: string;
//     price: number;
// };

// type WishlistContextType = {
//     wishlist: WishlistItem[];
//     addToWishlist: (item: WishlistItem) => void;
//     removeFromWishlist: (id: string) => void;
//     clearWishList: () => void;
// };

// const WishlistContext = createContext<WishlistContextType | undefined> (undefined);

// export const WishlistProvider = ({children} : {children: ReactNode}) => {
//     const [wishlist, setWishlist] = useState<WishlistItem[]> ([]);

//     const addToWishlist = (item: WishlistItem) => {
//         setWishlist((prevList) => {
//             const existingItem = prevList.find((listItem) => listItem.id === item.id);
//             if (existingItem) return prevList;
//                 return [...prevList, item];
//         });
//     };

//     const removeFromWishlist = (id: string) => {
//         setWishlist((prevList) => prevList.filter((item) => item.id !== id));
//     };

//     const clearWishList = () => setWishlist([]);

//     return (
//         <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist, clearWishList}}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

//     export const useWishlist = () => {
//         const context = useContext(WishlistContext);
//         if (!context) {
//             throw new Error("useWishlist must be used within a WishlistProvider");
//         }
//         return context;
//     };