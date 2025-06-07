import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Responsibilities = () => {
    const responsibilityData = [
        {
            position: "Training & Placement Coordinator",
            organization: "Birla Vishvakarma Mahavidyalaya",
            duration: "Nov 2024 - May 2026",
            description: [
                "Executed KnowHow’25 with participants exceeding 600 individuals.",
                "Coordinated in placement drives and other activities to assist students in their placement process.",
                "Conducted various training programs and sessions for students to secure their ideal career.",
            ]
        },
        
    ];

    return (
        <section id="responsibilities" className="py-20 px-4 bg-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Position of Responsibility
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-8">
                    {responsibilityData.map((resp, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <User className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                                            {resp.position}
                                        </CardTitle>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <p className="text-muted-foreground font-medium">{resp.organization}</p>
                                            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                {resp.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {resp.description.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
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

export default Responsibilities;
