const notificationValidator = (notification) => {
  const notificationError = new Error;
  if (notification instanceof Notification === true) {
    return notification;
  } else {
    console.error('input is not a valid notification object')
    return notificationError;
  }
}