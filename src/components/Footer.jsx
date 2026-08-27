function Footer() {
    return (<footer className="bg-[#fff1d6] px-6 md:px-10 lg:px-16 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

            <div className="flex gap-8">
                <div>
                    <h1 className="text-6xl font-light">&</h1>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Contact us</h3>
                    <div className="flex gap-4 mb-5">
                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>

                        <a href="#" className="hover:opacity-50">
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a
                            href="#"
                            className="bg-black text-white text-xs text-center px-4 py-2 rounded hover:bg-gray-700"
                        >
                            App Store
                        </a>

                        <a
                            href="#"
                            className="bg-black text-white text-xs text-center px-4 py-2 rounded hover:bg-gray-700"
                        >
                            Google Play
                        </a>
                    </div>

                    <div className="mt-6 text-3xl">
                        Ⓑ
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">About us</h3>

                <div className="space-y-2 text-sm">
                    <a href="#" className="block hover:underline">Our story</a>
                    <a href="#" className="block hover:underline">Sustainability</a>
                    <a href="#" className="block hover:underline">Careers</a>
                    <a href="#" className="block hover:underline">Our tech blog</a>
                    <a href="#" className="block hover:underline">Modern Slavery Act</a>
                    <a href="#" className="block hover:underline">Supplier code of conduct</a>
                    <a href="#" className="block hover:underline">Proud to be a B Corp</a>
                    <a href="#" className="block hover:underline">Group Governance & Disclosures</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Our flowers & plants</h3>

                <div className="space-y-2 text-sm">
                    <a href="#" className="block hover:underline">Plant care</a>
                    <a href="#" className="block hover:underline">Blog</a>
                    <a href="#" className="block hover:underline">Flower subscriptions</a>
                    <a href="#" className="block hover:underline">London flower delivery</a>
                    <a href="#" className="block hover:underline">Edinburgh flower delivery</a>
                    <a href="#" className="block hover:underline">Summer Flowers</a>
                    <a href="#" className="block hover:underline">Sunflower Bouquets</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Need help?</h3>

                <div className="space-y-2 text-sm">
                    <a href="#" className="block hover:underline">Where is my order?</a>
                    <a href="#" className="block hover:underline">Contact us</a>
                    <a href="#" className="block hover:underline">Delivery</a>
                    <a href="#" className="block hover:underline">Recycle your packaging</a>
                    <a href="#" className="block hover:underline">Reviews</a>
                    <a href="#" className="block hover:underline">Flower school & tips</a>
                    <a href="#" className="block hover:underline">Privacy statement</a>
                    <a href="#" className="block hover:underline">Sitemap</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">Discounts & offers</h3>

                <div className="space-y-2 text-sm">
                    <a href="#" className="block hover:underline">Keyworker discount</a>
                    <a href="#" className="block hover:underline">Student & graduate discount</a>
                    <a href="#" className="block hover:underline">Refer a friend</a>
                </div>
            </div>

            <div>
                <h3 className="font-bold mb-4">International sites</h3>

                <div className="space-y-2 text-sm">
                    <a href="#" className="block hover:underline">Ireland</a>
                    <a href="#" className="block hover:underline">Germany</a>
                    <a href="#" className="block hover:underline">Austria</a>
                    <a href="#" className="block hover:underline">France</a>
                    <a href="#" className="block hover:underline">Netherlands</a>
                    <a href="#" className="block hover:underline">Belgium</a>
                    <a href="#" className="block hover:underline">Denmark</a>
                    <a href="#" className="block hover:underline">United States</a>
                </div>
            </div>

        </div>

        <div className="border-t border-black/10 mt-12 pt-8">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

                <div className="flex flex-wrap gap-2">

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-cc-visa text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-cc-mastercard text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-cc-amex text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-cc-paypal text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-cc-apple-pay text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2">
                        <i className="fa-brands fa-google-pay text-xl"></i>
                    </div>

                    <div className="bg-white px-3 py-2 text-xs font-semibold">
                        Klarna
                    </div>

                </div>

                <p className="text-xs">
                    © 2026 Bloom & Wild Limited. All rights reserved.
                </p>

            </div>

            <div className="flex flex-wrap justify-end gap-6 mt-8 text-sm">

                <a href="#" className="underline hover:no-underline">
                    Terms & Conditions
                </a>

                <a href="#" className="underline hover:no-underline">
                    Cookie statement
                </a>

                <a href="#" className="underline hover:no-underline">
                    Cookie preferences
                </a>

            </div>

        </div>

    </footer>
    );
}
export default Footer;