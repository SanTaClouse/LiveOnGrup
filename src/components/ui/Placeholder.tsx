interface PlaceholderProps {
    /** Texto a mostrar dentro del placeholder */
    label?: string
    /** Variante: rect (default), circle (avatar), logo (caja chata para logos) */
    variant?: 'rect' | 'circle' | 'logo'
    /** Clases extra opcionales */
    className?: string
}

export default function Placeholder({
    label = 'Placeholder',
    variant = 'rect',
    className = '',
}: PlaceholderProps) {
    const base =
        'flex items-center justify-center bg-brand-darkgray border border-brand-midgray/30 text-brand-midgray text-xs font-body uppercase tracking-widest'

    const variantClasses = {
        rect: 'w-full aspect-[4/3] rounded-sm',
        circle: 'w-24 h-24 rounded-full',
        logo: 'w-32 h-12 rounded',
    }[variant]

    return (
        <div
            className={`${base} ${variantClasses} ${className}`}
            role="img"
            aria-label={`Placeholder: ${label}`}
        >
            [{label}]
        </div>
    )
}