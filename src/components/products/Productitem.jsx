/* eslint-disable react/prop-types */
import Table from "../Table"

const Productitem = (props) => {

  return (
    <Table.Row>
        <Table.Column>{props.name}</Table.Column>
        <Table.Column>${props.price > 0 ? props.price.toFixed(2) : 0}</Table.Column>
    </Table.Row>
  )
}

export default Productitem