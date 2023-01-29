import CustomButton from "./Button";

export default function Navbar() {
    return <div className="flex justify-between px-6 py-6">
        <div className="text-white text-sm">
            Almight
        </div>
        <div>
            <CustomButton name="Connect Wallet" />
        </div>
    </div>
}