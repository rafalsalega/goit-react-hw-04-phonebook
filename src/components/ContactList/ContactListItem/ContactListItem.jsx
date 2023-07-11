import PropTypes from 'prop-types';

export const ContactListItem = ({ id, number, name, onClick }) => (
  <>
    <span>
      {name}: {number}
    </span>
    <button  type="button" onClick={() => onClick(id)}>
      Delete
    </button>
  </>
);

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};