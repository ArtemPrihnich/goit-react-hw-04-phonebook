import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { Box } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    if (onDuplicatingName(contact)) {
      return Notify.failure(`This contact: (${contact.name}) is already in your contact book`);
    }
    setContacts((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      };
      return [...prev, newContact]
    })
  }

  const onDuplicatingName = ({ name }) => {
    const result = contacts.find(contact => {
      return contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    })
    return result
  }

  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    if (name === 'filter') {
      return setFilter(value)
    }
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts
    }

    const filteredContacts = contacts.filter(({ name, number }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })
    return filteredContacts
  }

  const deleteContact = (id) => {
    setContacts((prevState) => {
      const newContacts = prevState.filter(contact => {
        return contact.id !== id
      })
      return [...newContacts]
    })
  }

  const filteredContacts = getFilteredContacts()

  return (
    <Box>
      <ContactsForm onSubmit={addContact} />
      <ContactsFilter inputChange={handleChange} filterValue={filter} />
      <ContactsList contacts={filteredContacts} onDelete={deleteContact} />
    </Box >
  )
}
