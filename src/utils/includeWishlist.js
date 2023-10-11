const storedWishlist = JSON.parse(localStorage.getItem("wishList"));

const returnDistinctData = (data) => {
  console.log("Line 4", data);
  for (let i = 0; i < storedWishlist.length; i++) {
    if (storedWishlist[i]._id === data) {
      console.log(`${data} is matched`);
      return true;
    } else {
      console.log(`${data} is not matched`);
      return false;
    }
  }
};

export default returnDistinctData;
