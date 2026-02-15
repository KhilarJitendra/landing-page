export default function HomePage() {
  const linkedInUrl =
    process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/jitendrakhilar/";

  return (
    <main className="coming-shell">
      <section className="coming-card reveal" aria-label="Coming soon">
        <span className="eyebrow">Jithora</span>
        <h1>Coming Soon</h1>
        <p>
          We are building a next-generation enterprise CMS experience.
          Stay tuned for launch.
        </p>
        <a
          className="btn btn-secondary linkedin-only"
          href={linkedInUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open LinkedIn profile"
          title="LinkedIn"
        >
          <svg
            className="linkedin-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M6.94 8.5a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88ZM5.5 9.75h2.88V19H5.5V9.75Zm4.7 0h2.76v1.26h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.45 1.91 3.45 4.4V19H16.3v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39V19H10.2V9.75Z"
            />
          </svg>
        </a>
      </section>
    </main>
  );
}
