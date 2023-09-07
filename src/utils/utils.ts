export const timeAgo = (createdAtTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - createdAtTime;
  
    const minuteInMilliseconds = 60 * 1000;
    const hourInMilliseconds = 60 * minuteInMilliseconds;
    const dayInMilliseconds = 24 * hourInMilliseconds;
    const monthInMilliseconds = 30.44 * dayInMilliseconds;
    
  
    if (timeDifference < minuteInMilliseconds) {
      return "Just now";
    } else if (timeDifference < hourInMilliseconds) {
      const minutesDifference = Math.floor(timeDifference / minuteInMilliseconds);
      return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    } else if (timeDifference < dayInMilliseconds) {
      const hoursDifference = Math.floor(timeDifference / hourInMilliseconds);
      return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else if (timeDifference < monthInMilliseconds) {
      const daysDifference = Math.floor(timeDifference / dayInMilliseconds);
      return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    } else  {
      const monthsDifference = Math.floor(timeDifference / monthInMilliseconds);
      return `${monthsDifference} ${monthsDifference === 1 ? 'month' : 'months'} ago`;
    }
  }
  
  