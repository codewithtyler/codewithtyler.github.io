import { Sidebar } from "@/components/Sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Sponsor = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Sponsor</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold mb-6">Support My Work</h1>
          <p className="text-lg mb-8">
            If you find my content helpful and would like to support my work, here are several ways you
            can contribute:
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>GitHub Sponsors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Support my open source work through GitHub Sponsors</p>
                <Button className="w-full">
                  Sponsor on GitHub
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Buy Me a Coffee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Show your appreciation with a one-time donation</p>
                <Button className="w-full">
                  Buy Me a Coffee
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <RightSidebar recentPosts={[]} />
    </div>
  );
};

export default Sponsor;