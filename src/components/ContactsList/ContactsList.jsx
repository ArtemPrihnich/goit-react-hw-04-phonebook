import React from 'react'
import { Button, Item, List } from './ContactsList.styled'
import PropTypes from 'prop-types'

export default function ContactsList({ contacts, onDelete }) {
    return (
        <List>
            {contacts.map(({ name, number, id }) => {
                return (
                    <Item key={id}>{name}: {number} <Button onClick={() => onDelete(id)}>delete</Button></Item>
                )
            })}
        </List>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string.isRequired
        )
    ),
    onDelete: PropTypes.func.isRequired
}