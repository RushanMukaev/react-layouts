import styles from "./listView.module.css"
import { ShopItem } from "./ShopItem"

export const ListView = ({cards}) => {
    // console.log(cards)
  return (
    <div className={styles['items']}>
        {cards.map((item, i ) => 
                <ShopItem key={i}  card={item}/>
        )}
    </div>
  )
}