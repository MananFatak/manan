import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                            Manan Fatak 
                        </h1>
                        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                            Mechanical Engineer
                        </h2>
                        <p className="text-lg sm:flex md:hidden lg:flex text-muted-foreground max-w-lg">
                            Mechanical Engineer with hands-on experience in mechanical systems, automation, and industrial design.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button onClick={scrollToContact} className="flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Get In Touch
                            </Button>
                            <Button variant="outline" onClick={scrollToContact} className="flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                Contact Me
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                                <img
                                    src="/photo1.jpg"
                                    alt="Manan Fatak"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
