/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Table from './Table';

const ProductTable = ({ headers, students }) => {
  
  // Utility function to calculate age based on birthdate
  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  return (
    <div>
      <Table.TableContainer>
        <Table.Thead>
          <Table.Row>
            {headers.map((header, index) => (
              <Table.ColumnHeader key={index}>{header}</Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Thead>

        <Table.Tbody>
          {students.map((student) => (
            <Table.Row key={student.id}>
              <Table.Column>{student.lastName}</Table.Column>
              <Table.Column>{student.firstName}</Table.Column>
              <Table.Column>{student.course}</Table.Column>
              <Table.Column>{student.birthdate}</Table.Column>
              <Table.Column>{calculateAge(student.birthdate)} yrs. old</Table.Column>
            </Table.Row>
          ))}
        </Table.Tbody>

        {/* Removed the footer with total students */}
      </Table.TableContainer>
    </div>
  );
};

export default ProductTable;
