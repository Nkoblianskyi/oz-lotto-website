import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with OzBigWinAustralia.com. We're here to help with any questions about OZ Lotto, your account, or technical support.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about OZ Lotto, need help with your account, or want to learn more about our services? We're
            here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Send us a Message</h2>
              <form className="space-y-6" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" required aria-required="true" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" required aria-required="true" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required aria-required="true" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" required aria-required="true" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    aria-required="true"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600">support@ozbigwinaustralia.com</p>
                      <p className="text-sm text-gray-500">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-gray-600">1800 OZ LOTTO (1800 695 688)</p>
                      <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM AEST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-gray-600">
                        Level 15, 123 Collins Street
                        <br />
                        Melbourne VIC 3000
                        <br />
                        Australia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM AEST
                        <br />
                        Saturday: 10:00 AM - 4:00 PM AEST
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-4">
                  For urgent account issues or technical problems, use our live chat feature available 24/7 on our
                  website.
                </p>
                <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Start Live Chat</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-600 mb-2">How do I claim my winnings?</h3>
                <p className="text-gray-600">
                  Winnings are automatically credited to your account. For prizes over $1,000, additional verification
                  may be required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-600 mb-2">Is my personal information secure?</h3>
                <p className="text-gray-600">
                  Yes, we use bank-level encryption and comply with all Australian privacy laws to protect your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-600 mb-2">Can I play from outside Australia?</h3>
                <p className="text-gray-600">
                  Our services are currently only available to residents of Australia who are 18 years or older.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-600 mb-2">How are the draws conducted?</h3>
                <p className="text-gray-600">
                  All draws are conducted under strict supervision with independent auditing to ensure fairness and
                  transparency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
