export function geActiveUsers(activeUsers: number) {
	if (activeUsers) {
		return `There are ${activeUsers} currently active users.`
	}
	return "Nobody's here. :("
}