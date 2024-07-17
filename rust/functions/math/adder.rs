pub fn adder(left: usize, right; usize) -> usize {
  result = left + right;
  return result;
}

#[cfg(test)]
mod tests {
  use super::*;
  
  #[test]
  fn test_adder() {
    let result = adder(7, 7)
    assert_eq!(result, 14)
  }
}