import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { ChangeEvent, useContext, useState } from 'react'
import { btnSmall } from "../../../style/GeneralStyle";
import '../../../style/Admin.css';
import { Product } from '../../../data/productData';
import { AdminContext } from '../../../contexts/AdminContext';
import { useRouteMatch } from 'react-router';
import GeneralInput from './GeneralInput';



const AddNewProduct = () => {
  const match = useRouteMatch<{ id: string }>();

  const newProductData: Product = {
    id: 0,
    title: "",
    image: "",
    price: 0,
    info: "",
    size: 0
  };
  const admin = useContext(AdminContext)

  let currentProduct = admin.products.find((specificProduct) => specificProduct.title === match.params.id)

  const [product, setProduct] = useState<Product>(currentProduct || newProductData)

    const handleClick = () => {
      const isNewProduct = !currentProduct
      if(isNewProduct) {
        admin.addNewProduct(product)
      } else {
        admin.submitAll(product, currentProduct)
      }
    }

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setProduct({ ...product, title: e.target.value })
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
      setProduct({...product, image: e.target.value})
    }

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
      setProduct({...product, price: parseInt(e.target.value)})
    }

    const handleInfo = (e: ChangeEvent<HTMLInputElement>) => {
      setProduct({...product, info: e.target.value})
    }
    return (
      <div>
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {!currentProduct?
              <h1 style={title}>Add new product</h1>
              :
              <h1 style={title}>Edit product</h1>
            }
            <GeneralInput id={'title'} type={'text'} name={'title'} label={'Title...'} value={product.title} onChange={handleTitle}/>
            <GeneralInput id={'image'} type={'text'} name={'image'} label={'Image...(Url)'} value={product.image} onChange={handleImage}/>
            <GeneralInput id={'Price'} type={'number'} name={'price'} label={'Price...'} value={product.price} onChange={handlePrice}/>
            <GeneralInput id={'info'} type={'text'} name={'info'} label={'Info...'} value={product.info} onChange={handleInfo}/>
            <div style={{ alignSelf: "center" }}>
              <Button onClick={handleClick} style={btnSmall}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}

const title: CSSProperties = {
  textAlign: "center",
  margin: "0rem 1rem",
}

export default AddNewProduct