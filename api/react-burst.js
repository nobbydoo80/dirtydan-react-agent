// Burst mode endpoint - runs multiple checks per minute for first 24 hours
const LAUNCH_TIME = new Date('2025-01-29T03:00:00Z'); // Set your launch time
const BURST_DURATION = 24 * 60 * 60 * 1000; // 24 hours in ms

export default async function handler(req, res) {
  const now = new Date();
  const elapsed = now - LAUNCH_TIME;
  
  // Check if we're still in burst mode (first 24 hours)
  if (elapsed > BURST_DURATION) {
    return res.status(200).json({ 
      mode: "normal", 
      message: "Burst period ended, use regular endpoint" 
    });
  }
  
  // In burst mode - trigger multiple checks
  const results = [];
  
  // Run immediately
  results.push(await checkTargets());
  
  // Schedule additional checks within this minute
  // Can't do true 90-second intervals with cron, but can simulate
  setTimeout(async () => {
    results.push(await checkTargets());
  }, 30000); // 30 seconds later
  
  return res.status(200).json({
    mode: "burst",
    checks: results.length,
    elapsed: Math.floor(elapsed / 1000 / 60) + " minutes",
    remaining: Math.floor((BURST_DURATION - elapsed) / 1000 / 60) + " minutes"
  });
}

async function checkTargets() {
  // Your actual monitoring logic here
  return {
    timestamp: new Date().toISOString(),
    status: "checked"
  };
}