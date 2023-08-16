export default function SignInLayout({
    children,
} : {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here */}
            <nav></nav>
            
            {children}
        </section>
    )
}