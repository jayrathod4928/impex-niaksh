import Link from 'next/link';

export default function Custom404() {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#0f172a_100%)]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#c5a059] px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <Link
                    href="/"
                    className="relative inline-block text-sm font-medium text-[#c5a059] group focus:outline-none focus:ring"
                >
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#c5a059] group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="relative block px-8 py-3 bg-[#0a0a0a] border border-current">
            Go Home
          </span>
                </Link>
            </button>
        </main>
    );
}