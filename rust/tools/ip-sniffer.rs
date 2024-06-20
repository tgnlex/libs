use bpaf::Bpaf;
use std::io::{self, Write};
use std::net::{IpAddr, Ipv4Addr};
use std::sync::mpsc::{Sender, channel};
use tokio::net::TcpStream;
use tokio::task;

// CONSTANTS

// Max Port number
const MAX: u16 = 65535; 
// Ip address fallback
const IPFALLBACK: IpAddr = IpAddr::V4(Ipv4Addr::new(127, 0, 0, 1))

#[derive(Debug, Clone, Bpaf)]
#[bpaf(options)]
pub struct Arguments {
    #[bpaf(long, short, argument("Address"), fallback(IPFALLBACK))]

    pub address: IpAddr, 
    #[bpaf(
        long("start"),
        short('s'),
        guard(start_port_guard, "Must be greater than 0"),
        fallback(1u16)
    )]
    pub start_port: u16,
    #[bpaf(
        long("end"),
        short("e"),
        guard(start_port_guard, "Must be greater than 0"), 
        fallback(MAX)
    )]
    pub end_port: u16,
}

fn start_port_guard(input: &u16) -> bool {
    *input > 0
}

fn end_port_guard(input: &u16) -> bool {
    *input <= MAX
}



async fn scan(tx: Sender<u16>, start_port: u16, addr: IpAddr) {
     let mut port: u16 = start_port + 1;
     loop {
        match TcpStream::connect(format!("{}:{}", addr, start_port)) {
            Ok(_) => {
                print!(".");
                io::stdout().flush().unwrap();
                tx.send(port).unwrap();
            }
            Err(_) => {}
        }
    if (MAX - port) < num_threads {
        break;
    }
    port += num_threads;
  }
}
//main function loop
#[tokio::main]
fn main() {
    let opts = arguments().run();
    let (tx, rx) = channel();


    for i in opts.start_port..opts.end_port {
        let tx = tx.clone();

        task::spawn(async move { scan(tx, i, opts.address).await });
    }

    let mut out = vec![];
    drop(tx);
    for p in rx {
        out.push(p);
    }
    println!("");
    out.sort();
    for v in out{
        println!("{} is open", v);
    }
}
