/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Table from '../Table'

const ProductCategory = ({category}) => {
  return (
    <Table.Row>
        <Table.ColumnHeader colspan="2">{category}</Table.ColumnHeader>
    </Table.Row>
  )
}

export default ProductCategory