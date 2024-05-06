import Validator
validate user,  name: [length: 1..100],
                email: [matches: ~r/@/]
import Validator
user
|> validate_length(:name, 1..100)
|> validate_matches(:email, ~r/@/)

defmodule MyValidator do
  use Validator
  validate_length :name, 1..100
  validate_matches :email, ~r/@/
end

MyValidator.validate(user)
