import "./StoreList.css";
function StoreList(props) {
  return (
    <ul className="item-list store--item-list">
      {props.storeItemsToDisplay.map((storeItem) => (
        <li key={storeItem.id}>
          <div className="store--item-icon">
            <img
              src={`assets/icons/${props.addZeros(storeItem.id)}-${
                storeItem.name
              }.svg`}
              alt={storeItem.name}
            />
          </div>
          <button onClick={() => props.addToCart(storeItem)}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
}
export default StoreList;
