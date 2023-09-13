import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact
              name={name}
              number={number}
              onDelete={() => onDeleteContact(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
