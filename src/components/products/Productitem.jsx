/* eslint-disable react/prop-types */
import Table from "../Table";

const Productitem = ({ student }) => {
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  return (
    <Table.Row>
      <Table.Column>{student.lastName}</Table.Column>
      <Table.Column>{student.firstName}</Table.Column>
      <Table.Column>{student.course}</Table.Column>
      <Table.Column>{student.birthdate}</Table.Column>
      <Table.Column>{calculateAge(student.birthdate)}</Table.Column>
    </Table.Row>
  );
}

export default Productitem;
