export default async function handler(req, res) {
  const watchlist = [
    "danieloobregon23@gmail.com",
    "dannyoo23",
    "doobregon",
    "DaOmOb",
    "danielobre214126",
    "danny0023",
    "chaosphere23@gmail.com",
    "dirtydan318",
    "JeSuisDirtyDan"
  ];

  try {
    const timestamp = new Date().toISOString();
    const response = {
      status: "ReAct loop active",
      timestamp,
      watchlist,
      message: "Agent is monitoring for activity",
      ipBlocks: ['172.56.0.0/13', '173.252.64.0/18', '107.128.0.0/11']
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ 
      error: "Agent error", 
      message: error.message 
    });
  }
}