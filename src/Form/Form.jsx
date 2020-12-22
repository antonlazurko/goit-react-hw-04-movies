import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';
export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const handleFormChange = event => {
    const contactId = uuidv4();
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(contactId);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name: name, number: number, id: id });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleFormChange}
          className={styles.input}
        />
      </label>
      <label>
        Number
        <input
          type="text"
          value={number}
          name="number"
          onChange={handleFormChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.formButton}>
        Add contact
      </button>
    </form>
  );
}
// class Form extends Component {
//   state = { name: '', number: '', id: '' };
//   handleFormChange = event => {
//     const contactId = uuidv4();
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value, id: contactId });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '', id: '' });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={styles.Form}>
//         <label className={styles.label}>
//           Name
//           <input
//             type="text"
//             value={this.state.name}
//             name="name"
//             onChange={this.handleFormChange}
//             className={styles.input}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="text"
//             value={this.state.number}
//             name="number"
//             onChange={this.handleFormChange}
//             className={styles.input}
//           />
//         </label>
//         <button type="submit" className={styles.formButton}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// export default Form;
Form.propTypes = {
  onSubmit: PropTypes.func,
};
