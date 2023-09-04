
const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-fixed bg-cover bg-center bg-no-repeat mt-[64px]" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1664300002404-bf3684f02a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-white mb-5 text-5xl font-bold">Welcome to <p className="mt-2 text-[var(--main-color)]">Unity Yoga Studio</p></h1>
                    <p className="mb-5 font-semibold text-white">A way to reconnect with yourself even amidst the chaos of your daily routine. Finding yourself is a journey, not a destination.</p>
                    <button className="btn btn-neutral text-white font-bold">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;