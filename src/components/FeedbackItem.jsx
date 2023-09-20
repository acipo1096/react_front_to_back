// In useState, the first parameter is the name of the used state
// The second parameter is the function that updates it
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes} from 'react-icons/fa'

function FeedbackItem({ item, handleDelete }) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=> handleDelete(item.id)}className="close">
        <FaTimes color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
