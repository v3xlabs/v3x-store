export default function App() {
    return (
        <div className="mx-auto w-full flex items-center justify-center p-4 md:p-8">
            <div
                className="grid w-full"
                style={{
                    gridTemplateRows: 'masonry',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '1rem',
                }}
            >
                <div className="relative w-full bg-blue-400 col-span-7 row-span-3 rounded-md">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-white/20"></div>
                </div>
                <div className="w-full bg-pink-200 col-span-5 h-[512px] row-span-2 rounded-md" />
                <div className="w-full bg-gray-200 h-48 col-span-5 row-span-1 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-4 rounded-md" />
                <div className="w-full bg-gray-200 h-64 col-span-12 rounded-md" />
            </div>
        </div>
    );
}
