import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { title, description } from '@/lib/metadata';

export default function Home() {
  return (
    <main className="flex flex-col gap-12 px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
          <Button asChild>
            <a
              href="#download"
              className="transition-all duration-300 ease-in-out hover:scale-105"
            >
              Get Started
            </a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1581093588401-5c1b1e5b5b5b?auto=format&fit=crop&w=800&q=80"
            alt="XnodeOS Hero"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="transition-all duration-300 ease-in-out hover:scale-105">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">No-code Deployment</h3>
            <p className="text-muted-foreground">
              Deploy applications without writing code, using our intuitive UI.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 ease-in-out hover:scale-105">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">Maximum Security</h3>
            <p className="text-muted-foreground">
              Built-in security features protect your system by default.
            </p>
          </CardContent>
        </Card>
        <Card className="transition-all duration-300 ease-in-out hover:scale-105">
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">NixOS Powered</h3>
            <p className="text-muted-foreground">
              Leverage the declarative power of NixOS for reliable deployments.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Security Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 rounded-lg">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold">Security First</h2>
          <p className="text-lg">
            XnodeOS comes with hardened defaults, sandboxing, and continuous updates.
          </p>
          <Button
            asChild
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
          >
            <a href="#learn-more">Learn More</a>
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://images.unsplash.com/photo-1581093588401-5c1b1e5b5b5b?auto=format&fit=crop&w=800&q=80"
            alt="Security"
            width={400}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section id="download" className="flex flex-col items-center gap-4 py-12">
        <h2 className="text-3xl font-semibold">Ready to Deploy?</h2>
        <Button
          asChild
          size="lg"
          className="transition-all duration-300 ease-in-out hover:scale-105"
        >
          <a
            href="https://github.com/your-repo/xnodeos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download XnodeOS
          </a>
        </Button>
      </section>
    </main>
  );
}
