let tickId = setInterval(() => console.log('tick'), 2000); // 'tick' every 2s
setTimeout(() => clearInterval(tickId), 10*1000); // after 10s ticking stops