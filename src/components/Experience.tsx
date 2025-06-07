import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
    const experienceData = [
        {
            position: "Summer Intern",
            company: "Daikin Air Conditioning India Pvt. Ltd. ",
            duration: "May 2025 - June 2025",
            location: "Ahmedabad, Gujarat",
            description: [
                "Gained hands-on experience in HVAC system design using Daikin's proprietary software for VRV systems.",
                "On-site visits to observe installation, maintenance, and troubleshooting of commercial HVAC systems & Chillers.",
                "Learned sustainable HVAC practices, including the use of eco-friendly refrigerants like R-32.",
                "Developed solid understanding of the VCRS and key components like compressors, condensers, and evaporators."
            ]
        },
        {
            position: "Summer Intern",
            company: "SAURASHTRA CEMENT LTD.",
            duration: "May 2024 - June 2024",
            location: "Porbandar, Gujarat",
            description: [
                "Gained practical exposure to industrial safety protocols & PPE usage specific to cement manufacturing environments.",
                "Understood the complete cement production and material handling process.",
                "Learned about various types of conveyor belts, their components, and the safety devices used to prevent mechanical hazards.",
                "Observed and studied automation, dust control, and environmentally responsible practices in bulk material handling systems."
            ]
        },
        
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {experienceData.map((exp, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-2">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <Briefcase className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                                            {exp.position}
                                        </CardTitle>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <p className="text-muted-foreground font-medium">{exp.company}</p>
                                            <div className="flex flex-col sm:items-end gap-1">
                                                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {exp.duration}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3  text-justify">
                                    {exp.description.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-zinc-800 dark:text-zinc-200">
                                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;