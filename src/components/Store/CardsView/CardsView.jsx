import styles from "./cardsView.module.css"
import { ShopCard } from "./ShopCard"

export const CardsView = ({cards}) => {
  return (
    <div className={styles['items']}>
        {cards.map((item, i ) => 
                <ShopCard key={i}  card={item}/>
        )}
    </div>
  )
}
