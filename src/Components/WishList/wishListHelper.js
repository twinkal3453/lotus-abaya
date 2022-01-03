export const addItemToWishList = (item) => {
  let wishList = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("wishList")) {
      wishList = JSON.parse(localStorage.getItem("wishList"));
    }
    wishList.push({
      ...item,
      count: parseInt(item.count),
    });
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }
};

export const loadWishList = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("wishList")) {
      return JSON.parse(localStorage.getItem("wishList"));
    }
  }
};

export const removeItemFromWishList = (productId) => {
  let wishList = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("wishList")) {
      wishList = JSON.parse(localStorage.getItem("wishList"));
    }
    wishList.map((product, i) => {
      if (product._id === productId) {
        wishList.splice(i, 1);
      }
    });
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }
  return wishList;
};

export const wishListEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("wishList");
    let wishList = [];
    localStorage.setItem("wishList", JSON.stringify(wishList));
    next();
  }
};
