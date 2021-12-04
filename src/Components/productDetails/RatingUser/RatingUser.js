import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import "./ratingUser.css";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

const userRatingData = [
  {
    name: "Haima Khatun",
    disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta aspernatur ipsum delectus debitis sunt,",
    rate: 2.5,
  },
  {
    name: "Halima Sultan",
    disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta aspernatur ipsum delectus debitis sunt,",
    rate: 4.5,
  },
  {
    name: "Saljan Khatun",
    disc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta aspernatur ipsum delectus debitis sunt,",
    rate: 4,
  },
];

const RatingUser = () => {
  return (
    <>
      {userRatingData.map((item, index) => {
        return (
          <div className="rating__review" key={index}>
            <div className="rate__user">
              <Stack direction="row" spacing={2}>
                <Avatar {...stringAvatar(item.name)} />
              </Stack>
              <div className="rate__name">
                <p>{item.name}</p>
                <div className="rating__area">
                  <Rating
                    name="size-small"
                    value={item.rate}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </div>
              </div>
            </div>
            <div className="desc">
              <p>{item.disc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RatingUser;
