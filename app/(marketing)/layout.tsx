import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full grow relative">
                {/* <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(18,139,135,1)_0%,rgba(5,5,5,0)_80%)]"></div> */}
            <Navbar />
            {children}  
        </main>
    );
};
