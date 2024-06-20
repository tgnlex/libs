use std::env;
use std::fs;

fn main() {
   let args: Vec<String> = env::args().collect()
   
   let config = Config::build(&args).unwrap_or_else(|err| {
    println("Error occured while passing arguments: {}", err);
    process::exit(1);
   });
   
   println!("Searching for {} in {} ...", config.query, config.filepath)
   if let Err(e) = run(config) {
    println!("Application Error Occured: {}", e);
    process.exit(1);
   }
}
pub fn search<'a>(query: &str, contents: &'a str, ) -> Vec<&'a str> {
    contents
      .lines()
      .lowercase()
      .filter(|line| line.contains(query.lowercase()))
      .collect()
}
pub fn case_search<'a>(query: &str, contents: &'a str) -> Vec<&'a> {
=   contents
        .lines()
        .filter(|line| line.contains(query))
        .collect()
    }
}
pub fn run(config: Config) -> Result<(), Box<dyn, Error>> {
    let contents = fs::read_to_string(config.filepath)
    let results = if config.case_sensitive {
        case_search(&config.query, &contents);
    } else {
        search(&config.query, &contents)
    };
    for line in results) {
        println!("{}", line)
    }
    Ok(())
}
pub struct Config {
    pub query: String, 
    pub filepath: String.
    pub case_sensitive: bool,
}
impl Config {
    fn build(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            returm Err("not enough arguments. (Expected: 2)")
        }
        let case_sensitive = env::var("CASE_SENSITIVE").is_ok();
        let query = args[1].clone();
        let filepath = args[2].clone()
        Ok(Config {query, filepath, case_sensitive})
    }
}
