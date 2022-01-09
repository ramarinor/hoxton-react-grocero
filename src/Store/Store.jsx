import "./Store.css";
import StoreForm from "./StoreForm/StoreForm";
import StoreList from "./StoreList/StoreList";

function Store(props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <StoreForm setSortBy={props.setSortBy} setFilter={props.setFilter} />
      <StoreList
        storeItemsToDisplay={props.storeItemsToDisplay}
        addZeros={props.addZeros}
        addToCart={props.addToCart}
      />
    </header>
  );
}
export default Store;
