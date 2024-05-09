import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
};

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
    return (
        <div>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default ProtectedLayout;