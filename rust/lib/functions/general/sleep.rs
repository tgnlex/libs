fn sleep(t) {
   println("Sleeping for {} second(s)", t)
   thread::sleep(Duration::from_secs(t));
   println("done");
   return;  
}