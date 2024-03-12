from dataclasses import dataclass
from datetime import datetime
from uuid import UUID
import email
@dataclass 
class User:
  id: UUID
  username: str
  email: str
  password: str
  created_at: datetime
   