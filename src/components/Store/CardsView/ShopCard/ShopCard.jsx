import styles from "./shopCard.module.css"

export const ShopCard = ({card}) => {
  return (
    <>
        <div className={styles["shop_card"]}>
            <h2 className={styles["card_title"]}>{card.name}</h2>
            <h3 className={styles["card_color"]}>{card.color}</h3>
            <img src={card.img} alt={card.name} className={styles["card_img"]}/>

            <div className={styles["card_sale"]}>
                <div className={styles["card_price"]}>${card.price}</div>
                <button>ADD TO CARD</button>
            </div>
        </div>
    </>
    
    )
    
}
