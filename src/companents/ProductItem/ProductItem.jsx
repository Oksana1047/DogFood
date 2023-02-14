/* eslint-disable max-len */
// import { useDispatch } from 'react-redux'
import styles from './productItem.module.css'

function ProductItem({
  name, pictures, price,
}) {
  // const dispatch = useDispatch()

  return (
    <li className={styles.productItem}>
      <img src={pictures} className="card-img-top product_picture" alt="product" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button type="button" className="btn btn-warning">В корзину</button>
      </div>
    </li>
  )
}

export default ProductItem
