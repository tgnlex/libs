async function getGames() {
	const res = await fetch('http://localhost:3000/api/games');
	return res.json();
}

export default async function Layout({
	children, 
}: {
	children: React.ReactNode,
}) {
	const games = await getGames();

	return (
		<div>
		  <ul>
		    <li key={game.id}>
		    <Link href={`/games/${game.id}`}>{game.name}</Link>
		  </ul>
		  {children}
		</div>
	);
}