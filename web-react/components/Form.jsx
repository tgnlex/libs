import {useImmer} from 'use-immer';
 
export default function Form() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de saint Phalle'
  })
}