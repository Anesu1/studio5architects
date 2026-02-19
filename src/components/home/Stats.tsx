import Counter from "@/components/ui/Counter";

const stats = [
    { label: "Completed Projects", value: 30, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Client-Centered Design", value: 100, suffix: "%" },
    { label: "Environmental Focus", value: 100, suffix: "%" },
];

export default function Stats() {
    return (
        <section className="py-20 px-6 md:px-12 bg-verdant-bg">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-start border-t border-black/10 pt-4">
                        <span className="text-4xl md:text-6xl font-heading font-bold mb-2 flex items-baseline">
                            {stat.value < 10 && stat.value > 0 ? "0" : ""}
                            <Counter value={stat.value} />
                            {stat.suffix}
                        </span>
                        <span className="text-xs md:text-sm uppercase tracking-widest opacity-60 font-body">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
