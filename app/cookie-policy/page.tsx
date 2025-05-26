import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for OzBigWinAustralia.com. Learn about how we use cookies and how to manage your cookie preferences.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Cookie Policy for OzBigWinAustralia.com</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <p>This is the cookie policy for OzBigWinAustralia.com, available at ozbigwinaustralia.com</p>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">What Are Cookies</h2>
            <p>
              As is common practice with almost all professional websites, this website uses cookies, which are small
              files that are downloaded to your computer to enhance your experience. This page describes what
              information they collect, how we use it and why we sometimes need to store these cookies. We will also
              share how you can prevent the storage of these cookies, but this may weaken or "break" certain elements of
              the website's functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">How We Use Cookies</h2>
            <p>
              We use cookies for various reasons described below. Unfortunately, in most cases, there are no industry
              standard options to disable cookies without completely disabling functionality and features that they add
              to this page. It is recommended to leave all cookies if you are not sure whether you need them or not, if
              they are used to provide the service you are using.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting your browser settings (see the browser help for how to
              do it). Please note that disabling cookies will affect the functionality of this and many other websites
              you visit. Disabling cookies usually also disables certain features and functionality on this website. It
              is therefore not recommended to disable cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Information Cookies We Set</h2>

            <h3 className="text-xl font-semibold text-blue-600 mb-3">Site Settings Cookies</h3>
            <p>
              To ensure you have a good experience on this site, we offer functionality to enter your settings for how
              this website works when you use it. To remember your preferences, we have to put cookies so that this
              information can be retrieved each time you interact with the website affected by your settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Third Party Cookies</h2>
            <p>
              In some special cases, we also use cookies from trusted third parties. The next section details which
              third party cookies you may encounter on this website.
            </p>
            <p>
              This website uses Google Analytics, which is one of the most widely used and trusted analytical solutions
              in the world online because it helps us understand how you use the site and how we can improve your
              experience. These cookies can track things like how long you spend on the website and which pages you
              visit, so we can continue to create interesting content.
            </p>
            <p>For more information about Google Analytics cookies, see the official Google Analytics page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">More Information</h2>
            <p>
              We hope that cleared things up for you and as mentioned before if there is anything that you are not sure
              whether you need them or not, it is usually safer to leave cookies enabled just in case they interact with
              one of the features you use on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Types of Cookies We Use</h2>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function and cannot be switched off in our systems.
              </p>

              <h3 className="text-lg font-semibold mb-4">Performance Cookies</h3>
              <p className="mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance
                of our site.
              </p>

              <h3 className="text-lg font-semibold mb-4">Functional Cookies</h3>
              <p className="mb-4">
                These cookies enable the website to provide enhanced functionality and personalization.
              </p>

              <h3 className="text-lg font-semibold mb-4">Targeting Cookies</h3>
              <p>
                These cookies may be set through our site by our advertising partners to build a profile of your
                interests.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
