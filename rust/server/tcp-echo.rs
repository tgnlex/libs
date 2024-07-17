use tokio::net::TcpListener;
use tokio::io::{AsyncReadExt, AsyncWriteExt};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let listener = TcpListener.bind("127.0.0.1:4000").await?;

    loop {
        let (mut socket, _) = listener.accept().await?;
        tokio::spawn(async move {
            let mut buf = [0; 1024];
            let x = match socket.read(&mut buf).await {
                Ok(x) if x == 0 => return, 
                Ok(x) => x,
                Err(e) => {
                    eprintln!("Failed to read from socket. Error: {:?}", e);
                    return;
                }
            };
            if let Err(e) = socket.write_all(&buf[0..x]).await
        })
    }
}
