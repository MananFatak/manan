import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: () => <Mail className="w-6 h-6 text-primary" />,
            label: "Email",
            value: "fatakmanan@gmail.com",
            action: (
                <Button variant="outline" asChild size="lg" className="w-full">
                    <a href="mailto:fatakmanan@gmail.com" className="flex items-center justify-center gap-2">
                        <Mail className="w-4 h-4" />
                        Send Email
                    </a>
                </Button>
            ),
        },
        {
            icon: () => <Phone className="w-6 h-6 text-primary" />,
            label: "Phone",
            value: "+91 7984437123",
            action: (
                <Button variant="outline" asChild size="lg" className="w-full">
                    <a href="tel:+917984437123" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call Now
                    </a>
                </Button>
            ),
        },
        {
            icon: () => <i className="ri-linkedin-box-fill text-primary text-[22px]" />,
            label: "LinkedIn",
            value: "Manan Fatak",
            action: (
                <Button variant="outline" asChild size="lg" className="w-full">
                    <a
                        href="https://www.linkedin.com/in/fatak-manan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        <i className="ri-linkedin-box-fill text-[18px]" />
                        View Profile
                    </a>
                </Button>
            ),
        },
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-background min-h-screen mt-14">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, innovative projects,
                        or potential collaborations in mechanical engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {contactInfo.map((contact, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                            <CardHeader className="text-center pb-4">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                                        {contact.icon()}
                                    </div>
                                    <CardTitle className="text-xl font-semibold text-foreground">
                                        {contact.label}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between space-y-6 pt-0">
                                <p className="text-zinc-800 dark:text-zinc-200 break-words text-center text-base font-medium">
                                    {contact.value}
                                </p>
                                <div className="mt-auto">
                                    {contact.action}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;