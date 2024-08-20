import styles from "./shopItem.module.css"

export const ShopItem = ({card}) => {
  return (
    <div className={styles["shop_card"]}>
      <img src={card.img} alt={card.name} className={styles["card_img"]} />
      <h2 className={styles["card_title"]}>{card.name}</h2>
      <h3 className={styles["card_color"]}>{card.color}</h3>
      <div className={styles["card_price"]}>${card.price}</div>
      <button className={styles["card_sale"]}>ADD TO CARD</button>
    </div>
  );
    
}