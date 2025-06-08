import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical } from "lucide-react";

const Projects = () => {
    const projectData = [
        {
            title: "Nanofluid as a Fertilizer for Organic Farming",
            institution: "Government Polytechnic, Porbandar",
            duration: "June 2022 – March 2023",
            location: "Porbandar, Gujarat",
            description: [
                "Designed and synthesized nanofluid fertilizers using neem cake and humic acid.",
                "Employed ultrasonic homogenizer and magnetic stirrer for nanoparticle dispersion.",
                "Developed 20+ experimental formulations with varying nano concentrations.",
                "Conducted plant growth experiments to evaluate fertilizer performance.",
                "Aimed to reduce chemical usage by enhancing nutrient delivery via nanotech."
            ]
        }
    ];

    return (
        <section id="projects" className="py-16 px-4 bg-background">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Projects
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {projectData.map((project, index) => (
                        <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="pb-1">
                                <div className="flex items-start gap-3">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <FlaskConical className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg font-semibold text-foreground mb-0.5">
                                            {project.title}
                                        </CardTitle>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm">
                                            <p className="text-muted-foreground">{project.institution}</p>
                                            <div className="flex flex-col sm:items-end gap-0.5">
                                                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                                    {project.duration}
                                                </span>
                                                <span className="text-muted-foreground">{project.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2 pb-4">
                                <ul className="space-y-2 text-sm text-justify">
                                    {project.description.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex tracking-wide items-start gap-2 text-zinc-800 dark:text-zinc-200">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                            <span>{item}</span>
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

export default Projects;
