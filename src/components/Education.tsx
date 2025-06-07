import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Technology in Mechanical Engineering",
            institution: "Birla Vishvakarma Mahavidyalaya",
            duration: "2023 - 2026",
            grade: "CPI: 8.55/10.0",

        },
        {
            degree: "Diploma in Mechanical Engineering",
            institution: "Government Polytechnic, Porbandar (GTU)",
            duration: "2020 - 2023",
            grade: "CPI: 9.78/10.0",
            
        },
        {
            degree: "Secondary Education (SSC)",
            institution: "Gujarat Secondary Education Board (GSEB)",
            duration: "2019-20",
            grade: "Percentage: 86.5%",
        }
    ];

    return (
        <section id="education" className="py-20 px-4 bg-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Education
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {educationData.map((edu, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                                            {edu.degree}
                                        </CardTitle>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <p className="text-muted-foreground font-medium">{edu.institution}</p>
                                            <div className="flex flex-col sm:items-end gap-1">
                                                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {edu.duration}
                                                </span>
                                                <span className="text-sm font-semibold text-foreground">
                                                    {edu.grade}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
