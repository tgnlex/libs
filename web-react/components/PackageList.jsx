import {useState} from 'react';
import AddItem from './AddItem.js';
import PackingList from './PackingList';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: false},
  { id: 1, title: 'Travel Journal', packed: false},
  { id: 2, title: 'Watercolor', packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initalItems);
  
  const total = items.length;
  const packed = items 
    .filter(item => item.packed)
    .length;

    function handleAddItem(title) {
      setItems([
        ...items,
        {
          id: nextId++,
          title: title,
          packed: false
        }
      ]);
    }

    function handleChangeItem(nextItem) {
      setItems(items.map(item => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      }));
    }

    function handleDeleteItem(itemId) {
      setItems(
        items.filter(item => item.id !== itemId)
      );
      return (
        <>
          <AddItem
            onAddItem={handleAddItem}
          />
          <PackingList
            items={items}
            onChangeItem={handleChangeItem}
            onDeleteItem={handleDeleteItem}
          />
        <hr />
        <b>{packed} out of {total} packed!</b>
      </>
    );
  }
}