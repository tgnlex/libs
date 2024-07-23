import {Props} from '../../interface/props.ts';
const rowStyle = {display: "flex", flexDirection: "row", placeItems: "center"};
const colStyle = {display: "flex", flexDirection: "column", placeItmes: "center"};
function Row(props: Props) {
  <div 
    id={props.id}
    className={props.className} 
    style={props.style || rowStyle}>
      {props.children}
  </div>
};
function Col(props: Props) {
  <div 
    id={props.id}
    className={props.className}
    style={props.style || colStyle}>
      {props.children}
  </div>
};
export {Row, Col};
