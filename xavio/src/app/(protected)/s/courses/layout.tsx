import { BackgroundBeams } from "@/components/ui/background-gradient-animation";

interface ClasesLayoutProps {
    children: React.ReactNode;
};

const CoursesLayout = ({children}: ClasesLayoutProps) => {
    return (
        <div>
            <BackgroundBeams  />
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default CoursesLayout;