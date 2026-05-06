## Tech Stack

- **Next.js 16** — React framework
- **TypeScript** — Type safety
- **Bootstrap 5** — UI styling
- **Docker** — Containerization

---

## Getting Started Locally

### Prerequisites

- Node.js 20+
- npm

### Installation

1. Clone the repository:
```bash
   git clone https://github.com/AhmedAyman911/Frontend-Task.git
   cd Frontend-Task
```

2. Install dependencies:
```bash
   npm install
```

3. Run the development server:
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials

| Username | Password |
|----------|----------|
| admin    | 1234     |

---

## Build & Deploy with Docker

### Prerequisites

- [Docker Desktop]

### Run with Docker

1. Make sure Docker Desktop is open and running.

2. Build and start the container:
```bash
   docker-compose up --build
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. To stop:
```bash
   docker-compose down
```

---

## Project Structure

```
app/            # Pages and routing
components/     # Shared UI components
context/        # Authentication state
public/         # Static images and assets
```
