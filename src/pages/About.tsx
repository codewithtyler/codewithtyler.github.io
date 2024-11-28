import { Sidebar } from "@/components/Sidebar";
import { RightSidebar } from "@/components/RightSidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
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
                <BreadcrumbLink>About</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-bold mb-6">About</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              Welcome to my tech blog! I'm passionate about homelab setups, self-hosting, and all things
              related to DevOps and system administration.
            </p>
            <p className="text-lg mb-4">
              This blog is where I share my experiences, tutorials, and insights about:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Building and maintaining homelabs</li>
              <li>Docker containerization and Kubernetes orchestration</li>
              <li>Linux system administration</li>
              <li>Network security and monitoring</li>
              <li>Automation and infrastructure as code</li>
            </ul>
            <p className="text-lg">
              Feel free to explore the articles, and don't hesitate to reach out if you have any
              questions or suggestions!
            </p>
          </div>
        </div>
      </main>
      <RightSidebar recentPosts={[]} />
    </div>
  );
};

export default About;