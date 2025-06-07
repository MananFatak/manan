import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
    
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "fatakmanan@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 7984437123",
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-background">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, innovative projects,
                        or potential collaborations in mechanical engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {contactInfo.map((contact, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <contact.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg font-semibold text-foreground">
                                            {contact.label}
                                        </CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-zinc-800 dark:text-zinc-200">{contact.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Card className="shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Let's Connect
                            </h3>
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                Whether you're looking for a dedicated mechanical engineer for your team
                                or want to discuss innovative engineering solutions, I'd love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg">
                                    <a href="mailto:fatakmanan@gmail.com" className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        Send Email
                                    </a>
                                </Button>
                                <Button variant="outline" asChild size="lg">
                                    <a href="tel:+917984437123" className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        Call Now
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Contact;