# DirtyDan ReAct Agent

Distributed OSINT monitoring for Daniel Obregon and associated aliases.

[![Deploy with Vercel](https://vercel.com/button)](https://api.vercel.com/v1/integrations/deploy/prj_63mEzXAEehTqa1aiLDyqAFB1j7qT/dXJ2GojHt0)

## Quick Deploy

Click the button above to deploy your own monitoring instance.

## Manual Setup

1. Fork this repository
2. Deploy to Vercel
3. Add environment variables:
   - `PERPLEXITY_API_KEY` - Your Perplexity API key
   - `GUARDR_WEBHOOK` - Your Guardr webhook URL

## Features

- 🔍 Monitors 9+ known aliases
- ⏰ Runs every 15 minutes
- 🌐 Tracks IP blocks: 172.56.0.0/13, 173.252.64.0/18, 107.128.0.0/11
- 🚨 Sends alerts to Guardr webhook
- 📊 Distributed monitoring network

## Monitored Entities

- danieloobregon23@gmail.com
- dannyoo23
- doobregon
- DaOmOb
- danielobre214126
- danny0023
- chaosphere23@gmail.com
- dirtydan318
- JeSuisDirtyDan

## API Endpoint

`GET /api/react` - Returns current monitoring status

## Deploy Multiple Agents

Deploy multiple instances for redundant monitoring across different regions.