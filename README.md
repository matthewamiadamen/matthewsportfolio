# Personal Portfolio

*Built with Next.js 14, TypeScript, and Tailwind CSS*

---

## What Is It?

My personal portfolio website — showcasing projects, skills, and a working contact form. Built with the Next.js App Router, styled with Tailwind CSS, and deployed on Vercel.

The contact form sends emails via the **Resend** API. Type animations on the landing page use `react-type-animation`. Icons throughout the site come from `react-icons`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Email | Resend |
| Deployment | Vercel |

---

## Running Locally

```bash
git clone <repo-url>
cd matthewsportfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

To enable the contact form locally, add a `.env.local` file:

```
RESEND_API_KEY=your_resend_api_key
```

---

## License

[MIT](https://opensource.org/licenses/MIT)
