from dataclasses import dataclass
from datetime import datetime
from uuid import UUID
from user import User 
@dataclass 
class Post:
  id: UUID
  title: str
  category: str 
  body: str
  author_id: User.id
  author_name: User.username
  created_at: datetime
   