import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <p className="text-brand-orange font-body uppercase tracking-widest text-sm mb-4">
                Error 404
            </p>
            <h1 className="font-heading text-display text-white mb-6">
                Esta página no existe.
            </h1>
            <p className="text-gray-400 font-body mb-8 max-w-md">
                Puede que la hayamos movido, o que el link esté roto. Volvé al inicio y seguimos desde ahí.
            </p>
            <Link href="/" className="btn-primary">Volver al inicio</Link>
        </main>
    )
}