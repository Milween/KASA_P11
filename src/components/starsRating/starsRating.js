import React from "react"

import activeStar from "../../assets/red-Star.png"
import innactiveStar from "../../assets/grey-Star.png"

const StarsRating = ({rating}) => {
    const allStars = [1, 2, 3, 4, 5]

    return ( //stars will are contained in a loop that will update depending on the rating
        <div className="rating"> 
          {allStars.map((star) =>
            rating >= star ? (
              <img
                key={star.toString()}
                className="activeStar"
                src={activeStar}
                alt="red-star"
              />
            ) : (
              <img
                key={star.toString()}
                className="innactiveStar"
                src={innactiveStar}
                alt="grey-star"
              />
            )
          )}
        </div>
      );
}
export default StarsRating