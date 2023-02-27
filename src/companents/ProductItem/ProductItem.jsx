/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux'
import { addNewProduct, deleteProduct, getAllCartProductsSelector } from '../../redux/slices/cartSlice'
import styles from './productItem.module.css'

function ProductItem({
  name, pictures, price, id,
}) {
  const cartProducts = useSelector(getAllCartProductsSelector)
  const dispatch = useDispatch()

  const moveToCartHandler = () => {
    dispatch(addNewProduct(id))
  }
  const removeFromCartHandler = () => {
    dispatch(deleteProduct(id))
  }

  const isInCart = (productListId) => cartProducts.find((product) => product.id === productListId)

  return (
    <li className={styles.productItem}>
      <img src={pictures} className="card-img-top product_picture" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button type="button" className="btn btn-warning" onClick={isInCart(id) ? removeFromCartHandler : moveToCartHandler}>
          {isInCart(id) ? (
            <p>В корзине</p>
          ) : (
            <p>Добавить</p>
          )}

        </button>
      </div>
    </li>
  )
}

export default ProductItem
