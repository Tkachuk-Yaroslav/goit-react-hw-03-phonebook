import { Component } from 'react';
import css from './PhonebookForm.module.css';
import { nanoid } from 'nanoid';

class PhonebookForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  nameLabelId = nanoid();
  numberLabelId = nanoid();

  handleChanged = event => {
    // console.log(event.currentTarget.value);
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <form type="submit" className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameLabelId} className={css.nameLabel}>
          Name
          <input
            value={this.state.name}
            onChange={this.handleChanged}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameLabelId}
          />
        </label>
        <label htmlFor={this.numberLabelId} className={css.telLabel}>
          Number
          <input
            value={this.state.number}
            onChange={this.handleChanged}
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberLabelId}
          />
        </label>
        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default PhonebookForm;
