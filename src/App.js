import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Form from './Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';
export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');
  const addContact = contact => {
    if (contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, contact]);
  };
  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className={styles.Phonebook}>
      <h1 className={styles.title}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={styles.title}>Contacts</h2>
      <Filter value={filter} onChange={filterChange} className="Filter" />
      <ContactsList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
        className="ContactsList"
      />
    </div>
  );
}
