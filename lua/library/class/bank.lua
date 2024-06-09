Account = { 
  balance = 0,
  new = function(object)
    object = object or {}
    setmetatable(object, Account) 
    Account.__index = Account
    return object  
  end,
  withdraw = function (self, value)
    self.balance = self.balance - value;
    print(self.balance);
  end,
  deposit = function(self, value)
    self.balance = self.balance + value;
    print(self.balance);
  end,
  get = function(self)
    print(self.balance)
    return self.balance;
  end,
  create = function(initial)
    local self = {balance = initial}
    local withdraw = self.widthdraw;
    local deposit = self.deposit;
    local get = self.get;
    return {withdraw=withdraw, deposit=deposit, get=get}
  end,
}

function CreateAccount (initial) 
  local self = {balance = initial}
  local withdraw = function(v)
    self.balance = self.balance - v;
  end
end