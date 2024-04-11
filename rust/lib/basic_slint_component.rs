slint::slint!{
  export component HelloWorld {
    Text {
      text: "Good Day!";
      color: blue;
    }
  }
}

fn main() {
  HelloWorld::new().unwrap().run().unwrap();
}