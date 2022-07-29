import { formatDate } from "../../utils/formatDate";

const Comment = ({ comment }) => {
  const { text: commentText, rating, author, date } = comment;
  // Let's make the star ratings icons rather than a number
  let star = [];
  for (let i = 0; i < rating; i++) {
    star.push(<i class="fa fa-star" aria-hidden="true"></i>);
  }
  let noStar = [];
  for (let i = 0; i < 5 - rating; i++) {
    noStar.push(<i class="fa fa-star-o" aria-hidden="true"></i>);
  }

  return (
    <p>
      {commentText}
      <br />
      {star}
      {noStar} -- {author}, {formatDate(date)}
    </p>
  );
};

export default Comment;
