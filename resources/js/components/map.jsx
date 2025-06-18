const Map = () => {
    return (
        <div className="relative h-[550px] w-full">
            <div className="bg-dark-plum pointer-events-none absolute inset-0 z-10 opacity-15"></div>

            <iframe
                className="absolute inset-0 z-0 h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19764.659667257314!2d19.395379199999997!3d51.740671999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa3c1637f752cc7d%3A0x987af35fe5957128!2sMobilny%20Gabinet%20Podologiczny%20-%20Hallux%20Clinic!5e0!3m2!1spl!2spl!4v1748621637714!5m2!1spl!2spl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
