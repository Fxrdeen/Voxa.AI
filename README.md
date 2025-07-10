# Voxa.AI - AI-Powered Meeting Platform

<p align="center">
  <img src="/public/logo.svg" alt="Voxa.AI Logo" width="120" height="120">
</p>

Voxa.AI is a modern SaaS platform that enables AI-powered video meetings with intelligent agents. The platform allows users to create custom AI agents that can join meetings, interact with participants, and provide assistance during video calls.

## Features

- **AI Agents**: Create custom AI agents with specific instructions to join your meetings
- **Video Meetings**: Host video meetings with AI agents and human participants
- **Real-time Chat**: Communicate with participants and AI agents during meetings
- **Meeting Management**: Schedule, manage, and review past meetings
- **Meeting Recordings**: Record meetings for later review
- **Meeting Transcripts**: Get transcripts of your meetings
- **Meeting Summaries**: Get AI-generated summaries of your meetings
- **Premium Subscription**: Upgrade to premium for additional features

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, tRPC
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Video/Chat**: Stream Video & Chat APIs
- **Payments**: Polar
- **Deployment**: Vercel
- **Background Jobs**: Inngest

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- PostgreSQL database
- Stream Video & Chat API keys
- Polar account for payments

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=your_database_url

# Stream Video & Chat
NEXT_PUBLIC_STREAM_VIDEO_API_KEY=your_stream_video_api_key
NEXT_PUBLIC_STREAM_VIDEO_API_SECRET=your_stream_video_api_secret
NEXT_PUBLIC_STREAM_CHAT_API_KEY=your_stream_chat_api_key
STREAM_CHAT_API_SECRET=your_stream_chat_api_secret

# Polar Payments
POLAR_ACCESS_TOKEN=your_polar_access_token
```

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/meet-ai.git
cd meet-ai
```

2. Install dependencies

```bash
pnpm install
```

3. Set up the database

```bash
pnpm db:push
```

4. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # Shared UI components
│   ├── db/               # Database schema and connection
│   ├── hooks/            # Custom React hooks
│   ├── inngest/          # Background job processing
│   ├── lib/              # Utility functions and services
│   ├── modules/          # Feature modules
│   │   ├── agents/       # Agent management
│   │   ├── auth/         # Authentication
│   │   ├── call/         # Video call functionality
│   │   ├── dashboard/    # Dashboard UI
│   │   ├── home/         # Home page
│   │   ├── meetings/     # Meeting management
│   │   └── premium/      # Premium subscription
│   └── trpc/             # tRPC API routes
└── public/               # Static assets
```

## Development

### Database Management

```bash
# Push schema changes to the database
pnpm db:push

# Open Drizzle Studio to manage database
pnpm db:studio
```

### Webhook Development

```bash
# Start ngrok tunnel for webhook development
pnpm dev:webhook
```

## Deployment

The easiest way to deploy the application is using Vercel:

```bash
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [tRPC](https://trpc.io)
- [Drizzle ORM](https://orm.drizzle.team)
- [Stream Video & Chat](https://getstream.io)
- [Polar](https://polar.sh)
- [Inngest](https://inngest.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
