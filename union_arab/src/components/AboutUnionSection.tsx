import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/Separator"
import Script from "next/script"

export default function ServicesPage() {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        
      />

      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Services Header & Description */}
          <div className="lg:col-span-2">
            <div>
              <p className="text-green-500 font-medium mb-2">About UASE</p>
              <h1 className="text-4xl font-bold mb-12">Arab Union Of Small Entreprises</h1>
            </div>
          </div>

          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-gray-700">
                The Arab Union for Small Enterprises, founded in 2004 under the Arab Economic Unity Council, supports
                small business development from its headquarters in Cairo.
              </p>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full w-full md:w-auto">
              Become a Member Now!
            </Button>
          </div>
        </div>

        {/* Row 1 */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Mession Of The UASE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-handshake text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Contribution to Economic Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Participating in the economic integration of Arab countries by leveraging its functions, competencies,
                and expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-store text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Support for Arab Small Enterprises</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Development and coordination of members activities in the field of small enterprise development and
                maximizing their competitiveness.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-link text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Strengthening Business Relations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Bringing Arab small enterprises closer together to foster stronger ties among them.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Row 2 */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Goals of UASE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-users text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Exchange and Cooperation Among Members</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Sharing experiences to optimize the performance of small enterprises, exchanging delegations for
                coordination, and encouraging companies to act as a unified group.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-chart-line text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Support for Small Enterprise Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Encouraging the creation of joint Arab enterprises, submitting projects to the Council of Arab Economic
                Unity, and collaborating with other Arab federations and organizations.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-book-open text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">
                Training, Information, and International Participation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Developing training programs to enhance worker efficiency, participating in international events, and
                providing up-to-date data on the small enterprise sector in Arab countries.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* Row 3 */}
        <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Operational Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-briefcase text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Experience Sharing and Business Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Exchanging successful experiences in small enterprise development, providing technical and
                administrative support to small business owners, and enhancing entrepreneurship through programs and
                competitions.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-bullhorn text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Empowerment and Market Expansion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Empowering Arab women in small business development, promoting franchising, and encouraging the creation
                of an online platform for institutions to share investment opportunities and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="border-t-0 border-x-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 text-blue-900 flex items-center justify-center">
                <i className="fa fa-dollar-sign text-3xl"></i>
              </div>
              <CardTitle className="text-xl mt-4 font-bold">Integration and Financial Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Implementing integration standards for small enterprises, fostering networking among Arab countries, and
                promoting financial inclusion using FinTech solutions for small businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

