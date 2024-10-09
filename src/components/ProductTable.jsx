/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ProductCategory from './products/ProductCategory';
import Productitem from './products/Productitem';
import Table from './Table';
const ProductTable = ({headers, products}) => {

  const sportinggoods = products.filter(product => product.type === 1);
  const electronics = products.filter(product => product.type === 2);

  return (
    <div>
    <Table.TableContainer>
      <Table.Thead>
        <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Thead>

      <Table.Tbody>

        {sportinggoods.length > 0 && <ProductCategory category={headers[0]}/>}
      {sportinggoods.map((sportingGood) => (
        <Productitem name={sportingGood.name} price={sportingGood.price}/>
      ))}
        
        {electronics.length > 0 && <ProductCategory category={headers[1]}/>}

        {electronics.map(({id,name,price,type}) => (
          <Productitem key={`${type}-${id}`} name={name} price={price}/>
        ))}

      </Table.Tbody>
      <Table.Tfoot>
        <Table.Row>
            <Table.ColumnHeader colspan="2">TOTAL</Table.ColumnHeader>
            <Table.Column>${products.reduce((previousvalue, currentvalue) => previousvalue + currentvalue.price, 0)}</Table.Column>
        </Table.Row>
      </Table.Tfoot>
      </Table.TableContainer>
    </div>
  )
}

export default ProductTable