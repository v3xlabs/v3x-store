import { AccountSection } from '../components/Account/AccountSection';
import { BalanceSheet } from '../components/BalanceSheet/BalanceSheet';
import { ShippingSection } from '../components/ShippingSection/ShippingSection';
import { StoreItemPreview } from '../components/StoreItem/StoreItem';

export default function App() {
    return (
        <div className="w-full flex items-center justify-center p-4 md:p-8">
            <div
                className="grid w-full"
                style={{
                    gridTemplateRows: 'masonry',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1rem',
                }}
            >
                <div className="border p-4 col-span-8 row-span-1 rounded-md bg-neutral-50 text-xs">
                    <span className="text-yellow-500 font-bold">WARNING</span>{' '}
                    this page is still work in progress and not functional.
                </div>
                <AccountSection />
                <div className="relative w-full border col-span-8 rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20"></div>
                    <StoreItemPreview />
                </div>
                <BalanceSheet />
                <div className="w-full border col-span-8 rounded-md" />
                <ShippingSection />
                <div className="w-full border h-64 col-span-4 rounded-md" />
                <div className="w-full border h-64 col-span-4 rounded-md" />
                <div className="w-full border h-64 col-span-4 rounded-md" />
                <div className="w-full border h-64 col-span-12 rounded-md" />
            </div>
        </div>
    );
}
