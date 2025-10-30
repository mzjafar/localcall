export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 border-t border-blue-500/40">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <strong>LocalCall.in</strong> — Help. Fast. Nearby.
        </p>

        <p className="text-center md:text-right opacity-90">
          📞 Contact:{' '}
          <a href="tel:+918086963769" className="underline hover:text-white/80">
            8086963769
          </a>
        </p>
      </div>
    </footer>
  );
}
