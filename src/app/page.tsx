import AboutSection from "../components/sections/AboutSection";
import WorkExperienceSection from "../components/sections/WorkExperienceSection";
import SideProjectsSection from "../components/sections/SideProjectsSection";
import LinksSection from "../components/sections/LinksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="flex min-h-screen">
        {/* Premium Sidebar */}
        <aside className="w-80 fixed left-0 top-0 h-full premium-sidebar flex flex-col justify-center items-center fade-in-up hidden lg:flex">
          {/* Inner Container: Removed 'sticky', added 'flex-col items-center' */}
          <div className="w-full px-6 flex flex-col items-center text-center">
            {/* Explicit text-center on H1 */}
            <h1 className="text-3xl md:text-4xl font-bold mb-3 serif-heading text-center">
              Taufik Januar Rachman
            </h1>

            {/* Explicit text-center on Role */}
            <p className="text-lg md:text-xl accent-blue mb-6 font-medium text-center">
              Backend Engineer
            </p>

            {/* Centered Divider with mx-auto */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-6 rounded-full mx-auto"></div>

            <p className="text-sm text-gray-300 leading-relaxed mb-8 text-center">
              Building scalable backend systems and high-performance APIs with
              modern technologies.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80 p-4 lg:p-8 pt-20 lg:pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <AboutSection />
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
                <WorkExperienceSection />
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
                <SideProjectsSection />
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.8s" }}>
                <LinksSection />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
