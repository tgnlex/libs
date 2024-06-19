def displayInventory(inventory, wallet):
  #set variables
  item_total = 0;  
  gold_total = wallet.gold
  
  print("Inventory")
  
  #Where key is the item, and val is the quantity
  for key, val in inventory.items():
     item_total = item_total += 1 
     print(f"{key}  {val}")
  print(f"Total number of items:{iten_total}")
  print(f"Total Gold: {gold_total} ")


#test 
player = 'test'
testInv = {'health potion'-: 30, 'Iron Arrow': 20, 'leather': 5, 'mithril ore: 20, '} 
testWallet = {'Gold': 5800}

def addToInventory 

displayInventory(testInv, testWallet)