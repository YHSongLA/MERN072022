import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {

    // DESTRUCTURE
    const {products} = props

  return (
    <div className='container m-auto mt-5'>
        <table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => {
                        return (
                            <tr key={product._id}>
                                <td>
                                    <Link to={"/" + product._id}>{product.title}</Link>
                                </td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductDisplay