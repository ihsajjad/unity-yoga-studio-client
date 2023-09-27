import { Rating } from "@smastrom/react-rating";
import Marquee from "react-fast-marquee";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold">Reviews</h4>
      <Marquee className="" autoFill>
        <div className="flex space-y-3">
          {reviews?.map((review, i) => (
            <div key={i} className="space-y-1 mx-10">
              <h5 className="font-bold text-center">{review.user}</h5>
              <p className="text-center">{review.comment}</p>{" "}
              <div className="flex justify-center gap-2">
                <Rating
                  value={review.rating}
                  readOnly
                  style={{ maxWidth: "120px" }}
                />
                <span>{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Reviews;
