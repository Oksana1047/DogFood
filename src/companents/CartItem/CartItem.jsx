/* eslint-disable max-len */
import { useDispatch } from 'react-redux'
import cartItemStyles from './cartItem.module.css'
import {
  changeIsPickProduct, deleteProduct, productDecrement, productIncrement,
} from '../../redux/slices/cartSlice'

function CartItem({
  name, pictures, price, id, description, stock, discount, isPicked, count,
}) {
  const dispatch = useDispatch()

  const deleteProductHandler = () => {
    dispatch(deleteProduct(id))
  }
  const selectProductHandler = () => {
    dispatch(changeIsPickProduct(id))
  }

  const incrementCountHandler = () => {
    if (count < stock) { dispatch(productIncrement(id)) }
  }
  const decrementCountHandler = () => {
    if (count > 0) { dispatch(productDecrement(id)) }
  }
  console.log({ count })
  return (
    <li className={cartItemStyles.card}>
      <h5 className={cartItemStyles.card_header}>
        <input type="checkbox" checked={isPicked} style={{ marginRight: '10px' }} onChange={selectProductHandler} />
        {name}
      </h5>
      <div className={cartItemStyles.card_body}>
        <div className={cartItemStyles.wr}>
          <div className="card-body">
            <div className="d-flex flex-row gap-3">
              <h5 className="card-title">
                {discount > 0 && `${((price * (100 - discount)) / 100)} ₽`}
                {discount === 0 && `${price} ₽`}
              </h5>
              {discount > 0 && (
                <h6 className="card-title" style={{ textDecoration: 'line-through', color: 'gray' }}>
                  {price}
                  ₽
                </h6>
              )}
            </div>
            <p className="card-text">{description}</p>
            <p className="card-text">
              В наличии:
              {' '}
              {stock}
            </p>
          </div>
          <img src={pictures} className="card-img-top product_picture" alt="product" />
        </div>
        <div className="d-flex flex-row gap-4 px-3">
          <div className="d-flex flex-row gap-2 px-2 align-items-center">
            <button type="button" className="btn btn-light" onClick={decrementCountHandler} disabled={count === 1}>
              -

            </button>

            <span>{ count }</span>
            <button type="button" className="btn btn-light" onClick={incrementCountHandler} disabled={count === stock}>
              +
            </button>
          </div>
          <button type="button" className="btn btn-warning" onClick={deleteProductHandler}>Удалить</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
