import { Card, CardContent } from "@/components/ui/card";

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                </div>

                <Card className="shadow-lg">
                    <CardContent className="p-8">
                        <div className="prose prose-lg max-w-none text-justify tracking-wide dark:text-zinc-200 text-zinc-600">
                            <p className="text-lg leading-relaxed mb-6">
                                I’m Manan Fatak, a mechanical engineering student at BVM Engineering College with a CPI of 8.55 and a diploma gold medalist from Government Polytechnic, Porbandar. My academic journey has built a strong foundation in mechanical systems through consistent performance and hands-on learning.
                            </p>
                            <p className="text-lg leading-relaxed mb-6">
                                I’ve gained valuable industry exposure through internships at Daikin Airconditioning Pvt. Ltd., where I worked with HVAC systems, and at Saurashtra Cement Ltd., where I explored material handling operations. My project work includes research on nanofertilizers and developing an automated garage system using hydraulic and pneumatic technologies. These experiences have sharpened both my technical and problem-solving skills.
                            </p>
                            <p className="text-lg leading-relaxed">
                                As the Training & Placement Coordinator at BVM, I’ve executed placement drives and events like KnowHow’25, guiding students in their career preparation. I’m skilled in CNC programming, Onshape, and AutoCAD, and thrive in collaborative, goal-oriented environments. I look forward to applying my knowledge to real-world engineering challenges and contributing to impactful innovations.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default About;