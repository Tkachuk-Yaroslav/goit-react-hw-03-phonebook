import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.item}>
            <h2 className={css.title}>{contact.name}</h2>
            <h2 className={css.number}>{contact.number}</h2>
            <button
              className={css.delete}
              onClick={() => onDeleteContact(contact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

// const ContactList = ({ contacts, onDeleteContact, children }) => {
//   return <ul>{children}</ul>;
// };

export default ContactList;
