
const BannerLayout = ({ children, variant = 'absolute', className = '' }) => {
    return (
        <section
            className={`relative backdrop-blur-sm w-full min-h-screen bg-fixed z-0 ${className}`}
            style={{
                background: 'url(images/background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            {variant === 'absolute' ? (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                    <div className="bg-Black/5 backdrop-blur-sm w-full h-full">
                        {children}
                    </div>
                </div>
            ) : (
                <div className="relative z-20 flex flex-col w-full bg-gradient-to-t from-MidNightBlack">
                    <div className="bg-Black/5 backdrop-blur-sm w-full">
                        {children}
                    </div>
                </div>
            )}
        </section>
    )
}

export default BannerLayout