import { BackgroundBeams } from "@/components/ui/background-gradient-animation";

interface ClasesLayoutProps {
    children: React.ReactNode;
};

const ClasesLayout = ({children}: ClasesLayoutProps) => {
    return (
        <div className="h-full w-full  bg-zinc-900">
            <BackgroundBeams  />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default ClasesLayout;