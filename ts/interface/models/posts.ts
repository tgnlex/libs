import {BaseModel} from '../../interfaces/model.ts';

interface PostModel extends BaseModel {
  title: string;
  content: string;  
}

export {PostModel}
