import React from 'react'
import { nanoid } from 'nanoid'
import { Box, Input, Label } from './ContactsFilter.styled'
import PropTypes from 'prop-types'

export default function ContactsFilter({ inputChange, filterValue }) {
    const filterInpuId = nanoid();
    return (
        <Box>
            <Label htmlFor={filterInpuId}> Write a name for quick search</Label>
            <Input type="text" name='filter' id={filterInpuId} value={filterValue} placeholder='Enter some name ...' onChange={inputChange} />
        </Box >
    )
}

ContactsFilter.propTypes = {
    inputChange: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired
}